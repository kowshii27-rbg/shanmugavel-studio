# Shanmugavel Studio - Photography Website

A production-ready photography studio website built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- **Portfolio Gallery** - Showcase work across weddings, portraits, products, events, and family shoots
- **Booking System** - Fully functional contact form with database storage and email notifications
- **Responsive Design** - Mobile-first, optimized for all devices
- **SEO Optimized** - Metadata, structured data, and Open Graph tags
- **Performance** - Next.js Image optimization and lazy loading

## Getting Started

### Prerequisites

- Node.js 20.13+ (or upgrade to 20.19+ for latest Prisma)
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL` - SQLite database path (default: `file:./dev.db`)
- `RESEND_API_KEY` - Get from [Resend](https://resend.com/api-keys)
- `OWNER_EMAIL` - Email where booking notifications are sent (default: prasathsvstudio@gmail.com)

3. Set up the database:

```bash
npm run db:migrate
```

This creates the SQLite database and applies migrations.

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Backend Setup

### Email Notifications (Resend)

1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to `.env` as `RESEND_API_KEY`
4. For production, verify your domain in Resend and update the `from` address in `src/app/api/booking/route.ts`

### Database

The project uses SQLite for development (stored in `dev.db`). For production, you can switch to PostgreSQL:

1. Update `prisma/schema.prisma` datasource to PostgreSQL
2. Update `DATABASE_URL` in `.env`
3. Run migrations: `npm run db:migrate`

### Database Management

- View database: `npm run db:studio` (opens Prisma Studio)
- Create migration: `npm run db:migrate`
- Generate Prisma Client: `npm run db:generate`

## Booking Form

The booking form (`/contact`) saves submissions to the database and sends email notifications to the owner. All bookings are stored with:
- Customer details (name, email, phone)
- Shoot preferences (type, date, time, location)
- Message/requirements
- Status tracking (pending, confirmed, cancelled)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
