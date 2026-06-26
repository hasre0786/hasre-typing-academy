import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Leaderboard from "@/pages/Leaderboard";
import Dashboard from "@/pages/Dashboard";
import TypingLevels from "@/pages/TypingLevels";
import Videos from "@/pages/Videos";
import CategoryLevels from "@/pages/CategoryLevels";
import Typing from "@/pages/Typing";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ScrollOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollOnNavigate />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/typing-levels" element={<TypingLevels />} />
            <Route path="/videos" element={<Videos />} />

            <Route path="/easy" element={<CategoryLevels categoryKey="easy" />} />
            <Route path="/easy/:level" element={<Typing categoryKey="easy" />} />
            <Route path="/normal" element={<CategoryLevels categoryKey="normal" />} />
            <Route path="/normal/:level" element={<Typing categoryKey="normal" />} />
            <Route path="/hard" element={<CategoryLevels categoryKey="hard" />} />
            <Route path="/hard/:level" element={<Typing categoryKey="hard" />} />
            <Route path="/advance" element={<CategoryLevels categoryKey="advance" />} />
            <Route path="/advance/:level" element={<Typing categoryKey="advance" />} />

            <Route path="/levels/:category" element={<CategoryLevels />} />
            <Route path="/typing/:category/:level" element={<Typing />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
