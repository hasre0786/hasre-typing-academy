import { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";
import { SAMPLE_LEADERBOARD } from "@/data/leaderboard";

const medal = (rank: number) => {
  if (rank === 1) return <Trophy className="h-5 w-5 text-[oklch(0.78_0.18_80)]" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-[oklch(0.7_0.02_260)]" />;
  if (rank === 3) return <Award className="h-5 w-5 text-[oklch(0.62_0.13_50)]" />;
  return <span className="text-muted-foreground font-semibold">#{rank}</span>;
};

export default function Leaderboard() {
  useEffect(() => { document.title = "Leaderboard — HASRE SUCCESS POINT"; }, []);
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
          <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="mt-3 text-muted-foreground">Top typists this season (sample data).</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 glass rounded-3xl overflow-hidden shadow-card"
      >
        <div className="grid grid-cols-12 gap-2 px-5 py-3 text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60">
          <div className="col-span-2">Rank</div>
          <div className="col-span-5">Student</div>
          <div className="col-span-2 text-center">Level</div>
          <div className="col-span-1 text-center">WPM</div>
          <div className="col-span-2 text-right">Accuracy</div>
        </div>
        {SAMPLE_LEADERBOARD.map((r, i) => (
          <motion.div
            key={r.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="grid grid-cols-12 gap-2 items-center px-5 py-4 border-b border-border/40 last:border-0 hover:bg-accent/50 transition-colors"
          >
            <div className="col-span-2 flex items-center gap-2">{medal(r.rank)}</div>
            <div className="col-span-5 font-semibold">{r.name}</div>
            <div className="col-span-2 text-center text-sm text-muted-foreground">{r.level}</div>
            <div className="col-span-1 text-center font-mono font-bold gradient-text">{r.wpm}</div>
            <div className="col-span-2 text-right font-mono">{r.accuracy}%</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
