// IT Series C++ Study Hub — Interactive Logic
// Implements accessible tabs (hidden="until-found" + beforematch + roving tabindex),
// interactive MCQ quiz mode, step-by-step output traces, search, and theme persistence.

(function () {
  const data = window.CPP_STUDY_DATA;
  if (!data) return;

  const tablist = document.getElementById("chapter-tablist");
  const panelsContainer = document.getElementById("chapter-panels");
  const searchInput = document.getElementById("search-input");
  const filterPills = Array.from(document.querySelectorAll(".pill"));
  const themeToggle = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const resetBtn = document.getElementById("reset-progress");

  const STORAGE_KEY = "cpp_study_hub_answers_v1";
  const THEME_KEY = "cpp_study_hub_theme_v1";

  let activeChapterId = data.chapters[0].id;
  let activeFilter = "all";
  let searchQuery = "";
  let userAnswers = loadAnswers();

  function loadAnswers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
    } catch {
      // Ignore storage quota errors
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Theme initialization
  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    themeLabel.textContent = isDark ? "Light" : "Dark";
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }

  const savedTheme = (() => {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  })();
  applyTheme(savedTheme || "dark");

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
  });

  // Update KPIs
  function updateKPIs() {
    let totalMcqs = 0;
    let totalOutputs = 0;
    let totalErrata = 0;
    for (const ch of data.chapters) {
      totalMcqs += ch.mcqs.length;
      totalOutputs += ch.outputs.length;
      totalErrata += ch.mcqs.filter(m => m.errata).length + ch.outputs.filter(o => o.errata).length;
    }

    const attemptedKeys = Object.keys(userAnswers);
    let correctCount = 0;
    for (const key of attemptedKeys) {
      const [chId, numStr] = key.split(":");
      const ch = data.chapters.find(c => c.id === chId);
      const mcq = ch && ch.mcqs.find(m => String(m.n) === numStr);
      if (mcq && userAnswers[key] === mcq.ans) correctCount++;
    }

    document.getElementById("kpi-total-mcqs").textContent = totalMcqs;
    document.getElementById("kpi-outputs").textContent = totalOutputs;
    document.getElementById("kpi-answered").textContent = attemptedKeys.length;
    document.getElementById("kpi-errata").textContent = totalErrata;

    const pct = attemptedKeys.length ? Math.round((correctCount / attemptedKeys.length) * 100) : 0;
    document.getElementById("accuracy-badge").textContent = `${pct}% Accuracy (${correctCount}/${attemptedKeys.length})`;
  }

  // Build Tabs & Panels
  function renderTabs() {
    tablist.innerHTML = "";
    panelsContainer.innerHTML = "";

    data.chapters.forEach((ch, idx) => {
      const isSelected = ch.id === activeChapterId;
      const tab = document.createElement("button");
      tab.type = "button";
      tab.role = "tab";
      tab.id = `tab-${ch.id}`;
      tab.textContent = ch.title;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");

      tab.addEventListener("click", () => selectTab(ch.id));
      tab.addEventListener("keydown", (e) => {
        const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
        const cur = tabs.indexOf(tab);
        let nextIdx = cur;
        if (e.key === "ArrowRight") nextIdx = (cur + 1) % tabs.length;
        else if (e.key === "ArrowLeft") nextIdx = (cur - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") nextIdx = 0;
        else if (e.key === "End") nextIdx = tabs.length - 1;
        else return;

        e.preventDefault();
        tabs[nextIdx].focus();
        selectTab(data.chapters[nextIdx].id);
      });

      tablist.appendChild(tab);

      // Panel uses hidden="until-found" when inactive (Modern Web Guidance)
      const panel = document.createElement("div");
      panel.role = "tabpanel";
      panel.id = `panel-${ch.id}`;
      panel.setAttribute("aria-labelledby", tab.id);
      if (isSelected) {
        panel.setAttribute("tabindex", "0");
      } else {
        panel.setAttribute("hidden", "until-found");
      }

      // Sync tab selection when browser Find-in-Page reveals a hidden panel
      panel.addEventListener("beforematch", () => {
        selectTab(ch.id);
      });

      const inner = document.createElement("div");
      inner.className = "panel-inner";
      panel.appendChild(inner);
      panelsContainer.appendChild(panel);
    });
  }

  function selectTab(chapterId) {
    activeChapterId = chapterId;
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const panels = Array.from(panelsContainer.querySelectorAll('[role="tabpanel"]'));

    tabs.forEach((t, i) => {
      const ch = data.chapters[i];
      const selected = ch.id === chapterId;
      t.setAttribute("aria-selected", String(selected));
      t.setAttribute("tabindex", selected ? "0" : "-1");
      if (selected) {
        t.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    });

    panels.forEach((p, i) => {
      const ch = data.chapters[i];
      const selected = ch.id === chapterId;
      if (selected) {
        p.removeAttribute("hidden");
        p.setAttribute("tabindex", "0");
      } else {
        p.setAttribute("hidden", "until-found");
        p.removeAttribute("tabindex");
      }
    });
  }

  function matchesFilter(item, type) {
    if (activeFilter === "outputs" && type !== "output") return false;
    if (activeFilter === "mcqs" && type !== "mcq") return false;
    if (activeFilter === "errata" && !item.errata && !item.typo && !item.modernNote) return false;

    if (searchQuery.trim() !== "") {
      const q = searchQuery.trim().toLowerCase();
      const haystack = [
        item.q,
        item.code || "",
        item.why || "",
        item.trace || "",
        item.bookAns || "",
        item.trueAns || "",
        item.modernNote || "",
        item.opts ? Object.values(item.opts).join(" ") : ""
      ].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }

  function renderAllPanelsContent() {
    data.chapters.forEach((ch) => {
      const panel = document.getElementById(`panel-${ch.id}`);
      const inner = panel.querySelector(".panel-inner");
      inner.innerHTML = "";

      const filteredOutputs = ch.outputs.filter(o => matchesFilter(o, "output"));
      const filteredMcqs = ch.mcqs.filter(m => matchesFilter(m, "mcq"));

      const header = document.createElement("div");
      header.innerHTML = `<p style="color: var(--text-secondary); margin: 0 0 1rem;">${escapeHtml(ch.subtitle)}</p>`;
      inner.appendChild(header);

      if (filteredOutputs.length === 0 && filteredMcqs.length === 0) {
        const empty = document.createElement("div");
        empty.className = "q-card";
        empty.innerHTML = `<p style="margin:0;color:var(--text-secondary);">No matching questions in <strong>${escapeHtml(ch.title)}</strong> for the current filter/search.</p>`;
        inner.appendChild(empty);
        return;
      }

      // Output Exercises Section
      if (filteredOutputs.length > 0) {
        const secHead = document.createElement("div");
        secHead.className = "section-heading";
        secHead.innerHTML = `<h3>Output &amp; Evaluation Exercises</h3><span class="q-num tabular-nums">${filteredOutputs.length} items</span>`;
        inner.appendChild(secHead);

        const grid = document.createElement("div");
        grid.className = "cards-grid";

        for (const out of filteredOutputs) {
          const card = document.createElement("article");
          card.className = "q-card";

          const badges = [];
          if (out.errata) badges.push(`<span class="badge badge-errata">Book Errata</span>`);
          else if (out.typo) badges.push(`<span class="badge badge-warn">Book Typo</span>`);
          else badges.push(`<span class="badge badge-ok">Book Verified</span>`);
          if (out.modernNote) badges.push(`<span class="badge badge-info">Turbo vs Modern C++</span>`);

          card.innerHTML = `
            <div class="q-meta">
              <span class="q-num tabular-nums">${escapeHtml(out.id)}</span>
              <div class="badges">${badges.join("")}</div>
            </div>
            <p class="q-prompt">${escapeHtml(out.q)}</p>
            <pre class="code-block"><code>${escapeHtml(out.code)}</code></pre>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:0.5rem;">
              <span class="badge badge-ok">Verified Output: ${escapeHtml(out.trueAns)}</span>
              ${out.errata ? `<span class="badge badge-errata">Book Printed: ${escapeHtml(out.bookAns)}</span>` : ""}
              <button type="button" class="trace-toggle" aria-expanded="false">Show Dry-Run Trace</button>
            </div>
            <div class="explanation-box ${out.errata ? "is-errata" : ""}" hidden>
              <div><strong>Step-by-Step Trace:</strong> ${escapeHtml(out.trace)}</div>
              ${out.modernNote ? `<div style="margin-top:0.4rem;"><strong>Modern C++ Note:</strong> ${escapeHtml(out.modernNote)}</div>` : ""}
            </div>
          `;

          const toggleBtn = card.querySelector(".trace-toggle");
          const expBox = card.querySelector(".explanation-box");
          toggleBtn.addEventListener("click", () => {
            const open = toggleBtn.getAttribute("aria-expanded") === "true";
            toggleBtn.setAttribute("aria-expanded", String(!open));
            toggleBtn.textContent = open ? "Show Dry-Run Trace" : "Hide Dry-Run Trace";
            expBox.hidden = open;
          });

          grid.appendChild(card);
        }
        inner.appendChild(grid);
      }

      // MCQs Section
      if (filteredMcqs.length > 0) {
        const secHead = document.createElement("div");
        secHead.className = "section-heading";
        secHead.innerHTML = `<h3>Multiple Choice Questions</h3><span class="q-num tabular-nums">${filteredMcqs.length} MCQs</span>`;
        inner.appendChild(secHead);

        const grid = document.createElement("div");
        grid.className = "cards-grid";

        for (const mcq of filteredMcqs) {
          const key = `${ch.id}:${mcq.n}`;
          const chosen = userAnswers[key];
          const card = document.createElement("article");
          card.className = "q-card";

          const badges = [];
          if (mcq.errata) badges.push(`<span class="badge badge-errata">Book Key Errata</span>`);
          else if (mcq.typo) badges.push(`<span class="badge badge-warn">Book Typo</span>`);
          else if (mcq.book) badges.push(`<span class="badge badge-ok">Book Key: ${mcq.book.toUpperCase()}</span>`);
          if (mcq.modernNote) badges.push(`<span class="badge badge-info">Turbo vs Modern C++</span>`);

          card.innerHTML = `
            <div class="q-meta">
              <span class="q-num tabular-nums">MCQ #${mcq.n}</span>
              <div class="badges">${badges.join("")}</div>
            </div>
            <p class="q-prompt">${escapeHtml(mcq.q)}</p>
            ${mcq.code ? `<pre class="code-block"><code>${escapeHtml(mcq.code)}</code></pre>` : ""}
            <div class="options-grid"></div>
            <div class="explanation-box ${mcq.errata ? "is-errata" : ""}" ${chosen ? "" : "hidden"}>
              <div><strong>Answer (${mcq.ans.toUpperCase()}):</strong> ${escapeHtml(mcq.why)}</div>
              ${mcq.modernNote ? `<div style="margin-top:0.4rem;"><strong>Modern C++ Note:</strong> ${escapeHtml(mcq.modernNote)}</div>` : ""}
            </div>
          `;

          const optsGrid = card.querySelector(".options-grid");
          const expBox = card.querySelector(".explanation-box");

          for (const [optKey, optText] of Object.entries(mcq.opts)) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option-btn";
            if (chosen) {
              if (optKey === mcq.ans) btn.classList.add("is-correct");
              else if (optKey === chosen) btn.classList.add("is-wrong");
            }
            btn.innerHTML = `<span class="opt-key">${optKey}.</span><span>${escapeHtml(optText)}</span>`;
            btn.addEventListener("click", () => {
              userAnswers[key] = optKey;
              saveAnswers();
              updateKPIs();
              // Update option classes in-place
              Array.from(optsGrid.children).forEach((b, idx) => {
                const k = Object.keys(mcq.opts)[idx];
                b.classList.remove("is-correct", "is-wrong");
                if (k === mcq.ans) b.classList.add("is-correct");
                else if (k === optKey) b.classList.add("is-wrong");
              });
              expBox.hidden = false;
            });
            optsGrid.appendChild(btn);
          }

          grid.appendChild(card);
        }
        inner.appendChild(grid);
      }
    });
  }

  // Filter Pills
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      activeFilter = pill.dataset.filter;
      filterPills.forEach(p => p.setAttribute("aria-pressed", String(p === pill)));
      renderAllPanelsContent();
    });
  });

  // Nav Errata shortcut
  document.getElementById("nav-errata-link").addEventListener("click", () => {
    const errataPill = document.getElementById("errata-focus");
    errataPill.click();
  });

  // Debounced Search
  let searchTimer = null;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchQuery = searchInput.value;
      renderAllPanelsContent();
    }, 180);
  });

  // Reset Progress
  resetBtn.addEventListener("click", () => {
    userAnswers = {};
    saveAnswers();
    updateKPIs();
    renderAllPanelsContent();
  });

  // Initial Render
  renderTabs();
  renderAllPanelsContent();
  updateKPIs();
})();
