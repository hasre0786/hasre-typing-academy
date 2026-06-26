import { useCallback, useEffect, useState } from "react";
import type { CategoryKey } from "@/data/categories";

export interface LevelResult {
  wpm: number;
  accuracy: number;
  mistakes: number;
  timeSeconds: number;
  completedAt: number;
}

export interface ProgressState {
  /** Map of `${category}-${level}` -> best result */
  results: Record<string, LevelResult>;
  totalTimeSeconds: number;
  streakDays: number;
  lastActiveDay: string | null;
  studentName: string;
}

const KEY = "hsp-progress-v1";

const empty: ProgressState = {
  results: {},
  totalTimeSeconds: 0,
  streakDays: 0,
  lastActiveDay: null,
  studentName: "",
};

function read(): ProgressState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

function write(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(empty);

  useEffect(() => {
    setState(read());
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setState(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const saveResult = useCallback(
    (category: CategoryKey, level: number, result: LevelResult) => {
      setState((prev) => {
        const key = `${category}-${level}`;
        const existing = prev.results[key];
        // Keep best WPM
        const best =
          !existing || result.wpm > existing.wpm ? result : existing;
        const today = new Date().toISOString().slice(0, 10);
        let streak = prev.streakDays;
        if (prev.lastActiveDay !== today) {
          const yesterday = new Date(Date.now() - 86400000)
            .toISOString()
            .slice(0, 10);
          streak = prev.lastActiveDay === yesterday ? streak + 1 : 1;
        } else if (streak === 0) {
          streak = 1;
        }
        const next: ProgressState = {
          ...prev,
          results: { ...prev.results, [key]: best },
          totalTimeSeconds: prev.totalTimeSeconds + result.timeSeconds,
          lastActiveDay: today,
          streakDays: streak,
        };
        write(next);
        return next;
      });
    },
    []
  );

  const setStudentName = useCallback((name: string) => {
    setState((prev) => {
      const next = { ...prev, studentName: name };
      write(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    write(empty);
    setState(empty);
  }, []);

  return { state, saveResult, setStudentName, reset };
}

export function countCompleted(state: ProgressState, category: CategoryKey) {
  return Object.keys(state.results).filter((k) => k.startsWith(`${category}-`))
    .length;
}

export function getBest(
  state: ProgressState,
  category: CategoryKey,
  level: number
): LevelResult | undefined {
  return state.results[`${category}-${level}`];
}
