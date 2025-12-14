"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particle from "@/components/shared/particle";
import { useParticles } from "@/hooks/use-particles";
import { useLanguage } from "@/contexts/language-context";

export default function HeroSection() {
  const particles = useParticles();
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/images/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-tech-darker/80" />

      {/* Animated Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 animate-pulse" />

      {/* Animated Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl animate-[wave_8s_ease-in-out_infinite]"
          style={{ transform: "translateY(0)" }}
        />
        <div
          className="absolute w-full h-full bg-gradient-to-l from-secondary/20 via-primary/20 to-secondary/20 blur-3xl animate-[wave_10s_ease-in-out_infinite_reverse]"
          style={{ transform: "translateY(20%)" }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg rotate-45 floating-animation" />
        <div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-secondary/30 rounded-full floating-animation"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-primary/30 floating-animation"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-secondary/30 rounded-lg floating-animation"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 slide-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 neon-glow">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium">
              Digital Solutions Company
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent neon-text">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-8 py-6 text-lg rounded-full neon-glow transition-all duration-300 transform hover:scale-105"
            >
              {t("hero.getStarted")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="border-2 border-primary/50 text-primary-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t("hero.ourWorks")}
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                background: particle.background,
                animation: `float ${particle.animationDuration}s ease-in-out infinite`,
                animationDelay: `${particle.animationDelay}s`,
                opacity: 0.6,
                boxShadow: "0 0 10px currentColor",
              }}
            />
          ))}
        </div>

        {/* Moving Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
