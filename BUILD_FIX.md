# 🔧 Fixing Vercel Build Errors

## Common Build Issues & Solutions

### Issue 1: Missing Environment Variables During Build

**Symptoms:** Build fails with "undefined" or "missing" errors

**Solution:**
1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Make sure these are set for **ALL environments** (Production, Preview, Development):
   - `RESEND_API_KEY` (required)
   - `DATABASE_URL` (can be a dummy for build, but better to have real one)
   - `OWNER_EMAIL` (optional, has default)

3. **Important:** After adding variables, **Redeploy** your project

---

### Issue 2: Build Command Issues

**Current Build Command:** `npm run build` (this is correct)

**If you need to customize:**
- Go to Project Settings → **General** → **Build & Development Settings**
- Build Command: `npm run build` (should be auto-detected)
- Output Directory: `.next` (should be auto-detected)
- Install Command: `npm install` (should be auto-detected)

**DO NOT change these unless you have a specific reason.**

---

### Issue 3: Prisma Build-Time Connection

**Symptoms:** Build fails with database connection errors

**Solution:** Prisma Client should NOT connect during build. If it does:
1. Make sure `DATABASE_URL` is set (even if dummy)
2. Prisma generate runs in `postinstall` (already configured ✅)
3. The build should work even without a real database connection

---

### Issue 4: Missing Files

**Check if these files exist in `/public`:**
- `/public/herosection-video.mp4` - Hero video
- `/public/svstudio-logo.png` - Logo

**If missing:**
- Add them to your repository
- Commit and push to GitHub
- Redeploy

---

### Issue 5: TypeScript Errors

**Symptoms:** Build fails with TypeScript compilation errors

**Solution:**
1. Test locally first:
   ```bash
   npm run build
   ```
2. Fix any TypeScript errors locally
3. Commit and push fixes
4. Redeploy

---

### Issue 6: Node Version Mismatch

**Check Node.js version:**
- Vercel uses Node.js 20.x by default (good ✅)
- Your `package.json` doesn't specify engine, which is fine

**If you need a specific version:**
- Add to `package.json`:
  ```json
  "engines": {
    "node": ">=20.0.0"
  }
  ```

---

## Step-by-Step Fix Process

### Step 1: Check Full Build Logs

1. Go to Vercel Dashboard → Your Project → **Deployments**
2. Click on the **failed deployment**
3. Scroll through the **entire build log**
4. Look for the **actual error message** (usually near the end)

**Common error patterns:**
- `Error: Cannot find module...` → Missing dependency
- `Type error: ...` → TypeScript error
- `PrismaClient is not configured...` → Database URL issue
- `Failed to compile` → Code error

---

### Step 2: Verify Environment Variables

**In Vercel Dashboard:**
1. Settings → Environment Variables
2. Check these exist:
   - ✅ `RESEND_API_KEY` = `re_...` (your actual key)
   - ✅ `DATABASE_URL` = `postgresql://...` (can be dummy for now)
   - ⚠️ `OWNER_EMAIL` = Optional (has default)

3. Make sure they're enabled for:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

---

### Step 3: Test Build Locally

**Before deploying, test locally:**

```bash
# Make sure you're in the project directory
cd shanmugavel-studio

# Install dependencies
npm install

# Try building
npm run build
```

**If local build fails:**
- Fix the errors locally first
- Then push and deploy

**If local build succeeds but Vercel fails:**
- Check environment variables
- Check Node.js version
- Check for platform-specific issues

---

### Step 4: Clean Build

**Sometimes caches cause issues:**

1. In Vercel Dashboard → Deployments
2. Click "..." on latest deployment
3. Select **"Redeploy"**
4. Check **"Use existing Build Cache"** = OFF
5. Deploy

---

## Quick Checklist

Before deploying, verify:

- [ ] All code is committed and pushed to GitHub
- [ ] `RESEND_API_KEY` is in Vercel environment variables
- [ ] `DATABASE_URL` is in Vercel environment variables (can be dummy)
- [ ] Local build works: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Public files exist (video, logo, etc.)

---

## Get Help

**If build still fails:**

1. **Copy the FULL error message** from Vercel build logs
2. **Check which step failed:**
   - Installing dependencies?
   - Running postinstall (Prisma generate)?
   - Running build?
   - Type checking?

3. **Common fixes:**
   - Missing env vars → Add them
   - TypeScript errors → Fix code
   - Missing files → Add to repo
   - Dependency issues → Check package.json

---

## Example: Correct Vercel Configuration

**Build & Development Settings:**
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**Environment Variables:**
```
RESEND_API_KEY = re_xxxxxxxxxxxxx (Production, Preview, Development)
DATABASE_URL = postgresql://... (Production, Preview, Development)
OWNER_EMAIL = prasathbusinesssvs@gmail.com (Production, Preview, Development) [Optional]
```

---

## Still Stuck?

Share the **complete error message** from Vercel build logs, and I can help diagnose the specific issue!

