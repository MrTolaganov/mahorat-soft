# Loyihani Ishga Tushirish Ko'rsatmasi

## 1. Dependencies O'rnatish

Avval barcha kerakli paketlarni o'rnating:

```bash
npm install
```

yoki

```bash
npm ci
```

## 2. Environment Variables Sozlash

Loyiha ildizida `.env.local` faylini yarating va quyidagi o'zgaruvchilarni to'ldiring:

```env
# Database Configuration (PostgreSQL - Neon Database)
DATABASE_URL=postgresql://user:password@host:port/database

# JWT Secrets (Ixtiyoriy stringlar, lekin kuchli bo'lishi kerak)
ACCESS_TOKEN_SECRET=your-super-secret-access-token-key-minimum-32-characters
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key-minimum-32-characters

# Cloudinary Configuration (Rasmlarni yuklash uchun)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Telegram Bot Configuration (Contact form uchun)
NEXT_PUBLIC_TELEGRAM_BOT_API=your-telegram-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id

# Vercel Blob Storage (Fayllarni yuklash uchun)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

### Environment Variables Qayerdan Olish:

1. **DATABASE_URL**: 
   - [Neon Database](https://neon.tech) - Bepul PostgreSQL database
   - Yoki boshqa PostgreSQL hosting (Supabase, Railway, va h.k.)

2. **JWT Secrets**:
   - Ixtiyoriy kuchli random stringlar yarating
   - Masalan: `openssl rand -base64 32` yoki online generator ishlating

3. **Cloudinary**:
   - [Cloudinary](https://cloudinary.com) - Bepul account yarating
   - Dashboard'dan API keys oling

4. **Telegram Bot**:
   - [@BotFather](https://t.me/botfather) ga yozing
   - `/newbot` buyrug'i bilan yangi bot yarating
   - Token va Chat ID oling

5. **Vercel Blob**:
   - [Vercel Dashboard](https://vercel.com/dashboard) - Storage > Blob
   - Yoki Vercel CLI orqali: `vercel env pull`

## 3. Database Migration

Database jadvallarini yaratish:

```bash
npx drizzle-kit push
```

Yoki migration fayllarini yaratish:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## 4. Development Serverni Ishga Tushirish

```bash
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

## 5. Admin Panelga Kirish

1. Avval foydalanuvchi ro'yxatdan o'tkazish:
   - `/admin/register` sahifasiga kiring
   - Formani to'ldiring

2. Database'da foydalanuvchi ro'lini `admin` ga o'zgartirish:
   - Database'ga ulaning
   - `users` jadvalida yangi foydalanuvchining `role` ustunini `admin` ga o'zgartiring

3. Tizimga kirish:
   - `/admin/login` sahifasiga kiring
   - Username va password bilan kiring

## 6. Production Build

Production uchun build yaratish:

```bash
npm run build
npm start
```

## Muammolar va Yechimlar

### Database Connection Xatosi
- `DATABASE_URL` to'g'ri sozlanganligini tekshiring
- Database server ishlamoqda ekanligini tekshiring

### Environment Variables Topilmayapti
- `.env.local` fayli loyiha ildizida ekanligini tekshiring
- Serverni qayta ishga tushiring (`Ctrl+C` va `npm run dev`)

### Port Band
- Boshqa port ishlatish: `npm run dev -- -p 3001`

### TypeScript Xatolari
- `node_modules` ni o'chirib qayta o'rnating: `rm -rf node_modules && npm install`

## Qo'shimcha Ma'lumot

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Neon Database Documentation](https://neon.tech/docs)

