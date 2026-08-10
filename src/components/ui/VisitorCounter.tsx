"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBadge() {
      try {
        const CACHE_KEY = "visitorBadgeCache";
        const cached = localStorage.getItem(CACHE_KEY);
        
        if (cached) {
          const { svg, timestamp } = JSON.parse(cached);
          // Use cache if it's less than 24 hours old
          if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            setSvgContent(svg);
            return;
          }
        }

        const res = await fetch("/api/visitor");
        if (res.ok) {
          const text = await res.text();
          setSvgContent(text);
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            svg: text,
            timestamp: Date.now()
          }));
        }
      } catch (err) {
        console.error("Failed to load visitor badge", err);
      }
    }
    
    fetchBadge();
  }, []);

  if (!svgContent) {
    return <div className="h-5 sm:h-6 w-[88px] bg-white/10 rounded animate-pulse" />;
  }

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: svgContent }} 
      className="h-5 sm:h-6 flex items-center justify-center [&>svg]:h-full [&>svg]:w-auto"
    />
  );
}
