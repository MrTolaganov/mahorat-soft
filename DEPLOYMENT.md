# Deployment Ko'rsatmasi

## GitHub'ga Yuklash

### 1. Git Repository Yaratish

```bash
# Git init (agar yo'q bo'lsa)
git init

# Barcha fayllarni qo'shish
git add .

# Commit qilish
git commit -m "Initial commit - Mahorat Soft website"

# GitHub'da yangi repository yarating, keyin:
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### ⚠️ MUHIM: `.env.local` faylini GitHub'ga yuklamang!

`.env.local` fayli `.gitignore` da bor, lekin tekshirib ko'ring.

---

## Serverda Deploy Qilish

### Vercel (Tavsiya etiladi - Next.js uchun eng yaxshi)

#### 1. Vercel'ga Kirish
- [vercel.com](https://vercel.com) ga kiring
- GitHub account bilan kirish

#### 2. Project Import
- "Add New Project" tugmasini bosing
- GitHub repository'ni tanlang
- "Import" tugmasini bosing

#### 3. Environment Variables Sozlash

Vercel dashboard'da "Settings" > "Environment Variables" ga kiring va quyidagilarni qo'shing:

```env
DATABASE_URL=postgresql://user:password@host:port/database
ACCESS_TOKEN_SECRET=your-access-token-secret-minimum-32-chars
REFRESH_TOKEN_SECRET=your-refresh-token-secret-minimum-32-chars
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NEXT_PUBLIC_TELEGRAM_BOT_API=your-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-chat-id
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

#### 4. Deploy
- "Deploy" tugmasini bosing
- Vercel avtomatik build va deploy qiladi
- 2-3 daqiqadan keyin sayt tayyor bo'ladi!

#### 5. Database Migration

Deploy qilingandan keyin, Vercel terminal yoki local terminal orqali:

```bash
npx drizzle-kit push
```

Yoki Vercel dashboard'da "Deployments" > "Functions" > Terminal orqali.

---

### Netlify (Alternativ)

1. [netlify.com](https://netlify.com) ga kiring
2. GitHub repository'ni ulang
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Environment variables qo'shing
5. Deploy!

---

### Boshqa Serverlar (VPS, Shared Hosting)

#### Build Yaratish

```bash
npm run build
```

#### Production Server

```bash
npm start
```

#### Environment Variables

Server'da `.env.local` yoki `.env.production` faylini yarating va o'zgaruvchilarni qo'shing.

---

## Deploy Qilgandan Keyin

### 1. Database Migration

```bash
npx drizzle-kit push
```

### 2. Admin User Yaratish

1. `/admin/register` ga kiring
2. Foydalanuvchi yarating
3. Database'da `role` ni `admin` ga o'zgartiring

### 3. Test Qilish

- Bosh sahifa ishlayotganini tekshiring
- Admin panel ishlayotganini tekshiring
- Til almashtirish ishlayotganini tekshiring

---

## Xavfsizlik

### ✅ GitHub'ga Yuklamaslik Kerak:

- `.env.local` - Environment variables
- `.env` - Environment variables
- `node_modules/` - Dependencies
- `.next/` - Build fayllari
- `.vercel/` - Vercel config

Bularning barchasi `.gitignore` da bor.

---

## Qo'shimcha Sozlamalar

### Custom Domain

Vercel'da:
1. "Settings" > "Domains"
2. Domain nomini kiriting
3. DNS sozlamalarini qo'shing

### SSL Certificate

Vercel avtomatik SSL beradi (Let's Encrypt).

---

## Muammolar va Yechimlar

### Build Xatosi
- Environment variables to'g'ri sozlanganligini tekshiring
- `npm run build` ni local'da test qiling

### Database Connection Xatosi
- `DATABASE_URL` to'g'ri ekanligini tekshiring
- Database server ishlamoqda ekanligini tekshiring

### 404 Xatosi
- Next.js routing to'g'ri ishlayotganini tekshiring
- `next.config.ts` sozlamalarini tekshiring

---

## Production Checklist

- [ ] Environment variables sozlangan
- [ ] Database migration qilingan
- [ ] Build muvaffaqiyatli
- [ ] Admin user yaratilgan
- [ ] Barcha funksiyalar ishlayapti
- [ ] Til almashtirish ishlayapti
- [ ] Contact form ishlayapti
- [ ] File upload ishlayapti

---

**Tayyor!** 🚀

Saytingiz endi internetda mavjud!

