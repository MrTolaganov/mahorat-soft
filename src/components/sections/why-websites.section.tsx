"use client";

import { benefits } from "@/lib/constants";
import { useParticles } from "@/hooks/use-particles";
import Image from "next/image";

export default function WhyWebsitesSection() {
  const particles = useParticles();

  return (
    <section
      id="why-websites"
      className="py-24 bg-tech-darker text-primary-foreground relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="box-container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Зачем нужны сайты
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto neon-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary/20 hover:border-secondary transition-all duration-300 hover:neon-glow"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 neon-glow">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-primary-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Hologram Mockup */}
          <div className="flex items-center justify-center size-full">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src={"/images/hologram-website.png"}
                alt="Hologram Website"
                className="w-full floating-animation pulse-glow rounded-xl object-fit"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-pulse"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
