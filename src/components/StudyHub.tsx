"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  Code2,
  Github,
  Moon,
  RotateCcw,
  Search,
  Sun,
  User,
} from "lucide-react";
import { CPP_STUDY_DATA } from "@/data/cppStudyData";
import type { ChapterData, McqQuestion, OptionKey, OutputQuestion } from "@/types/study";

type FilterMode = "all" | "outputs" | "mcqs" | "errata";

const STORAGE_KEY = "cpp_study_hub_answers_v1";
const THEME_KEY = "cpp_study_hub_theme_v1";

export function StudyHub() {
  const chapters = CPP_STUDY_DATA.chapters;
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0].id);
  const [activeFilter, setActiveFilter] = useState<FilterMode>("all");
  const [rawSearch, setRawSearch] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey>>({});
  const [openTraces, setOpenTraces] = useState<Record<string, boolean>>({});
  const [isDark, setIsDark] = useState<boolean>(true);

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Hydrate persisted answers & theme
  useEffect(() => {
    try {
      const savedAns = localStorage.getItem(STORAGE_KEY);
      if (savedAns) setUserAnswers(JSON.parse(savedAns));
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const t = setTimeout(() => setSearchQuery(rawSearch.trim().toLowerCase()), 180);
    return () => clearTimeout(t);
  }, [rawSearch]);

  // Sync hidden="until-found" and beforematch on inactive tabpanels
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    for (const ch of chapters) {
      const el = panelRefs.current[ch.id];
      if (!el) continue;
      if (ch.id === activeChapterId) {
        el.removeAttribute("hidden");
      } else {
        el.setAttribute("hidden", "until-found");
      }
      const onBeforeMatch = () => setActiveChapterId(ch.id);
      el.addEventListener("beforematch", onBeforeMatch);
      cleanups.push(() => el.removeEventListener("beforematch", onBeforeMatch));
    }
    return () => cleanups.forEach((fn) => fn());
  }, [activeChapterId, chapters]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // Ignore
    }
  };

  const handleSelectOption = (chapterId: string, num: number, opt: OptionKey) => {
    const key = `${chapterId}:${num}`;
    setUserAnswers((prev) => {
      const next = { ...prev, [key]: opt };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const toggleTrace = (traceKey: string) => {
    setOpenTraces((prev) => ({ ...prev, [traceKey]: !prev[traceKey] }));
  };

  // Global KPIs
  const kpis = useMemo(() => {
    let totalMcqs = 0;
    let totalOutputs = 0;
    let totalErrata = 0;
    for (const ch of chapters) {
      totalMcqs += ch.mcqs.length;
      totalOutputs += ch.outputs.length;
      totalErrata +=
        ch.mcqs.filter((m) => m.errata).length +
        ch.outputs.filter((o) => o.errata).length;
    }

    const attempted = Object.keys(userAnswers).length;
    let correct = 0;
    for (const [k, chosen] of Object.entries(userAnswers)) {
      const [chId, numStr] = k.split(":");
      const ch = chapters.find((c) => c.id === chId);
      const mcq = ch?.mcqs.find((m) => String(m.n) === numStr);
      if (mcq && mcq.ans === chosen) correct++;
    }
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return { totalMcqs, totalOutputs, totalErrata, attempted, correct, accuracy };
  }, [chapters, userAnswers]);

  const handleTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let nextIdx = idx;
    if (e.key === "ArrowRight") nextIdx = (idx + 1) % chapters.length;
    else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + chapters.length) % chapters.length;
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = chapters.length - 1;
    else return;

    e.preventDefault();
    const targetChapter = chapters[nextIdx];
    setActiveChapterId(targetChapter.id);
    tabRefs.current[targetChapter.id]?.focus();
  };

  const matchesSearch = (item: OutputQuestion | McqQuestion, type: "output" | "mcq") => {
    if (activeFilter === "outputs" && type !== "output") return false;
    if (activeFilter === "mcqs" && type !== "mcq") return false;
    if (activeFilter === "errata" && !item.errata && !item.typo && !item.modernNote) {
      return false;
    }
    if (!searchQuery) return true;

    const haystack = [
      item.q,
      item.code ?? "",
      item.modernNote ?? "",
      "why" in item ? item.why : "",
      "trace" in item ? item.trace : "",
      "bookAns" in item ? item.bookAns : "",
      "trueAns" in item ? item.trueAns : "",
      "opts" in item ? Object.values(item.opts).join(" ") : "",
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(searchQuery);
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="font-display flex items-center gap-3 text-base font-bold tracking-[-0.02em] text-[var(--text-primary)] no-underline"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent)]"
              aria-hidden="true"
            >
              <Code2 className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span>IT Series C++ Hub</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            <a
              href="#workspace"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Practice &amp; Traces
            </a>
            <a
              href="#workspace"
              onClick={() => setActiveFilter("errata")}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Book Errata
            </a>
            <a
              href="#author"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Author
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleReset}
              title="Reset quiz progress"
              className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] px-3 text-[13px] font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-2)] active:scale-[0.98]"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>Reset</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] px-3 text-[13px] font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-2)] active:scale-[0.98]"
            >
              {isDark ? (
                <Sun className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              )}
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero & Asymmetric Bento Grid */}
        <section className="mx-auto max-w-[1280px] px-5 pt-12 pb-8 sm:px-8">
          <div className="font-mono mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.09em] text-[var(--accent)]">
            <BookOpen className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>Chapters 1–5 · Verified C++ Solutions &amp; Errata</span>
          </div>
          <h1 className="font-display mb-4 max-w-[18ch] text-balance text-[clamp(2.1rem,4.2vw+0.5rem,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-[var(--text-primary)]">
            Master IT Series C++ MCQs &amp; Output Traces
          </h1>
          <p className="mb-8 max-w-[62ch] text-[1.0625rem] leading-[1.65] text-[var(--text-secondary)]">
            Every Multiple Choice Question and Output Exercise from Chapters 1–5, verified against both Turbo C++ (16-bit) and Modern Standard C++—with step-by-step dry-run traces and flagged textbook errata.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-6 shadow-[var(--card-shadow)] transition-colors hover:border-[var(--border-strong)] md:col-span-7">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
                  LIVE STUDY TELEMETRY
                </span>
                <span className="font-mono rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)] tabular-nums">
                  {kpis.accuracy}% Accuracy ({kpis.correct}/{kpis.attempted})
                </span>
              </div>
              <p className="mb-4 text-[15px] font-medium text-[var(--text-primary)]">
                Track your MCQ practice across all 5 chapters. Click any option below to test yourself and reveal the verified explanation.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] px-4 py-3">
                  <div className="font-display text-2xl font-bold tracking-[-0.02em] tabular-nums">
                    {kpis.totalMcqs}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">Total MCQs</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] px-4 py-3">
                  <div className="font-display text-2xl font-bold tracking-[-0.02em] tabular-nums">
                    {kpis.totalOutputs}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">Output Exercises</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] px-4 py-3">
                  <div className="font-display text-2xl font-bold tracking-[-0.02em] tabular-nums">
                    {kpis.attempted}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">Attempted</div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-2)] px-4 py-3">
                  <div className="font-display text-2xl font-bold tracking-[-0.02em] tabular-nums">
                    {kpis.totalErrata}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">Book Errata</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-6 shadow-[var(--card-shadow)] transition-colors hover:border-[var(--border-strong)] md:col-span-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
                  FEATURED ERRATA // CH 5 Q.26
                </span>
                <span className="font-mono rounded-md bg-[var(--danger-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--danger)]">
                  Book: 501005050
                </span>
              </div>
              <div className="font-mono overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--code-bg)] p-4 text-[13px] leading-relaxed">
                <div className="mb-3 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 text-xs text-[var(--text-muted)]">
                  <span>dry_run_q26.cpp</span>
                  <span className="rounded bg-[var(--success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--success)]">
                    True Output: 50100
                  </span>
                </div>
                <pre className="m-0 whitespace-pre-wrap">
                  <code>{`n1 = 25, n2 = 50;
// 1st if: (25 < 50 && !(50 != 50)) -> true
//   n1 = 50, n2 = 100 -> prints "50100"
// 2nd if: (100 < 2*50 || 50 == 100) -> false!
//   skipped -> nothing else printed.`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Workspace */}
        <section
          id="workspace"
          className="mx-auto max-w-[1280px] px-5 pt-6 pb-16 sm:px-8"
          aria-label="Interactive Study Workspace"
        >
          {/* Single-row Accessible Tablist */}
          <div className="mb-6 border-b border-[var(--border-subtle)]">
            <div
              role="tablist"
              aria-label="Book Chapters"
              className="flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {chapters.map((ch, idx) => {
                const selected = ch.id === activeChapterId;
                return (
                  <button
                    key={ch.id}
                    ref={(el) => {
                      tabRefs.current[ch.id] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${ch.id}`}
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveChapterId(ch.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className="relative flex-none cursor-pointer whitespace-nowrap border-0 bg-transparent px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {ch.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 basis-[260px] max-w-[420px]">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <label htmlFor="search-input" className="sr-only">
                Search questions, code, or explanations
              </label>
              <input
                id="search-input"
                type="search"
                value={rawSearch}
                onChange={(e) => setRawSearch(e.target.value)}
                placeholder="Search questions, code, or errata (e.g. setw, %, 50100)..."
                className="min-h-10 w-full rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] py-2 pr-3.5 pl-10 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter questions">
              {(
                [
                  ["all", "All"],
                  ["outputs", "Output & Traces"],
                  ["mcqs", "MCQs Only"],
                  ["errata", "Errata & Typos"],
                ] as const
              ).map(([mode, label]) => {
                const pressed = activeFilter === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => setActiveFilter(mode)}
                    className={`min-h-9 cursor-pointer rounded-full border px-3.5 text-[13px] font-medium transition ${
                      pressed
                        ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "border-[var(--border-subtle)] bg-[var(--bg-surface-1)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Tab Panels */}
          <div>
            {chapters.map((ch: ChapterData) => {
              const isSelected = ch.id === activeChapterId;
              const filteredOutputs = ch.outputs.filter((o) => matchesSearch(o, "output"));
              const filteredMcqs = ch.mcqs.filter((m) => matchesSearch(m, "mcq"));

              return (
                <div
                  key={ch.id}
                  ref={(el) => {
                    panelRefs.current[ch.id] = el;
                  }}
                  role="tabpanel"
                  id={`panel-${ch.id}`}
                  aria-labelledby={`tab-${ch.id}`}
                  tabIndex={isSelected ? 0 : undefined}
                >
                  <div className="pt-2">
                    <p className="mb-4 text-sm text-[var(--text-secondary)]">{ch.subtitle}</p>

                    {filteredOutputs.length === 0 && filteredMcqs.length === 0 && (
                      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-5 shadow-[var(--card-shadow)]">
                        <p className="m-0 text-sm text-[var(--text-secondary)]">
                          No matching questions in <strong>{ch.title}</strong> for the current filter/search.
                        </p>
                      </div>
                    )}

                    {/* Output Exercises */}
                    {filteredOutputs.length > 0 && (
                      <>
                        <div className="mt-6 mb-4 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                          <h3 className="font-display text-lg font-semibold tracking-[-0.015em]">
                            Output &amp; Evaluation Exercises
                          </h3>
                          <span className="font-mono text-xs font-semibold text-[var(--text-muted)] tabular-nums">
                            {filteredOutputs.length} items
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {filteredOutputs.map((out) => {
                            const traceKey = `${ch.id}:${out.id}`;
                            const isTraceOpen = !!openTraces[traceKey];
                            return (
                              <article
                                key={out.id}
                                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-5 shadow-[var(--card-shadow)] transition-colors hover:border-[var(--border-strong)]"
                              >
                                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                  <span className="font-mono text-xs font-semibold text-[var(--text-muted)] tabular-nums">
                                    {out.id}
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {out.errata ? (
                                      <span className="font-mono rounded-md bg-[var(--danger-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--danger)]">
                                        Book Errata
                                      </span>
                                    ) : out.typo ? (
                                      <span className="font-mono rounded-md bg-[var(--warning-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--warning)]">
                                        Book Typo
                                      </span>
                                    ) : (
                                      <span className="font-mono rounded-md bg-[var(--success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--success)]">
                                        Book Verified
                                      </span>
                                    )}
                                    {out.modernNote && (
                                      <span className="font-mono rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]">
                                        Turbo vs Modern C++
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <p className="mb-3 text-[15px] font-medium text-[var(--text-primary)]">
                                  {out.q}
                                </p>
                                <pre className="font-mono mb-4 overflow-x-auto whitespace-pre-wrap rounded-[10px] border border-[var(--border-subtle)] bg-[var(--code-bg)] px-4 py-3 text-[13px] leading-relaxed">
                                  <code>{out.code}</code>
                                </pre>

                                <div className="flex flex-wrap items-center gap-2.5">
                                  <span className="font-mono rounded-md bg-[var(--success-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--success)]">
                                    Verified Output: {out.trueAns}
                                  </span>
                                  {out.errata && (
                                    <span className="font-mono rounded-md bg-[var(--danger-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--danger)]">
                                      Book Printed: {out.bookAns}
                                    </span>
                                  )}
                                  <button
                                    type="button"
                                    aria-expanded={isTraceOpen}
                                    onClick={() => toggleTrace(traceKey)}
                                    className="cursor-pointer rounded-lg border border-[var(--border-subtle)] bg-transparent px-3 py-1.5 text-[13px] font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-2)]"
                                  >
                                    {isTraceOpen ? "Hide Dry-Run Trace" : "Show Dry-Run Trace"}
                                  </button>
                                </div>

                                {isTraceOpen && (
                                  <div
                                    className={`mt-3 rounded-[10px] border-l-[3px] bg-[var(--bg-surface-2)] px-4 py-3 text-sm text-[var(--text-secondary)] ${
                                      out.errata
                                        ? "border-l-[var(--danger)]"
                                        : "border-l-[var(--accent)]"
                                    }`}
                                  >
                                    <div>
                                      <strong>Step-by-Step Trace:</strong> {out.trace}
                                    </div>
                                    {out.modernNote && (
                                      <div className="mt-1.5">
                                        <strong>Modern C++ Note:</strong> {out.modernNote}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </article>
                            );
                          })}
                        </div>
                      </>
                    )}

                    {/* MCQs */}
                    {filteredMcqs.length > 0 && (
                      <>
                        <div className="mt-8 mb-4 flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                          <h3 className="font-display text-lg font-semibold tracking-[-0.015em]">
                            Multiple Choice Questions
                          </h3>
                          <span className="font-mono text-xs font-semibold text-[var(--text-muted)] tabular-nums">
                            {filteredMcqs.length} MCQs
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {filteredMcqs.map((mcq) => {
                            const key = `${ch.id}:${mcq.n}`;
                            const chosen = userAnswers[key];

                            return (
                              <article
                                key={mcq.n}
                                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-5 shadow-[var(--card-shadow)] transition-colors hover:border-[var(--border-strong)]"
                              >
                                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                  <span className="font-mono text-xs font-semibold text-[var(--text-muted)] tabular-nums">
                                    MCQ #{mcq.n}
                                  </span>
                                  <div className="flex flex-wrap gap-2">
                                    {mcq.errata ? (
                                      <span className="font-mono rounded-md bg-[var(--danger-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--danger)]">
                                        Book Key Errata
                                      </span>
                                    ) : mcq.typo ? (
                                      <span className="font-mono rounded-md bg-[var(--warning-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--warning)]">
                                        Book Typo
                                      </span>
                                    ) : mcq.book ? (
                                      <span className="font-mono rounded-md bg-[var(--success-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--success)]">
                                        Book Key: {mcq.book.toUpperCase()}
                                      </span>
                                    ) : null}
                                    {mcq.modernNote && (
                                      <span className="font-mono rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]">
                                        Turbo vs Modern C++
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <p className="mb-3 text-[15px] font-medium text-[var(--text-primary)]">
                                  {mcq.q}
                                </p>

                                {mcq.code && (
                                  <pre className="font-mono mb-4 overflow-x-auto whitespace-pre-wrap rounded-[10px] border border-[var(--border-subtle)] bg-[var(--code-bg)] px-4 py-3 text-[13px] leading-relaxed">
                                    <code>{mcq.code}</code>
                                  </pre>
                                )}

                                <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                  {(Object.entries(mcq.opts) as Array<[OptionKey, string]>).map(
                                    ([optKey, optText]) => {
                                      let stateCls =
                                        "border-[var(--border-subtle)] bg-[var(--bg-surface-2)]";
                                      if (chosen) {
                                        if (optKey === mcq.ans) {
                                          stateCls =
                                            "border-[var(--success)] bg-[var(--success-soft)]";
                                        } else if (optKey === chosen) {
                                          stateCls =
                                            "border-[var(--danger)] bg-[var(--danger-soft)]";
                                        }
                                      }
                                      return (
                                        <button
                                          key={optKey}
                                          type="button"
                                          onClick={() => handleSelectOption(ch.id, mcq.n, optKey)}
                                          className={`flex min-h-[42px] w-full cursor-pointer items-start gap-3 rounded-[10px] border p-3 text-left text-sm text-[var(--text-primary)] transition hover:border-[var(--border-strong)] ${stateCls}`}
                                        >
                                          <span className="font-mono pt-0.5 text-xs font-bold uppercase text-[var(--text-muted)]">
                                            {optKey}.
                                          </span>
                                          <span>{optText}</span>
                                        </button>
                                      );
                                    }
                                  )}
                                </div>

                                {chosen && (
                                  <div
                                    className={`mt-3 rounded-[10px] border-l-[3px] bg-[var(--bg-surface-2)] px-4 py-3 text-sm text-[var(--text-secondary)] ${
                                      mcq.errata
                                        ? "border-l-[var(--danger)]"
                                        : "border-l-[var(--accent)]"
                                    }`}
                                  >
                                    <div>
                                      <strong>Answer ({mcq.ans.toUpperCase()}):</strong> {mcq.why}
                                    </div>
                                    {mcq.modernNote && (
                                      <div className="mt-1.5">
                                        <strong>Modern C++ Note:</strong> {mcq.modernNote}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </article>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Author Profile Section (AbdullahMalik17) */}
        <section
          id="author"
          className="mx-auto max-w-[1280px] border-t border-[var(--border-subtle)] px-5 py-14 sm:px-8"
          aria-label="Author Details"
        >
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] p-8 shadow-[var(--card-shadow)] md:grid-cols-[auto_1fr]">
            <div
              className="font-display grid h-22 w-22 place-items-center rounded-2xl border border-[var(--border-strong)] bg-[var(--accent-soft)] text-2xl font-bold text-[var(--accent)]"
              aria-hidden="true"
            >
              AM
            </div>
            <div>
              <div className="font-mono mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.09em] text-[var(--accent)]">
                <User className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                <span>Author &amp; Maintainer</span>
              </div>
              <h2 className="font-display mb-2 text-2xl font-bold tracking-[-0.02em]">
                Abdullah Malik (<span className="font-mono">@AbdullahMalik17</span>)
              </h2>
              <p className="m-0 max-w-[65ch] text-[var(--text-secondary)]">
                Software developer and Computer Science enthusiast passionate about C++, systems programming, and modern web engineering. Created this Next.js + TypeScript study hub to help students master <em>IT Series: Object-Oriented Programming using C++</em> with verified answers, step-by-step execution traces, and clear explanations of textbook errata.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/AbdullahMalik17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                >
                  <Github className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>GitHub: AbdullahMalik17</span>
                </a>
                <a
                  href="#workspace"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface-1)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-2)]"
                >
                  <span>Back to Questions</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-[var(--border-subtle)] px-5 py-8 text-[13px] text-[var(--text-muted)] sm:px-8">
        <span>IT Series C++ Study Hub · Next.js + TypeScript + Tailwind CSS</span>
        <span>
          Built by{" "}
          <a
            href="https://github.com/AbdullahMalik17"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--text-primary)] no-underline hover:underline"
          >
            @AbdullahMalik17
          </a>
        </span>
      </footer>
    </>
  );
}
