import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TypingEngine } from "@/components/TypingEngine";
import { getCategory, type CategoryKey } from "@/data/categories";
import { getLevel } from "@/data/levels";
import { parseLevelParam } from "@/components/LevelsPageView";
import NotFound from "./NotFound";

interface Props { categoryKey?: CategoryKey }

export default function Typing({ categoryKey }: Props) {
  const params = useParams<{ category?: string; level: string }>();
  const key = (categoryKey ?? params.category) as CategoryKey | undefined;
  const cat = key ? getCategory(key) : null;
  const num = parseLevelParam(params.level ?? "");
  const lv = cat && Number.isFinite(num) ? getLevel(cat.key as CategoryKey, num) : null;

  useEffect(() => {
    if (cat && lv) document.title = `${cat.title} L${lv.number} — HASRE SUCCESS POINT`;
  }, [cat, lv]);

  if (!cat || !lv) return <NotFound />;
  return <TypingEngine category={cat.key as CategoryKey} level={lv.number} title={lv.title} text={lv.text} />;
}
