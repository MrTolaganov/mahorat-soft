# Vercel Build Xatosini Tuzatish

## Muammo
Vercel'da build xatosi: `package.json` faylida conflict markerlar (`<<<<<<<`, `=======`, `>>>>>>>`) bor deb ko'rsatmoqda.

## Yechim

### 1. Vercel'da Build Cache'ni Tozalash

1. **Vercel Dashboard'ga kiring**: [vercel.com](https://vercel.com)
2. **Project'ni tanlang**: `mahorat-soft`
3. **Settings** bo'limiga kiring
4. **General** tab'ni oching
5. **"Clear Build Cache"** tugmasini bosing
6. **"Clear"** tugmasini tasdiqlang

### 2. Yangi Deploy Qilish (Cache'siz)

1. **Deployments** bo'limiga kiring
2. Eng so'nggi deployment'ni tanlang
3. **"..."** (uch nuqta) tugmasini bosing
4. **"Redeploy"** tugmasini bosing
5. **MUHIM**: "Use existing Build Cache" checkbox'ni **O'CHIRIB** qo'ying
6. **"Redeploy"** tugmasini bosing

### 3. Yoki GitHub'da Yangi Commit Yaratish

Agar yuqoridagi usul ishlamasa:

1. GitHub'da repository'ni oching
2. `package.json` faylini oching
3. "Edit" tugmasini bosing
4. Faylni to'liq ko'rib chiqing - conflict markerlar bo'lmasligi kerak
5. Agar conflict markerlar bo'lsa, ularni olib tashlang
6. "Commit changes" tugmasini bosing
7. Vercel avtomatik yangi deploy qiladi

### 4. Yoki Vercel CLI orqali

Agar Vercel CLI o'rnatilgan bo'lsa:

```bash
vercel --prod --force
```

---

## Tekshirish

Deploy qilingandan keyin:
1. Build loglarni tekshiring - xatolar bo'lmasligi kerak
2. www.mahoratsoft.uz ga kiring
3. Til almashtirish ishlayotganini tekshiring

---

## Qo'shimcha Yechimlar

### Agar hali ham xato bo'lsa:

1. **Vercel'da Project'ni qayta import qiling**:
   - Project'ni o'chiring
   - Qayta import qiling
   - Environment variables'ni qayta sozlang

2. **Yoki GitHub'da yangi branch yarating**:
   ```bash
   git checkout -b fix-build
   git push origin fix-build
   ```
   Keyin Vercel'da yangi branch'ni deploy qiling

---

## Muhim Eslatma

GitHub'dagi `package.json` fayli **to'g'ri** va conflict markerlar **yo'q**. Muammo Vercel'ning cache'ida. Cache'ni tozalash kerak!

