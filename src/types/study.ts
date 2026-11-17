export type OptionKey = "a" | "b" | "c" | "d";

export interface OutputQuestion {
  id: string;
  q: string;
  code: string;
  bookAns: string;
  trueAns: string;
  trace: string;
  errata?: boolean;
  typo?: boolean;
  modernNote?: string;
}

export interface McqQuestion {
  n: number;
  q: string;
  code?: string;
  opts: Record<OptionKey, string>;
  ans: OptionKey;
  book?: OptionKey;
  why: string;
  errata?: boolean;
  typo?: boolean;
  modernNote?: string;
}

export interface ChapterData {
  id: string;
  title: string;
  subtitle: string;
  outputs: OutputQuestion[];
  mcqs: McqQuestion[];
}
