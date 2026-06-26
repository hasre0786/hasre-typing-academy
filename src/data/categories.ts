import { Leaf, Cpu, Flame, Crown, type LucideIcon } from "lucide-react";

export type CategoryKey = "easy" | "normal" | "hard" | "advance";

export interface Category {
  key: CategoryKey;
  title: string;
  tagline: string;
  description: string;
  totalLevels: number;
  wordsPerLevel: number;
  icon: LucideIcon;
  /** semantic color token (matches src/styles.css) */
  color: "easy" | "normal" | "hard" | "advance";
  topics: string[];
}

export const CATEGORIES: Category[] = [
  {
    key: "easy",
    title: "Easy Typing",
    tagline: "Home row & simple sentences",
    description:
      "Begin your journey. Practice the home row, small words and simple sentences about daily life.",
    totalLevels: 90,
    wordsPerLevel: 200,
    icon: Leaf,
    color: "easy",
    topics: ["Home row", "Small words", "Family", "School", "Village life", "Animals"],
  },
  {
    key: "normal",
    title: "Normal Typing",
    tagline: "Everyday paragraphs",
    description:
      "Improve fluency with paragraphs on Computer, Internet, Digital India, Books, Science and Education.",
    totalLevels: 90,
    wordsPerLevel: 200,
    icon: Cpu,
    color: "normal",
    topics: ["Computer basics", "Internet", "Digital India", "Environment", "Road safety", "Science"],
  },
  {
    key: "hard",
    title: "Hard Typing",
    tagline: "Punctuation, numbers & topics",
    description:
      "Tackle Technology, AI, Cyber Awareness, Bihar History, English Grammar and more — with punctuation and numbers.",
    totalLevels: 90,
    wordsPerLevel: 200,
    icon: Flame,
    color: "hard",
    topics: ["Technology", "AI", "Cyber awareness", "Bihar history", "Career", "Digital payment"],
  },
  {
    key: "advance",
    title: "Advance Typing",
    tagline: "Professional & long paragraphs",
    description:
      "Premium level. 300-word professional paragraphs on AI, Cyber Security, Leadership, Finance and Success.",
    totalLevels: 30,
    wordsPerLevel: 300,
    icon: Crown,
    color: "advance",
    topics: ["AI", "Cyber Security", "Leadership", "Finance", "Career Planning", "Self Development"],
  },
];

export const getCategory = (key: string): Category | undefined =>
  CATEGORIES.find((c) => c.key === key);
