import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useProgress, countCompleted } from "@/hooks/useProgress";

const colorMap = {
  easy: { bg: "from-[oklch(0.78_0.16_150)] to-[oklch(0.6_0.18_150)]", ring: "ring-[oklch(0.62_0.17_150)]/30" },
  normal: { bg: "from-[oklch(0.72_0.18_245)] to-[oklch(0.55_0.2_265)]", ring: "ring-[oklch(0.58_0.18_245)]/30" },
  hard: { bg: "from-[oklch(0.78_0.18_50)] to-[oklch(0.62_0.2_30)]", ring: "ring-[oklch(0.66_0.18_50)]/30" },
  advance: { bg: "from-[oklch(0.82_0.16_80)] to-[oklch(0.6_0.2_50)]", ring: "ring-[oklch(0.72_0.16_80)]/40" },
} as const;

export function CategoryCards() {
  const { state } = useProgress();
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
          Choose Your <span className="gradient-text">Typing Path</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Four levels of practice. Start where you're comfortable and grow at your own pace.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c, i) => {
          const Icon = c.icon;
          const done = countCompleted(state, c.key);
          const pct = Math.round((done / c.totalLevels) * 100);
          return (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/${c.key}`}
                className={`group relative block h-full glass rounded-3xl p-6 ring-1 ${colorMap[c.color].ring} hover:-translate-y-1.5 hover:shadow-card transition-all overflow-hidden`}
              >
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${colorMap[c.color].bg} opacity-30 blur-2xl group-hover:opacity-50 transition-opacity`} />
                <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${colorMap[c.color].bg} grid place-items-center text-white shadow-glow animate-float`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.tagline}</p>
                <p className="mt-3 text-sm text-foreground/80 line-clamp-3">{c.description}</p>

                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="font-medium text-muted-foreground">
                    {c.totalLevels} Levels · {c.wordsPerLevel} words
                  </span>
                  {done > 0 && (
                    <span className="inline-flex items-center gap-1 text-[oklch(0.55_0.2_150)] font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" /> {done} done
                    </span>
                  )}
                </div>

                <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full bg-gradient-to-r ${colorMap[c.color].bg}`}
                  />
                </div>

                <div className="mt-5 inline-flex items-center gap-1.5 font-semibold text-sm text-primary group-hover:gap-2.5 transition-all">
                  Start Practice <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
