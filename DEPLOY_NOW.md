# 🚀 Quick Deployment Guide

## Step 1: Set Up PostgreSQL Database

Choose one of these options:

### Option A: Vercel Postgres (Recommended if using Vercel)
1. Go to your Vercel project dashboard
2. Click on **Storage** tab
3. Click **Create Database** → Select **Postgres**
4. Copy the `DATABASE_URL` connection string
5. Add it to your environment variables

### Option B: Supabase (Free tier available)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **Settings** → **Database**
4. Copy the **Connection string** (URI format)
5. It looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
6. Add it to your environment variables as `DATABASE_URL`

### Option C: Railway (Easy setup)
1. Go to [railway.app](https://railway.app)
2. Create new project → Add **PostgreSQL**
3. Copy the `DATABASE_URL` from the Variables tab
4. Add it to your hosting platform's environment variables

### Option D: Neon (Serverless PostgreSQL)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it to your environment variables

---

## Step 2: Environment Variables Checklist

Add these to your hosting platform (Vercel/Netlify/etc.):

### ✅ Required:
```bash
DATABASE_URL=postgresql://user:password@host:5432/dbname?sslmode=require
RESEND_API_KEY=re_your_api_key_here
```

### Optional (has defaults):
```bash
OWNER_EMAIL=prasathsvstudio@gmail.com
RESEND_FROM_EMAIL=Shanmugavel Studio <onboarding@resend.dev>
```

**Note:** Your `.env` file is for local development. For production, add these in your hosting platform's dashboard.

---

## Step 3: Deploy to Vercel

### If you haven't pushed to GitHub yet:

1. **Initialize Git and push to GitHub:**
   ```bash
   cd shanmugavel-studio
   git init
   git add .
   git commit -m "Ready for deployment"
   ```
   
   Then create a new repository on GitHub and:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables:**
   - In Vercel project settings, go to **Environment Variables**
   - Add all variables from Step 2
   - Make sure to select **Production**, **Preview**, and **Development**

4. **Set up Database (if using Vercel Postgres):**
   - In Vercel dashboard, go to **Storage** tab
   - Create Postgres database
   - The `DATABASE_URL` will be automatically added to environment variables

5. **Run Database Migration:**
   - After first deployment, go to your project's **Deployments** tab
   - Click on the latest deployment → **View Function Logs**
   - Or run locally (if you have DATABASE_URL):
     ```bash
     npm run db:migrate:deploy
     ```
   - Or use Vercel CLI:
     ```bash
     vercel env pull .env.local
     npm run db:migrate:deploy
     ```

6. **Deploy:**
   - Click **"Deploy"**
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `your-project.vercel.app`

---

## Step 4: Custom Domain (Optional)

To use `shanmugavelstudio.photography`:

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter: `shanmugavelstudio.photography`
   - Follow DNS configuration instructions

2. **Update DNS Records:**
   - Add the CNAME or A record as instructed by Vercel
   - Wait for DNS propagation (can take a few hours)

---

## Step 5: Verify Deployment

After deployment, check:

- [ ] Homepage loads: `https://your-project.vercel.app`
- [ ] Hero video plays
- [ ] Logo displays correctly
- [ ] Contact form works
- [ ] Booking form submits and sends email
- [ ] All pages accessible (Portfolio, Services, About, etc.)
- [ ] No console errors

---

## Troubleshooting

### Database Connection Issues:
- Verify `DATABASE_URL` is correct
- Check if database allows connections from your hosting platform
- For Supabase: Check **Settings** → **Database** → **Connection Pooling**

### Migration Errors:
- Run: `npm run db:migrate:deploy` locally with production `DATABASE_URL`
- Or use Vercel CLI to run migrations

### Build Errors:
- Check Vercel build logs
- Ensure all environment variables are set
- Verify `postinstall` script runs (Prisma generate)

### Email Not Sending:
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for email logs
- Verify sender email is configured

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Run production server locally
npm start

# Database commands
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Create new migration (dev)
npm run db:migrate:deploy # Apply migrations (production)
npm run db:studio        # Open Prisma Studio (database GUI)
```

---

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Ensure database is accessible
4. Check Resend API key is valid

Your site is configured and ready! 🎉

