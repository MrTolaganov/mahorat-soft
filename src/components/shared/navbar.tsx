"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "home", id: "home" },
    { key: "about", id: "about" },
    { key: "portfolio", id: "portfolio" },
    { key: "services", id: "services" },
    { key: "contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const languageLabels: Record<string, string> = {
    uz: "UZ",
    ru: "RU",
    en: "EN",
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background"
      }`}
    >
      <div className="box-container mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link href={"/"} className={"sm:hidden"}>
            <Image
              src={"/images/logo-v1.png"}
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>

          <Link href={"/"} className={"max-sm:hidden"}>
            <Image
              src={"/images/logo-v2.png"}
              alt="Logo"
              width={120}
              height={120}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group hover:cursor-pointer"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 neon-glow " />
              </button>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                <span>{languageLabels[language]}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  {(["uz", "ru", "en"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left hover:bg-muted transition-colors ${
                        language === lang ? "bg-muted" : ""
                      }`}
                    >
                      {languageLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground neon-glow"
            >
              {t("nav.getStarted")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            {/* Mobile Language Selector */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Til:</span>
                {(["uz", "ru", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      language === lang
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Glowing bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </header>
  );
}
