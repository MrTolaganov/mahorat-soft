"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function ContactSection() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

    const promise = fetch(
      `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`,
        }),
      },
    )
      .then(() => setFormData({ name: "", email: "", message: "" }))
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: t("contact.sending"),
      success: t("contact.success"),
      error: t("contact.error"),
    });
  };
  return (
    <section
      id="contact"
      className="py-24 bg-tech-darker text-primary-foreground relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="box-container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t("contact.name")}
                  disabled={isLoading}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-primary-foreground/10 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t("contact.email")}
                  disabled={isLoading}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-primary-foreground/10 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder={t("contact.message")}
                  disabled={isLoading}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-primary-foreground/10 border-primary/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground neon-glow"
                size="lg"
              >
                {isLoading ? t("contact.sending") : t("contact.send")}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center space-x-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium">solihmirhalilov8@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Телефон</p>
                  <p className="font-medium">+998 99 177 96 33</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Локация</p>
                  <p className="font-medium">Ташкент, Узбекистан</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D Globe */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={"/images/digital-globe.png"}
                alt="Digital Globe"
                className="w-full max-w-md floating-animation pulse-glow"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
