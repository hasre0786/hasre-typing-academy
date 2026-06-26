import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, CheckCircle2, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { getCategory, type CategoryKey } from "@/data/categories";
import { getLevels } from "@/data/levels";
import { useProgress, getBest } from "@/hooks/useProgress";

const PAGE_SIZE = 30;

const ACCENT: Record<string, string> = {
  easy: "from-[oklch(0.78_0.16_150)] to-[oklch(0.6_0.18_150)]",
  normal: "from-[oklch(0.72_0.18_245)] to-[oklch(0.55_0.2_265)]",
  hard: "from-[oklch(0.78_0.18_50)] to-[oklch(0.62_0.2_30)]",
  advance: "from-[oklch(0.82_0.16_80)] to-[oklch(0.6_0.2_50)]",
};

/** Link for a level URL like /easy/level-3. */
export function LevelLink({
  category,
  level,
  className,
  children,
}: {
  category: CategoryKey;
  level: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={`/${category}/level-${level}`} className={className}>
      {children}
    </Link>
  );
}

export function parseLevelParam(raw: string): number {
  const s = String(raw).toLowerCase().replace(/^level[-_]?/, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

export function LevelsPageView({ categoryKey }: { categoryKey: CategoryKey }) {
  const category = getCategory(categoryKey)!;
  const { state } = useProgress();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const levels = getLevels(categoryKey);

  const completedCount = useMemo(
    () => levels.filter((l) => !!getBest(state, categoryKey, l.number)).length,
    [levels, state, categoryKey]
  );
  const progressPct = Math.round((completedCount / category.totalLevels) * 100);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return levels;
    return levels.filter(
      (l) => String(l.number).includes(term) || l.title.toLowerCase().includes(term)
    );
  }, [levels, q]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const visible = filtered.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);
  const accent = ACCENT[category.color];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/typing-levels" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ChevronLeft className="h-4 w-4" /> All categories
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 relative overflow-hidden rounded-3xl glass p-6 sm:p-10"
      >
        <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-3xl`} />
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">{category.title}</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-secondary px-3 py-1 font-medium">{category.totalLevels} Levels</span>
          <span className="rounded-full bg-secondary px-3 py-1 font-medium">{category.wordsPerLevel} words / level</span>
          {category.topics.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full bg-accent text-accent-foreground px-3 py-1 font-medium">{t}</span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6 }}
              className={`h-full bg-gradient-to-r ${accent}`}
            />
          </div>
          <span className="text-xs sm:text-sm font-mono font-semibold inline-flex items-center gap-1.5">
            <Trophy className="h-4 w-4 text-[oklch(0.78_0.18_80)]" />
            {completedCount} / {category.totalLevels}
          </span>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(0); }}
            placeholder="Search by number or title..."
            className="w-full rounded-full glass pl-9 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        {pageCount > 1 && (
          <div className="inline-flex items-center gap-1 glass rounded-full p-1">
            <button
              onClick={() => setPage(Math.max(0, safePage - 1))}
              disabled={safePage === 0}
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-accent disabled:opacity-30"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: pageCount }, (_, i) => {
              const from = i * PAGE_SIZE + 1;
              const to = Math.min((i + 1) * PAGE_SIZE, filtered.length);
              return (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`px-3 h-8 rounded-full text-xs font-semibold transition ${
                    i === safePage
                      ? `bg-gradient-to-r ${accent} text-white shadow`
                      : "hover:bg-accent text-muted-foreground"
                  }`}
                >
                  {from}–{to}
                </button>
              );
            })}
            <button
              onClick={() => setPage(Math.min(pageCount - 1, safePage + 1))}
              disabled={safePage === pageCount - 1}
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-accent disabled:opacity-30"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {visible.map((lv, i) => {
          const best = getBest(state, categoryKey, lv.number);
          const completed = !!best;
          return (
            <motion.div
              key={lv.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (i % 12) * 0.025 }}
            >
              <LevelLink
                category={categoryKey}
                level={lv.number}
                className="group relative block rounded-2xl glass p-4 hover:-translate-y-1 hover:shadow-card transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${accent} grid place-items-center text-white font-bold text-sm shadow`}>
                    {lv.number}
                  </div>
                  {completed && <CheckCircle2 className="h-5 w-5 text-[oklch(0.6_0.18_150)]" />}
                </div>
                <h3 className="mt-3 text-sm font-semibold line-clamp-2 leading-snug min-h-[2.5rem]">
                  {lv.title}
                </h3>
                {best ? (
                  <p className="text-[11px] text-muted-foreground mt-1 font-mono">
                    {best.wpm} WPM · {best.accuracy}%
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground/70 mt-1">Not started</p>
                )}
              </LevelLink>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No levels match your search.
        </p>
      )}
    </div>
  );
}
