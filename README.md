# Mahorat Soft

Mahorat Soft - bu professional web development va branding xizmatlarini ko'rsatadigan Next.js asosidagi veb-sayt.

## Texnologiyalar

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon Database)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Authentication**: JWT (Access & Refresh Tokens)
- **File Storage**: Vercel Blob Storage
- **Image Upload**: Cloudinary
- **Form Handling**: React Hook Form + Zod

## O'rnatish

1. Repositoryni clone qiling:
```bash
git clone <repository-url>
cd mahorat-soft-main
```

2. Dependencieslarni o'rnating:
```bash
npm install
```

3. Environment variableslarni sozlang. `.env.local` faylini yarating va quyidagi o'zgaruvchilarni to'ldiring:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/database

# JWT Secrets
ACCESS_TOKEN_SECRET=your-access-token-secret-here
REFRESH_TOKEN_SECRET=your-refresh-token-secret-here

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Telegram Bot Configuration (for contact form)
NEXT_PUBLIC_TELEGRAM_BOT_API=your-telegram-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

4. Database migrationlarni ishga tushiring:
```bash
npx drizzle-kit push
```

5. Development serverni ishga tushiring:
```bash
npm run dev
```

6. Brauzerda oching: [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Development serverini ishga tushirish
- `npm run build` - Production build yaratish
- `npm run start` - Production serverni ishga tushirish
- `npm run lint` - ESLint bilan kodni tekshirish

## Loyiha Strukturasi

```
src/
├── actions/          # Server actions (auth, projects, files)
├── app/             # Next.js App Router
│   ├── (root)/      # Public pages
│   └── admin/       # Admin panel
├── components/      # React components
│   ├── sections/    # Page sections
│   ├── shared/      # Shared components
│   └── ui/          # UI components
├── drizzle/         # Database schemas va connection
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── types/           # TypeScript types
```

## Xususiyatlar

- ✅ Responsive design
- ✅ Admin panel (authentication bilan)
- ✅ Project management (CRUD operations)
- ✅ Image upload (Vercel Blob)
- ✅ Contact form (Telegram bot orqali)
- ✅ JWT authentication
- ✅ Protected routes

## Admin Panel

Admin panelga kirish uchun:
1. `/admin/register` - yangi foydalanuvchi ro'yxatdan o'tkazish
2. Database'da foydalanuvchi ro'lini `admin` ga o'zgartirish
3. `/admin/login` - tizimga kirish

## Deploy

Loyihani Vercel'ga deploy qilish:
1. GitHub repositoryga push qiling
2. Vercel'da yangi project yarating
3. Environment variableslarni sozlang
4. Deploy qiling

## Muallif

Mahorat Soft Team

## License

Private project
