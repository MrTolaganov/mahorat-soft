"use client";

import { useMemo } from "react";

interface ParticleProps {
  i: number;
}

export default function Particle({ i }: ParticleProps) {
  const style = useMemo(
    () => ({
      top: `${20 + i * 12}%`,
      left: `${i % 2 === 0 ? "-100%" : "100%"}`,
      width: "100%",
      animationDelay: `${i * 0.5}s`,
      animation: `${i % 2 === 0 ? "slideRight" : "slideLeft"} ${8 + i}s linear infinite`,
    }),
    [i],
  );

  return (
    <div
      className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      style={style}
    />
  );
}
