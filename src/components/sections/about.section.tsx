"use client";

import { Code2, Rocket, Users } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-background">
      <div className="box-container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-8">
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("about.feature1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.feature1.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("about.feature2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.feature2.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("about.feature3.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.feature3.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D Cube Visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={"/images/digital-cube.png"}
                alt="Digital Cube"
                className="w-full max-w-md floating-animation"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
