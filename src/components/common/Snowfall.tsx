"use client";

import { useEffect, useState } from "react";

const SNOWFLAKE_CHARS = ["❄", "❅", "❆", "❇", "✦"];

interface SnowflakeProps {
  size: number;
  left: number;
  delay: number;
  duration: number;
  char: string;
}

function Snowflake({ size, left, delay, duration, char }: SnowflakeProps) {
  return (
    <div
      className="absolute top-0 pointer-events-none snowfall-animation"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        color: 'rgba(80, 80, 80, 0.5)',
      }}
    >
      {char}
    </div>
  );
}

export function Snowfall() {
  const [mounted, setMounted] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
    char: string;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random snowflakes only on client side
    // Reduce quantity on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const flakeCount = isMobile ? 30 : 60;
    
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 8, // 8-14px
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8, // 8-18s
      char: SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)],
    }));
    setSnowflakes(flakes);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          size={flake.size}
          left={flake.left}
          delay={flake.delay}
          duration={flake.duration}
          char={flake.char}
        />
      ))}
    </div>
  );
}

