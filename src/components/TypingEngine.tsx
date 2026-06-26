import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Pause, Play, RotateCcw, ChevronLeft, ChevronRight, Volume2, VolumeX, Trophy,
} from "lucide-react";
import type { CategoryKey } from "@/data/categories";
import { getLevels } from "@/data/levels";
import { VirtualKeyboard } from "./VirtualKeyboard";
import {
  playKey, playError, playSuccess, isSoundEnabled, setSoundEnabled,
} from "@/lib/typing-sounds";
import { useProgress } from "@/hooks/useProgress";
import { toast } from "sonner";

interface Props {
  category: CategoryKey;
  level: number;
  text: string;
  title: string;
}

function calcWPM(typed: number, seconds: number) {
  if (seconds === 0) return 0;
  return Math.round((typed / 5) / (seconds / 60));
}

export function TypingEngine({ category, level, text, title }: Props) {
  const navigate = useNavigate();
  const { saveResult } = useProgress();
  const [input, setInput] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [caps, setCaps] = useState(false);
  const [sound, setSound] = useState(isSoundEnabled());
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const allLevels = getLevels(category);
  const hasPrev = allLevels.some((l) => l.number === level - 1);
  const hasNext = allLevels.some((l) => l.number === level + 1);

  // Timer
  useEffect(() => {
    if (!startedAt || paused || done) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 250);
    return () => clearInterval(id);
  }, [startedAt, paused, done]);

  // Focus on mount + when text changes
  useEffect(() => {
    inputRef.current?.focus();
    setInput(""); setStartedAt(null); setElapsed(0); setMistakes(0); setDone(false); setPaused(false);
  }, [text]);

  const correctChars = useMemo(() => {
    let c = 0;
    for (let i = 0; i < input.length; i++) if (input[i] === text[i]) c++;
    return c;
  }, [input, text]);

  const accuracy = input.length === 0 ? 100 : Math.round((correctChars / input.length) * 100);
  const wpm = calcWPM(correctChars, Math.max(elapsed, 1));
  const progress = Math.min(100, Math.round((input.length / text.length) * 100));
  const wordCount = input.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (done || paused) return;
      const v = e.target.value;
      if (v.length > text.length) return;
      if (!startedAt && v.length > 0) setStartedAt(Date.now());

      const newLen = v.length;
      const prevLen = input.length;
      if (newLen > prevLen) {
        const newChar = v[newLen - 1];
        const expected = text[newLen - 1];
        if (newChar === expected) {
          playKey();
        } else {
          playError();
          setMistakes((m) => m + 1);
        }
      }
      setInput(v);

      if (v.length === text.length) {
        // finished
        const seconds = Math.max(Math.floor((Date.now() - (startedAt ?? Date.now())) / 1000), 1);
        const finalWpm = calcWPM(correctChars + (v[v.length - 1] === text[text.length - 1] ? 1 : 0), seconds);
        const finalAcc = Math.round(((correctChars + (v[v.length - 1] === text[text.length - 1] ? 1 : 0)) / text.length) * 100);
        setDone(true);
        playSuccess();
        confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 } });
        saveResult(category, level, {
          wpm: finalWpm,
          accuracy: finalAcc,
          mistakes,
          timeSeconds: seconds,
          completedAt: Date.now(),
        });
        toast.success(`Level ${level} complete!`, {
          description: `${finalWpm} WPM · ${finalAcc}% accuracy`,
        });
      }
    },
    [text, input, done, paused, startedAt, correctChars, mistakes, saveResult, category, level]
  );

  // Detect Caps Lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      setCaps(e.getModifierState?.("CapsLock") ?? false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
    };
  }, []);

  const restart = () => {
    setInput(""); setStartedAt(null); setElapsed(0); setMistakes(0); setDone(false); setPaused(false);
    inputRef.current?.focus();
  };

  const toggleSound = () => {
    const next = !sound; setSound(next); setSoundEnabled(next);
  };

  const goLevel = (delta: number) => {
    navigate(`/${category}/level-${level + delta}`);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        <Link
          to={`/${category}`}
          className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Back to levels
        </Link>
        <h1 className="font-display text-xl sm:text-2xl font-bold">
          Level {level}: <span className="gradient-text">{title}</span>
        </h1>
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4">
        {[
          { l: "WPM", v: wpm },
          { l: "Accuracy", v: `${accuracy}%` },
          { l: "Mistakes", v: mistakes },
          { l: "Words", v: wordCount },
          { l: "Chars", v: `${input.length}/${text.length}` },
          { l: "Time", v: `${elapsed}s` },
        ].map((s) => (
          <div key={s.l} className="glass rounded-xl p-3 text-center">
            <div className="text-lg sm:text-xl font-extrabold gradient-text font-mono">{s.v}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-secondary overflow-hidden mb-6">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="h-full gradient-bg"
        />
      </div>

      {/* Typing area — single line, right-to-left scroll as you type */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="glass rounded-3xl p-5 sm:p-8 shadow-card cursor-text w-full max-w-full overflow-hidden"
      >
        <div className="relative h-16 sm:h-20 overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-background to-transparent z-10" />
          {/* caret marker fixed in viewport */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-9 sm:h-11 w-[2px] gradient-bg animate-blink z-20" />
          <div
            className="absolute top-1/2 whitespace-pre font-mono text-2xl sm:text-3xl tracking-normal will-change-transform transition-transform duration-100 ease-linear"
            style={{
              left: "33.333%",
              transform: `translate(-${input.length}ch, -50%)`,
            }}
          >
            {text.split("").map((ch, i) => {
              const typed = input[i];
              let cls = "text-muted-foreground/50";
              if (typed != null) {
                cls = typed === ch
                  ? "text-[oklch(0.55_0.2_150)]"
                  : "text-destructive bg-destructive/15 rounded";
              }
              return (
                <span key={i} className={cls}>
                  {ch === " " ? "\u00A0" : ch}
                </span>
              );
            })}
          </div>
        </div>
      </div>



      {/* Hidden input */}
      <input
        ref={inputRef}
        value={input}
        onChange={handleChange}
        disabled={paused || done}
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        className="sr-only"
      />

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          {paused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={restart}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent"
        >
          <RotateCcw className="h-4 w-4" /> Restart
        </button>
        <button
          onClick={toggleSound}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent"
        >
          {sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          Sound
        </button>
        <button
          disabled={!hasPrev}
          onClick={() => goLevel(-1)}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-accent disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <button
          disabled={!hasNext}
          onClick={() => goLevel(1)}
          className="inline-flex items-center gap-2 rounded-full gradient-bg text-primary-foreground px-4 py-2 text-sm shadow-glow disabled:opacity-40"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <VirtualKeyboard nextChar={text[input.length]} caps={caps} />

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 glass rounded-3xl p-8 text-center"
        >
          <Trophy className="mx-auto h-12 w-12 text-[oklch(0.78_0.18_80)]" />
          <h3 className="mt-3 text-2xl font-display font-bold">Level Complete!</h3>
          <p className="text-muted-foreground mt-1">
            {wpm} WPM · {accuracy}% accuracy · {mistakes} mistakes
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button onClick={restart} className="rounded-full glass px-5 py-2.5 text-sm hover:bg-accent">
              Try Again
            </button>
            {hasNext && (
              <button
                onClick={() => goLevel(1)}
                className="rounded-full gradient-bg text-primary-foreground px-5 py-2.5 text-sm shadow-glow"
              >
                Next Level →
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
