# 🗄️ Setting Up Vercel Postgres - Step by Step

## Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Your project pushed to GitHub (or ready to deploy)

---

## Step 1: Deploy Your Project to Vercel (If Not Already Done)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "Add New Project"** (or "New Project" button)
3. **Import your GitHub repository:**
   - If you haven't connected GitHub, click "Connect Git Provider" → Select GitHub
   - Authorize Vercel to access your repositories
   - Select your `shanmugavel-studio` repository
4. **Configure Project:**
   - Framework Preset: Should auto-detect as "Next.js"
   - Root Directory: Leave as `./` (or set to `shanmugavel-studio` if repo is in a subfolder)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)
5. **Add Environment Variables (for now, just RESEND_API_KEY):**
   - Click "Environment Variables"
   - Add:
     - Name: `RESEND_API_KEY`
     - Value: Your Resend API key (from your .env file)
     - Select: Production, Preview, Development
   - Click "Add"
6. **Click "Deploy"** (we'll add database after this)

---

## Step 2: Create Vercel Postgres Database

1. **After deployment completes, go to your project dashboard**
2. **Click on the "Storage" tab** (in the top navigation)
3. **Click "Create Database"**
4. **Select "Postgres"** from the options
5. **Choose a name** for your database (e.g., `shanmugavel-db`)
6. **Select a region** (choose closest to your users, e.g., "Mumbai" or "Singapore" for India)
7. **Click "Create"**

**Wait 1-2 minutes** for the database to be created.

---

## Step 3: Get Your DATABASE_URL

1. **Once database is created, you'll see it in the Storage tab**
2. **Click on your database name** to open it
3. **Go to the ".env.local" tab** (or "Connection String" section)
4. **You'll see your `DATABASE_URL`** - it looks like:
   ```
   postgres://default:xxxxx@xxxxx.aws.neon.tech:5432/verceldb?sslmode=require
   ```
5. **Copy this entire connection string**

---

## Step 4: Add DATABASE_URL to Environment Variables

1. **Go back to your project** (click project name in breadcrumb)
2. **Go to "Settings"** → **"Environment Variables"**
3. **Click "Add New"**
4. **Add the DATABASE_URL:**
   - Name: `DATABASE_URL`
   - Value: Paste the connection string you copied
   - Select: **Production**, **Preview**, and **Development** (check all three)
5. **Click "Save"**

**Important:** The DATABASE_URL is automatically added when you create Vercel Postgres, but it's good to verify it's in your environment variables.

---

## Step 5: Run Database Migration

You have two options:

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Link your project:**
   ```bash
   cd shanmugavel-studio
   vercel link
   ```
   - Select your project when prompted
   - Use default settings

4. **Pull environment variables:**
   ```bash
   vercel env pull .env.local
   ```
   This downloads your DATABASE_URL to a local file

5. **Run migration:**
   ```bash
   npm run db:migrate:deploy
   ```
   This will create the `bookings` table in your database

### Option B: Using Vercel Dashboard (Alternative)

1. **Go to your project** → **"Deployments"** tab
2. **Click on the latest deployment**
3. **Go to "Functions"** tab
4. **You can run a migration function** (if you create one)

**Or use Prisma Studio locally:**
1. Pull env vars: `vercel env pull .env.local`
2. Run: `npm run db:migrate:deploy`
3. Verify: `npm run db:studio` (opens database viewer)

---

## Step 6: Redeploy Your Application

1. **After adding DATABASE_URL, go to "Deployments" tab**
2. **Click the "..." menu** on the latest deployment
3. **Click "Redeploy"**
   - Or make a small change and push to GitHub (auto-redeploys)

This ensures your app uses the new DATABASE_URL.

---

## Step 7: Verify Database is Working

1. **Test the booking form** on your live site
2. **Submit a test booking**
3. **Check if it saves to database:**
   - Use Prisma Studio: `npm run db:studio` (after pulling env vars)
   - Or check Vercel Postgres dashboard → "Data" tab

---

## Quick Reference Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run database migration
npm run db:migrate:deploy

# View database (optional)
npm run db:studio
```

---

## Troubleshooting

### "Database connection failed"
- Verify DATABASE_URL is in environment variables
- Check if database is created and active
- Ensure you selected all environments (Production, Preview, Development)

### "Migration failed"
- Make sure you pulled env vars: `vercel env pull .env.local`
- Check DATABASE_URL format is correct
- Try running: `npm run db:generate` first, then `npm run db:migrate:deploy`

### "Table already exists"
- Database might already have tables
- You can reset (careful - deletes data):
  ```bash
  npx prisma migrate reset
  npm run db:migrate:deploy
  ```

---

## Cost Information

- **Vercel Postgres Hobby Plan:** Free tier available
  - 256 MB storage
  - 60 hours compute time/month
  - Perfect for small to medium sites

- **Upgrade:** If you need more, plans start at $20/month

---

## Next Steps

After database is set up:
1. ✅ Test booking form on live site
2. ✅ Verify emails are sending (check Resend dashboard)
3. ✅ Set up custom domain (if you have `shanmugavelstudio.photography`)
4. ✅ Monitor database usage in Vercel dashboard

Your database is now ready! 🎉

