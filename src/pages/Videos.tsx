import { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { VIDEOS } from "@/data/videos";

export default function Videos() {
  useEffect(() => { document.title = "Learning Videos — HASRE SUCCESS POINT"; }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
          Learning <span className="gradient-text">Videos</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Short tutorials on typing, computer basics, MS Word and internet safety.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((v, i) => (
          <motion.a
            key={v.id}
            href={v.videoUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            className="group block glass rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-card transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={v.thumbnail}
                alt={v.title}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/10 transition-colors" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-14 w-14 rounded-full gradient-bg text-primary-foreground grid place-items-center shadow-glow animate-pulse-glow">
                  <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-foreground/70 text-background px-2 py-0.5 text-xs">
                <Clock className="h-3 w-3" /> {v.duration}
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-primary">{v.category}</span>
              <h3 className="mt-1 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{v.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
