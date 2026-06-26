import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=75", caption: "Master the Keyboard, Master the Future" },
  { url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1600&q=75", caption: "Hands-On Typing Practice" },
  { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&q=75", caption: "Boost Your Typing Speed" },
  { url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=75", caption: "Professional Typing Training" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=75", caption: "Computer Lab for Every Student" },
  { url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1600&q=75", caption: "Online Typing Education" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=75", caption: "Young Learners, Big Dreams" },
];

export function ImageSlider() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((p) => (p + n + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="relative aspect-[16/9] sm:h-80 md:h-[28rem] sm:aspect-auto rounded-3xl overflow-hidden glass shadow-card group">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={SLIDES[i].url}
              alt={SLIDES[i].caption}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-background font-display text-xl sm:text-3xl font-bold drop-shadow"
              >
                {SLIDES[i].caption}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/30 hover:bg-background/60 backdrop-blur text-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/30 hover:bg-background/60 backdrop-blur text-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-background" : "w-1.5 bg-background/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
