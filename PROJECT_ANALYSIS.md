# Mahorat Soft - Loyiha Tahlili

## 📋 Loyiha Umumiy Ma'lumoti

**Mahorat Soft** - bu professional web development va branding xizmatlarini ko'rsatadigan **corporate website** va **admin panel** bilan jihozlangan to'liq funksional Next.js loyihasi.

## 🎯 Loyiha Turi

Bu **Digital Agency Portfolio Website** bo'lib, quyidagi funksiyalarga ega:

1. **Public Website** - Kompaniya haqida ma'lumot, xizmatlar, portfolio, kontakt
2. **Admin Panel** - Loyihalarni boshqarish uchun to'liq CRUD funksiyalari
3. **Authentication System** - JWT asosida xavfsiz kirish tizimi

## 🏗️ Texnik Stack

### Frontend
- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4
- **UI Components**: 
  - Radix UI (Dialog, Dropdown, Alert, Checkbox, va h.k.)
  - Custom UI components (Button, Card, Form, Input, va h.k.)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Animations**: Custom CSS animations va particles

### Backend
- **Database**: PostgreSQL (Neon Database)
- **ORM**: Drizzle ORM
- **Authentication**: JWT (Access + Refresh tokens)
- **File Storage**: 
  - Vercel Blob Storage (rasmlar uchun)
  - Cloudinary (backup/alternativ)
- **Server Actions**: Next.js Server Actions

### Infrastructure
- **Deployment**: Vercel (optimized)
- **Database Hosting**: Neon Database (serverless PostgreSQL)

## 📁 Loyiha Strukturasi

```
src/
├── actions/              # Server Actions
│   ├── auth.action.ts    # Authentication (login, register, logout)
│   ├── project.action.ts # Project CRUD operations
│   └── file.action.ts    # File upload/delete
│
├── app/                  # Next.js App Router
│   ├── (root)/          # Public pages
│   │   └── (home)/     # Homepage
│   └── admin/           # Admin panel
│       ├── (auth)/      # Login/Register pages
│       └── (root)/      # Protected admin pages
│           ├── (dashboard)/  # Dashboard
│           └── projects/     # Projects management
│
├── components/
│   ├── sections/        # Homepage sections
│   │   ├── hero.section.tsx
│   │   ├── about.section.tsx
│   │   ├── services.section.tsx
│   │   ├── portfolio.section.tsx
│   │   ├── contact.section.tsx
│   │   └── ... (10 ta section)
│   ├── shared/         # Shared components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── particle.tsx
│   └── ui/             # Reusable UI components
│
├── drizzle/            # Database
│   ├── schemas/        # Database schemas
│   │   ├── user.schema.ts
│   │   └── project.schema.ts
│   └── index.ts        # Database connection
│
├── hooks/              # Custom React hooks
│   └── use-particles.ts
│
├── lib/                # Utilities
│   ├── constants.ts    # Constants va static data
│   ├── validations.ts  # Zod schemas
│   ├── jwt.ts          # JWT functions
│   ├── cloudinary.ts   # Cloudinary config
│   └── utils.ts        # Helper functions
│
└── types/              # TypeScript types
    └── index.d.ts
```

## 🎨 Dizayn Xususiyatlari

### Visual Effects
- **Animated Particles** - Floating particles animatsiyalari
- **Gradient Backgrounds** - Dynamic gradient effects
- **Neon Glow Effects** - Modern neon glow animations
- **Floating Shapes** - Geometric shapes animatsiyalari
- **Tech Grid Background** - Futuristic grid pattern
- **Smooth Scrolling** - Section-to-section navigation

### Responsive Design
- Mobile-first approach
- Tablet va desktop optimizatsiyasi
- Adaptive navigation (mobile menu)
- Responsive grid layouts

### Color Scheme
- Primary: Blue (#122866)
- Secondary: Cyan/Teal
- Modern gradient combinations
- Dark/Light theme support (via next-themes)

## 🔐 Authentication System

### Features
- **JWT-based Authentication**
  - Access Token (15 daqiqa)
  - Refresh Token (7 kun)
  - HttpOnly cookies (xavfsizlik)
  
- **Role-based Access**
  - User role (default)
  - Admin role (full access)
  
- **Protected Routes**
  - Middleware orqali route protection
  - Automatic token refresh
  - Redirect to login if unauthorized

### Flow
1. User register qiladi (`/admin/register`)
2. Database'da role `admin` ga o'zgartiriladi
3. Login qiladi (`/admin/login`)
4. Tokens set qilinadi
5. Admin panelga kirish mumkin

## 📊 Database Schema

### Users Table
- `id` (UUID, primary key)
- `fullName` (text)
- `username` (text, unique)
- `password` (hashed with bcrypt)
- `role` (enum: 'user' | 'admin')
- `createdAt`, `updatedAt` (timestamps)

### Projects Table
- `id` (UUID, primary key)
- `title` (text)
- `description` (text)
- `image` (text, URL)
- `featured` (boolean, default: false)
- `userId` (UUID, foreign key)
- `createdAt`, `updatedAt` (timestamps)

### Relations
- User has many Projects
- Project belongs to User

## 🚀 Asosiy Funksiyalar

### Public Website

1. **Hero Section**
   - Animated background
   - Call-to-action buttons
   - Smooth scroll navigation

2. **About Section**
   - Kompaniya haqida ma'lumot
   - Features showcase
   - Visual elements

3. **Services Section**
   - Web Development
   - Branding
   - IT Solutions
   - Service lists

4. **Portfolio Section**
   - Featured projects (max 6 ta)
   - Project cards with images
   - Dynamic loading from database

5. **Work Process Section**
   - 6 qadamli jarayon ko'rsatkichi

6. **Why Websites Section**
   - 4 ta asosiy afzallik

7. **Partners Section**
   - Hamkorlar ro'yxati

8. **Contact Section**
   - Contact form
   - Telegram bot orqali xabar yuborish
   - Contact information

9. **Footer**
   - Links
   - Social media
   - Company info

### Admin Panel

1. **Dashboard**
   - Featured projects ko'rinishi
   - Quick stats

2. **Projects Management**
   - **Create**: Yangi loyiha qo'shish
   - **Read**: Barcha loyihalarni ko'rish
   - **Update**: Loyihani tahrirlash
   - **Delete**: Loyihani o'chirish
   - **Featured**: Featured qilish (max 6 ta)

3. **File Upload**
   - Vercel Blob orqali rasm yuklash
   - Image preview
   - File deletion

4. **Authentication**
   - Login/Register
   - Session management
   - Auto logout

## 🔧 Konfiguratsiya

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection
- `ACCESS_TOKEN_SECRET` - JWT access token
- `REFRESH_TOKEN_SECRET` - JWT refresh token
- `NEXT_PUBLIC_CLOUDINARY_*` - Cloudinary config
- `NEXT_PUBLIC_TELEGRAM_*` - Telegram bot
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob

### Features
- **Featured Projects Limit**: 6 ta
- **Image Upload**: Vercel Blob Storage
- **Contact Form**: Telegram bot integration
- **Token Expiry**: Access (15min), Refresh (7 days)

## 📱 Pages va Routes

### Public Routes
- `/` - Homepage (barcha sections)

### Admin Routes (Protected)
- `/admin/login` - Login page
- `/admin/register` - Register page
- `/admin` - Dashboard
- `/admin/projects` - Projects management

## 🎯 Loyiha Maqsadi

Bu loyiha **Mahorat Soft** kompaniyasining:
- Portfolio website sifatida
- Xizmatlarni ko'rsatish
- Mijozlar bilan bog'lanish
- Loyihalarni namoyish qilish
- Admin orqali kontentni boshqarish

uchun yaratilgan professional corporate website.

## ⚠️ Topilgan Muammolar va Tuzatishlar

### Tuzatilgan Muammolar:
1. ✅ Database connection - Neon connection to'g'ri sozlandi
2. ✅ Middleware - `middleware.ts` to'g'ri joyga ko'chirildi
3. ✅ Console.log - Debug kodlar olib tashlandi
4. ✅ Featured limit logic - To'g'ri ishlaydi
5. ✅ RevalidatePath - To'g'ri pathlar qo'shildi
6. ✅ Duplicate code - Takrorlangan kod olib tashlandi

### Qolgan Kichik Muammolar:
- `src/app/admin/(root)/projects/page.tsx` - 13-qatorda `console.log` bor (debug uchun)
- `src/app/admin/_components/project-form.tsx` - 73-qatorda typo: "wronq" -> "wrong"

## 📈 Performance va Optimization

- Next.js Image optimization
- Server-side rendering (SSR)
- Static generation where possible
- Code splitting
- Lazy loading
- Optimized bundle size

## 🔒 Xavfsizlik

- JWT tokens (HttpOnly cookies)
- Password hashing (bcrypt)
- Protected routes (middleware)
- Input validation (Zod)
- SQL injection protection (Drizzle ORM)
- XSS protection (React)

## 📝 Qo'shimcha Ma'lumot

- **Language Support**: UZ, RU, EN (UI ready, lekin full i18n emas)
- **Theme**: Dark/Light mode ready (next-themes)
- **SEO**: Metadata optimization
- **Accessibility**: Semantic HTML, ARIA labels

## 🎓 O'qitish Materiali

Bu loyiha quyidagi texnologiyalarni o'rganish uchun yaxshi misol:
- Next.js App Router
- Server Actions
- Drizzle ORM
- JWT Authentication
- File Upload
- Modern UI/UX
- TypeScript best practices

---

**Yaratilgan**: 2025
**Framework**: Next.js 16
**Status**: Production Ready ✅

