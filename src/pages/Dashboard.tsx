import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Flame, Clock, Target, Award, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useProgress, countCompleted } from "@/hooks/useProgress";

export default function Dashboard() {
  useEffect(() => { document.title = "Dashboard — HASRE SUCCESS POINT"; }, []);
  const { state } = useProgress();

  const stats = useMemo(() => {
    const results = Object.values(state.results);
    const total = results.length;
    const avgWpm = total ? Math.round(results.reduce((s, r) => s + r.wpm, 0) / total) : 0;
    const avgAcc = total ? Math.round(results.reduce((s, r) => s + r.accuracy, 0) / total) : 0;
    const bestWpm = total ? Math.max(...results.map((r) => r.wpm)) : 0;
    const mins = Math.round(state.totalTimeSeconds / 60);
    return { total, avgWpm, avgAcc, bestWpm, mins };
  }, [state]);

  const cards = [
    { l: "Levels Completed", v: stats.total, icon: Trophy },
    { l: "Best WPM", v: stats.bestWpm, icon: Award },
    { l: "Avg Accuracy", v: `${stats.avgAcc}%`, icon: Target },
    { l: "Practice Time", v: `${stats.mins}m`, icon: Clock },
    { l: "Day Streak", v: state.streakDays, icon: Flame },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl glass p-6 sm:p-10 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full gradient-bg opacity-20 blur-3xl" />
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          Welcome{state.studentName ? `, ${state.studentName}` : ""} 👋
        </h1>
        <p className="text-muted-foreground mt-2">Track your typing journey at a glance.</p>
      </motion.div>

      <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.l}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-4"
            >
              <Icon className="h-5 w-5 text-primary" />
              <div className="mt-2 text-2xl font-extrabold font-mono gradient-text">{c.v}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.l}</div>
            </motion.div>
          );
        })}
      </div>

      <h2 className="mt-10 mb-4 font-display text-xl font-bold">Progress by Category</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c) => {
          const done = countCompleted(state, c.key);
          const pct = Math.round((done / c.totalLevels) * 100);
          const to = `/${c.key}`;
          return (
            <Link key={c.key} to={to} className="block glass rounded-2xl p-5 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{c.title}</h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{done} / {c.totalLevels} levels</p>
              <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full gradient-bg" style={{ width: `${pct}%` }} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/typing-levels" className="rounded-full gradient-bg text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow">
          Continue Practice
        </Link>
      </div>
    </div>
  );
}
