import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Sparkles } from "lucide-react";

const POINTS = [
  { Icon: Target, title: "Mission", text: "Bring computer literacy and typing skills to every village in Bihar." },
  { Icon: GraduationCap, title: "For Students", text: "Built for beginners — simple language, level-based progress." },
  { Icon: Heart, title: "100% Free", text: "No subscriptions. Practice anywhere, on any device." },
  { Icon: Sparkles, title: "Modern", text: "Powered by clean React code that's easy for teachers to customize." },
];

export default function About() {
  useEffect(() => { document.title = "About — HASRE SUCCESS POINT"; }, []);
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display">
          About <span className="gradient-text">HASRE SUCCESS POINT</span>
        </h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          HASRE SUCCESS POINT is an educational platform designed specially for
          beginners and students from Bihar rural areas. Our mission is to improve
          typing skills and computer literacy through simple, level-based learning.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {POINTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="h-11 w-11 rounded-xl gradient-bg text-primary-foreground grid place-items-center shadow-glow">
              <p.Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-display font-bold">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
