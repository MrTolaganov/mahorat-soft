"use client";

import { footerColumns, socialLinks } from "@/lib/constants";
import { useParticles } from "@/hooks/use-particles";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function Footer() {
  const particles = useParticles();
  const { t } = useLanguage();

  return (
    <footer className="bg-tech-darker text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />

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

      <div className="box-container mx-auto py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/admin"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 hover:neon-glow"
              >
                <Icon className="w-6 h-6 text-primary-foreground" />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
