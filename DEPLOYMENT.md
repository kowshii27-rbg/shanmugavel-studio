# Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Required

Set these in your hosting platform (Vercel/Netlify/etc.):

#### **Required:**
- `DATABASE_URL` - PostgreSQL connection string (SQLite won't work on serverless)
  - Example: `postgresql://user:password@host:5432/dbname?sslmode=require`
  - Options: Vercel Postgres, Supabase, Railway, Neon, PlanetScale

- `RESEND_API_KEY` - Get from https://resend.com/api-keys
  - Sign up at resend.com
  - Create an API key
  - Add it as environment variable

#### **Optional (has defaults):**
- `OWNER_EMAIL` - Email to receive booking notifications
  - Default: `prasathsvstudio@gmail.com`
  - Set if you want a different email

- `RESEND_FROM_EMAIL` - Email address to send from
  - Default: `Shanmugavel Studio <onboarding@resend.dev>`
  - For production: Verify your domain in Resend and use: `Shanmugavel Studio <noreply@yourdomain.com>`

### 2. Database Migration

✅ **Prisma schema already configured for PostgreSQL!**

**Steps:**
1. Set up PostgreSQL database (Vercel Postgres, Supabase, etc.)
2. Get your `DATABASE_URL` connection string
3. Add `DATABASE_URL` to your environment variables
4. Run migrations (after deployment, or locally if you have the connection):
   ```bash
   npx prisma migrate deploy
   ```
5. Prisma client will auto-generate during build (via `postinstall` script)

### 3. Domain URLs

✅ **Already configured:** Domain URLs are set to `https://shanmugavelstudio.photography`
- `src/app/layout.tsx` - Updated
- `src/app/page.tsx` - Updated

If you use a different domain, update these files accordingly.

### 4. Build Scripts

The `package.json` already has:
- ✅ `build` script
- ✅ `start` script
- ✅ Prisma generate script

**Add postinstall script for Prisma (recommended):**
```json
"postinstall": "prisma generate"
```

### 5. File Assets

Ensure these files exist in `/public`:
- ✅ `/public/herosection-video.mp4` - Hero video
- ✅ `/public/svstudio-logo.png` - Logo
- ✅ `/public/dad-portrait.jpg` - About page image (if you added it)

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Add environment variables (see section 1 above)
   - Click "Deploy"

3. **Set up Database:**
   - In Vercel dashboard, go to Storage tab
   - Create a Postgres database
   - Copy the `DATABASE_URL` and add it to environment variables
   - Run migrations (Vercel will auto-run `postinstall`)

4. **Custom Domain (Optional):**
   - Domain is already set to `shanmugavelstudio.photography`
   - To use this domain, add it in Vercel settings → Domains
   - Or use the default Vercel domain (e.g., `your-project.vercel.app`)

### Option 2: Netlify

1. Push to GitHub (same as above)

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables
   - Deploy

3. **Set up Database:**
   - Use external PostgreSQL (Supabase, Railway, etc.)
   - Add `DATABASE_URL` to Netlify environment variables

## ⚠️ Important Notes

1. **Database:** SQLite is fine for local dev, but production needs PostgreSQL
2. **Email:** Resend free tier allows 100 emails/day (enough for testing)
3. **Domain:** Update all example.com URLs before going live
4. **Build Time:** First build may take 3-5 minutes (Prisma generation)

## 🔍 Post-Deployment Verification

- [ ] Homepage loads correctly
- [ ] Hero video plays
- [ ] Logo displays in navbar
- [ ] Contact form submits successfully
- [ ] Booking form sends email notifications
- [ ] All pages accessible (Portfolio, Services, About, etc.)
- [ ] No console errors in browser
- [ ] Mobile responsive

## 📝 Environment Variables Summary

```bash
# Required
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...

# Optional
OWNER_EMAIL=prasathsvstudio@gmail.com
RESEND_FROM_EMAIL=Shanmugavel Studio <noreply@yourdomain.com>
```

