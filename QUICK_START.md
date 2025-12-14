# Tezkor Ishga Tushirish

## 1-qadam: Environment Variables Sozlash

Loyiha ildizida `.env.local` faylini yarating va quyidagi o'zgaruvchilarni to'ldiring:

```env
# Database (PostgreSQL - Neon Database)
DATABASE_URL=postgresql://user:password@host:port/database

# JWT Secrets (kuchli random stringlar - minimum 32 belgi)
ACCESS_TOKEN_SECRET=your-super-secret-access-token-key-minimum-32-characters-long
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key-minimum-32-characters-long

# Cloudinary (rasmlar uchun - ixtiyoriy)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Telegram Bot (contact form uchun - ixtiyoriy)
NEXT_PUBLIC_TELEGRAM_BOT_API=your-telegram-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id

# Vercel Blob (fayllar uchun - ixtiyoriy)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

**Muhim**: Eng kamida `DATABASE_URL`, `ACCESS_TOKEN_SECRET`, va `REFRESH_TOKEN_SECRET` sozlash kerak!

## 2-qadam: Database Migration

```bash
npx drizzle-kit push
```

## 3-qadam: Development Serverni Ishga Tushirish

```bash
npm run dev
```

## 4-qadam: Brauzerda Ochish

[http://localhost:3000](http://localhost:3000)

---

## Database Qayerdan Olish?

### Neon Database (Tavsiya etiladi - Bepul)
1. [neon.tech](https://neon.tech) ga kiring
2. Account yarating
3. Yangi project yarating
4. Connection string ni oling (DATABASE_URL)

### Supabase (Alternativ)
1. [supabase.com](https://supabase.com) ga kiring
2. Project yarating
3. Settings > Database > Connection string

## JWT Secrets Qayerdan Olish?

Ixtiyoriy kuchli random stringlar:
- Online: [randomkeygen.com](https://randomkeygen.com)
- Terminal: `openssl rand -base64 32`
- Yoki ixtiyoriy uzun random stringlar

## Qisqa Variant (Test uchun)

Agar faqat test qilish uchun kerak bo'lsa, minimal sozlash:

```env
DATABASE_URL=postgresql://test:test@localhost:5432/test
ACCESS_TOKEN_SECRET=test-access-token-secret-key-minimum-32-chars
REFRESH_TOKEN_SECRET=test-refresh-token-secret-key-minimum-32-chars
```

**Eslatma**: Boshqa o'zgaruvchilar ixtiyoriy - ularni keyinroq sozlashingiz mumkin.

