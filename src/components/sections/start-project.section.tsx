"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParticles } from "@/hooks/use-particles";

export default function StartProjectSection() {
  const particles = useParticles();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground rounded-full animate-pulse"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="box-container mx-auto  text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Взяться за проект</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Готовы начать? Давайте обсудим ваш проект и создадим что-то
            удивительное вместе.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Связаться
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
