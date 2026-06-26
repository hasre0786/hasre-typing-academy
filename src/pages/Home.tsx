import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ImageSlider } from "@/components/ImageSlider";
import { CategoryCards } from "@/components/CategoryCards";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function Home() {
  useEffect(() => {
    document.title = "HASRE SUCCESS POINT — Learn Typing Step by Step";
  }, []);
  return (
    <>
      <Hero />
      <ImageSlider />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
          Welcome to <span className="gradient-text">HASRE SUCCESS POINT</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          This platform is specially created for beginners and students from Bihar
          rural areas. Learn typing from basic to advanced level and increase your
          speed and accuracy through daily practice.
        </p>
      </motion.section>

      <CategoryCards />
      <FeaturesSection />
    </>
  );
}
