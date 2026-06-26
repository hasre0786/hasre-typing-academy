import { motion } from "framer-motion";
import {
  Timer, Gauge, Target, BarChart3, Volume2, Moon,
  Keyboard, Trophy, Award, Smartphone, Save, Sparkles,
} from "lucide-react";

const FEATURES = [
  { Icon: Gauge, title: "Speed Test", text: "Live WPM measurement as you type." },
  { Icon: Target, title: "Accuracy Tracker", text: "Know your error rate in real time." },
  { Icon: BarChart3, title: "Progress Charts", text: "Visualize improvement across levels." },
  { Icon: Volume2, title: "Keyboard Sound", text: "Crisp mechanical-style typing feedback." },
  { Icon: Moon, title: "Dark Mode", text: "Easy on the eyes during long practice." },
  { Icon: Keyboard, title: "Virtual Keyboard", text: "On-screen guide for correct fingering." },
  { Icon: Timer, title: "Smart Timer", text: "Each level fits within ~1 hour total." },
  { Icon: Trophy, title: "Leaderboard", text: "Compare your stats with sample rankings." },
  { Icon: Award, title: "Achievement Badges", text: "Bronze · Silver · Gold · Platinum." },
  { Icon: Smartphone, title: "Mobile Friendly", text: "Practice on phone, tablet or desktop." },
  { Icon: Save, title: "Auto Save", text: "Progress kept in your browser, always." },
  { Icon: Sparkles, title: "Daily Streaks", text: "Build a habit with daily practice streaks." },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
          Premium <span className="gradient-text">Features</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Everything a serious learner needs — built into one beautiful, free platform.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-card transition-all"
          >
            <div className="h-11 w-11 rounded-xl gradient-bg grid place-items-center text-primary-foreground shadow-glow">
              <f.Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
