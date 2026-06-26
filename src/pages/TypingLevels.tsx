import { useEffect } from "react";
import { CategoryCards } from "@/components/CategoryCards";

export default function TypingLevels() {
  useEffect(() => { document.title = "Typing Levels — HASRE SUCCESS POINT"; }, []);
  return (
    <div className="pt-6">
      <CategoryCards />
    </div>
  );
}
