"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "uz" | "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.about": "Biz haqimizda",
    "nav.portfolio": "Portfolio",
    "nav.services": "Xizmatlar",
    "nav.contact": "Aloqa",
    "nav.getStarted": "Boshlash",
    "hero.title": "MahoratSoft — Raqamli mahsulotlarning",
    "hero.titleHighlight": "kelajagini yaratish",
    "hero.subtitle": "Veb-saytlar • Mobil ilovalar • Brending • IT yechimlar",
    "hero.getStarted": "Boshlash",
    "hero.ourWorks": "Ishlarimiz",
    "about.title": "Biz haqimizda",
    "about.description": "MahoratSoft — aqlli veb-saytlar, ilovalar, CRM va IT yechimlarini yaratadigan raqamli jamoa.",
    "about.feature1.title": "Zamonaviy texnologiyalar",
    "about.feature1.description": "Eng ilg'or yechimlar va dasturlash vositalaridan foydalanamiz",
    "about.feature2.title": "Tez amalga oshirish",
    "about.feature2.description": "Samarali ish va muddatlarga rioya qilish",
    "about.feature3.title": "Professional jamoa",
    "about.feature3.description": "Har bir sohada tajribali mutaxassislar",
    "services.title": "IT xizmatlar",
    "services.subtitle": "Biznesingiz uchun kompleks yechimlar",
    "services.webDev.title": "Veb-saytlar",
    "services.branding.title": "Brending",
    "services.itSolutions.title": "IT yechimlar",
    "services.more": "Va yana ko'p narsalar — batafsil ma'lumot uchun biz bilan bog'laning!",
    "portfolio.title": "Ishlarimiz",
    "portfolio.subtitle": "Turli sohalardagi muvaffaqiyatli loyihalar",
    "contact.title": "Aloqa",
    "contact.subtitle": "Biz bilan bog'laning",
    "contact.name": "Ism",
    "contact.email": "Email",
    "contact.message": "Xabar",
    "contact.send": "Yuborish",
    "contact.sending": "Yuborilmoqda...",
    "contact.success": "Xabar muvaffaqiyatli yuborildi",
    "contact.error": "Xatolik yuz berdi",
    "footer.copyright": "© 2025 MahoratSoft. Barcha huquqlar himoyalangan. O'zbekistonda yaratilgan",
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.portfolio": "Портфолио",
    "nav.services": "Услуги",
    "nav.contact": "Контакты",
    "nav.getStarted": "Начать",
    "hero.title": "MahoratSoft — Создаём будущее",
    "hero.titleHighlight": "цифровых продуктов",
    "hero.subtitle": "Веб-сайты • Мобильные приложения • Брендинг • IT решения",
    "hero.getStarted": "Начать",
    "hero.ourWorks": "Наши работы",
    "about.title": "О нас",
    "about.description": "MahoratSoft — цифровая команда, создающая умные сайты, приложения, CRM и IT-решения для бизнеса.",
    "about.feature1.title": "Современные технологии",
    "about.feature1.description": "Используем передовые решения и инструменты разработки",
    "about.feature2.title": "Быстрая реализация",
    "about.feature2.description": "Эффективная работа и соблюдение сроков",
    "about.feature3.title": "Команда профессионалов",
    "about.feature3.description": "Опытные специалисты в каждой области",
    "services.title": "IT услуги",
    "services.subtitle": "Комплексные решения для вашего бизнеса",
    "services.webDev.title": "Веб-разработка",
    "services.branding.title": "Брендинг",
    "services.itSolutions.title": "IT решения",
    "services.more": "И многое другое — свяжитесь с нами для уточнения!",
    "portfolio.title": "Примеры работ",
    "portfolio.subtitle": "Наши успешные проекты в различных сферах",
    "contact.title": "Контакты",
    "contact.subtitle": "Свяжитесь с нами",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.message": "Сообщение",
    "contact.send": "Отправить",
    "contact.sending": "Отправка...",
    "contact.success": "Сообщение успешно отправлено",
    "contact.error": "Произошла ошибка",
    "footer.copyright": "© 2025 MahoratSoft. Все права защищены. Разработано в Узбекистане",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "hero.title": "MahoratSoft — Creating the Future",
    "hero.titleHighlight": "of Digital Products",
    "hero.subtitle": "Web Development • Mobile Apps • Branding • IT Solutions",
    "hero.getStarted": "Get Started",
    "hero.ourWorks": "Our Works",
    "about.title": "About Us",
    "about.description": "MahoratSoft — a digital team creating smart websites, applications, CRM and IT solutions for business.",
    "about.feature1.title": "Modern Technologies",
    "about.feature1.description": "We use advanced solutions and development tools",
    "about.feature2.title": "Fast Implementation",
    "about.feature2.description": "Efficient work and meeting deadlines",
    "about.feature3.title": "Professional Team",
    "about.feature3.description": "Experienced specialists in every field",
    "services.title": "IT Services",
    "services.subtitle": "Comprehensive solutions for your business",
    "services.webDev.title": "Web Development",
    "services.branding.title": "Branding",
    "services.itSolutions.title": "IT Solutions",
    "services.more": "And much more — contact us for details!",
    "portfolio.title": "Our Works",
    "portfolio.subtitle": "Our successful projects in various fields",
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully",
    "contact.error": "Something went wrong",
    "footer.copyright": "© 2025 MahoratSoft. All rights reserved. Developed in Uzbekistan",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

