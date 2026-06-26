import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LevelsPageView } from "@/components/LevelsPageView";
import { getCategory, type CategoryKey } from "@/data/categories";
import NotFound from "./NotFound";

interface Props { categoryKey?: CategoryKey }

export default function CategoryLevels({ categoryKey }: Props) {
  const params = useParams<{ category?: string }>();
  const key = (categoryKey ?? params.category) as CategoryKey | undefined;
  const cat = key ? getCategory(key) : null;

  useEffect(() => {
    if (cat) document.title = `${cat.title} — HASRE SUCCESS POINT`;
  }, [cat]);

  if (!cat) return <NotFound />;
  return <LevelsPageView categoryKey={cat.key as CategoryKey} />;
}
