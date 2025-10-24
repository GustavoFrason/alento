"use client";

import React from "react";

export default function Logo({ height = 48, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ALENTO"
      height={height}
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        {/* Gradiente dourado */}
        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D7B76A" />
          <stop offset="50%" stopColor="#E6C97A" />
          <stop offset="100%" stopColor="#B6903B" />
        </linearGradient>

        {/* Sombra interna suave */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="multiply" />
        </filter>
      </defs>

      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', 'Playfair Display', serif"
        fontWeight="600"
        fontSize="64"
        fill="url(#goldGradient)"
        filter="url(#softShadow)"
        letterSpacing="3px"
      >
        ALENTO
      </text>
    </svg>
  );
}