import {
  Award,
  Clock,
  Database,
  FolderKanban,
  Globe,
  Instagram,
  LayoutDashboard,
  Palette,
  Search,
  Send,
  Shield,
  Smartphone,
  SquareArrowLeft,
  Target,
  TrendingUp,
  Youtube,
  Zap,
} from "lucide-react";

export const BASE_URL = "https://mahoratsoft.uz";

export const benefits = [
  {
    icon: Clock,
    title: "Привлечение клиентов 24/7",
    description: "Ваш бизнес доступен круглосуточно",
  },
  {
    icon: Target,
    title: "Усиление бренда",
    description: "Профессиональный сайт укрепляет позиции",
  },
  {
    icon: Shield,
    title: "Повышение доверия",
    description: "Современный дизайн создаёт доверие",
  },
  {
    icon: TrendingUp,
    title: "Увеличение продаж",
    description: "Превращает посетителей в клиентов",
  },
];

export const cards = [
  {
    title: "UI/UX Design",
    description: "Создаём интуитивные интерфейсы",
    icon: Palette,
  },
  {
    title: "Responsive Web",
    description: "Адаптивный дизайн для всех устройств",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description: "Оптимизация для поисковых систем",
    icon: Search,
  },
  {
    title: "Fast Performance",
    description: "Быстрая загрузка и производительность",
    icon: Zap,
  },
  {
    title: "Branding",
    description: "Уникальный фирменный стиль",
    icon: Award,
  },
];

export const steps = [
  {
    number: "01",
    title: "Брифинг и анализ",
    description: "Изучаем ваш бизнес и цели проекта",
  },
  {
    number: "02",
    title: "UI/UX дизайн",
    description: "Создаём современный интерфейс",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Программируем функциональность",
  },
  {
    number: "04",
    title: "Тестирование",
    description: "Проверяем работу всех элементов",
  },
  {
    number: "05",
    title: "Запуск",
    description: "Публикуем ваш проект",
  },
  {
    number: "06",
    title: "Поддержка",
    description: "Обеспечиваем стабильную работу",
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Corporate Website",
    category: "Branding",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "CRM System",
    category: "IT Solutions",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Landing Page",
    category: "Web Development",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    color: "from-pink-500 to-rose-500",
  },
];

export const partners = [
  "TechCorp",
  "InnovateLab",
  "DigitalHub",
  "FutureWorks",
  "SmartSolutions",
  "CloudVision",
  "NextGen",
  "DataFlow",
];

export const serviceColumns = [
  {
    title: "Web Development",
    icon: Globe,
    services: [
      "Корпоративные сайты",
      "Интернет-магазины",
      "Landing Pages",
      "CRM / Admin панели",
    ],
  },
  {
    title: "Branding",
    icon: Palette,
    services: ["Логотипы", "Фирменный стиль", "UI/UX дизайн", "Гайдлайны"],
  },
  {
    title: "IT Solutions",
    icon: Database,
    services: ["Telegram-боты", "Мобильные приложения", "Поддержка", "DevOps"],
  },
];

export const footerColumns = [
  {
    title: "MahoratSoft",
    items: ["Digital Solutions", "Web Development", "Branding"],
  },
  {
    title: "Навигация",
    items: ["Home", "About", "Portfolio", "Services", "Contact"],
  },
  {
    title: "Контакты",
    items: [
      "+998 99 177 96 33",
      "solihmirhalilov8@gmail.com",
      "@mahoratsoft",
      "Ташкент, Узбекистан",
    ],
  },
];

export const socialLinks = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const adminSidebarLinks = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "All Projects",
    path: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Back Homepage",
    path: "/",
    icon: SquareArrowLeft,
  },
];
