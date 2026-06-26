import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Users, Flame, Leaf, Cpu, Crown } from "lucide-react";
import directorImg from "@/assets/director.jpg";

const SKILLS = [
  { label: "Typing Speed", value: 95 },
  { label: "Typing Accuracy", value: 98 },
  { label: "Computer Knowledge", value: 90 },
  { label: "Teaching Experience", value: 92 },
  { label: "Student Support", value: 100 },
];

const ACHIEVEMENTS = [
  { Icon: Users, value: 5000, suffix: "+", label: "Students Guided" },
  { Icon: Sparkles, value: 100, suffix: "+", label: "Daily Learners" },
  { Icon: Leaf, value: 90, suffix: "", label: "Easy Levels" },
  { Icon: Cpu, value: 90, suffix: "", label: "Normal Levels" },
  { Icon: Flame, value: 90, suffix: "", label: "Hard Levels" },
  { Icon: Crown, value: 30, suffix: "", label: "Advance Levels" },
];

function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}</span>;
}

function SkillBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="font-mono gradient-text font-bold">
          {inView ? <CountUp to={value} /> : 0}%
        </span>
      </div>
      <div className="mt-2 h-2.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full gradient-bg rounded-full"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      {/* Floating blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 -right-20 h-80 w-80 rounded-full bg-[oklch(0.7_0.22_295)]/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Director photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-[oklch(0.82_0.16_80)] via-primary to-[oklch(0.58_0.24_295)] opacity-30 blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] rounded-full p-1.5 bg-gradient-to-br from-[oklch(0.82_0.16_80)] to-[oklch(0.6_0.2_50)] shadow-glow-violet">
                <div className="h-full w-full rounded-full p-2 glass">
                  <img
                    src={directorImg}
                    alt="Hasre Alam — Director, HASRE SUCCESS POINT"
                    width={1024}
                    height={1024}
                    className="h-full w-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <motion.span
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 h-14 w-14 rounded-full gradient-bg grid place-items-center text-primary-foreground shadow-glow"
              >
                <Sparkles className="h-6 w-6" />
              </motion.span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Director's Message
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight">
              <span className="gradient-text">Hasre Alam</span>
            </h1>
            <p className="mt-2 text-base sm:text-lg font-semibold text-foreground/80">
              Director, HASRE SUCCESS POINT
            </p>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to HASRE SUCCESS POINT. Our mission is to provide quality
              typing education and computer literacy to students, especially
              beginners and rural area learners. We believe that skill
              development creates opportunities and builds confidence.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Link
                to="/easy"
                className="group inline-flex items-center gap-2 rounded-full gradient-bg text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-transform animate-pulse-glow"
              >
                Start Learning
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold hover:bg-accent transition-colors"
              >
                Know More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-3xl p-6 sm:p-10 shadow-card"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-center">
            Director's <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-x-10">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} label={s.label} value={s.value} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-center">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-card transition-all"
              >
                <div className="mx-auto h-11 w-11 rounded-xl gradient-bg grid place-items-center text-primary-foreground shadow-glow">
                  <a.Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-2xl sm:text-3xl font-extrabold font-mono gradient-text">
                  <CountUp to={a.value} />{a.suffix}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {a.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
