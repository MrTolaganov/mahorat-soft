import { useMemo } from "react";

export function useParticles() {
  return useMemo(() => {
    return [...Array(30)].map((_, i) => {
      // Use index-based deterministic values
      const seed1 = ((i * 7919) % 1000) / 1000;
      const seed2 = ((i * 5323) % 1000) / 1000;
      const seed3 = ((i * 3571) % 1000) / 1000;
      const seed4 = ((i * 9241) % 1000) / 1000;

      return {
        width: seed1 * 6 + 2,
        height: seed2 * 6 + 2,
        top: seed3 * 100,
        left: seed4 * 100,
        background:
          i % 3 === 0
            ? "hsl(var(--primary))"
            : i % 3 === 1
              ? "hsl(var(--secondary))"
              : "hsl(var(--neon-cyan))",
        animationDuration: 3 + seed1 * 4,
        animationDelay: seed2 * 3,
      };
    });
  }, []);
}
