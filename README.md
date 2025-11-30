# Ignite Call — Next.js + Prisma Scheduling App

A demo scheduling web app built with Next.js, TypeScript, Prisma and NextAuth. This repository contains the frontend pages, API routes, and Prisma schema used for user registration, calendar connection, and booking flows.

--

## Quick Overview

- **Framework:** Next.js (TypeScript)
- **Database:** PostgreSQL via Prisma
- **Auth:** NextAuth (with OAuth providers for calendar connection)
- **HTTP client/helpers:** `lib/axios.ts`
- **Prisma adapter:** `lib/auth/prisma-adapter.ts`

Project structure highlights:

- `src/pages/` — Next.js pages and API routes (e.g. `pages/api/auth/[...nextauth].api.ts`).
- `src/pages/register/` — Registration flow (connect calendar, time intervals, profile updates).
- `src/pages/schedule/[username]` — Public scheduling UI for a user.
- `prisma/` — Prisma schema and migrations.

## Prerequisites

- Node.js (v16+ recommended)
- npm (or another package manager)
- A PostgreSQL database (connection URL available as `DATABASE_URL`)

## Environment variables

Create a `.env` file in the project root with the following variables (values depend on your environment/provider):

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="a-long-random-string"
# OAuth provider credentials used by NextAuth (example names)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
# If you use GitHub or other providers, add their IDs/SECRETs here
GITHUB_ID=""
GITHUB_SECRET=""
```

Adjust provider variables depending on what you configure in `src/pages/api/auth/[...nextauth].api.ts`.

## Install

Install dependencies:

```fish
npm install
```

## Database setup (Prisma)

Run Prisma migrations and generate the client. If you're developing locally and want to create a fresh migration run:

```fish
npx prisma generate
npx prisma migrate dev --name init
```

If you already have migrations in `prisma/migrations/`, the `migrate dev` command will apply them to your local database.

## Running the app (development)

Start the Next.js dev server:

```fish
npm run dev
```

The app will be available at `http://localhost:3000` (or whatever `NEXTAUTH_URL` you set).

## Scripts

Use the scripts defined in `package.json`. Common ones include:

- `npm run dev` — run Next.js in development mode
- `npm run build` — build the app for production
- `npm start` — start the production server (after build)

If a script referenced here is missing, check `package.json` for exact names.

## Key developer notes

- API auth is handled in `src/pages/api/auth/[...nextauth].api.ts` with a Prisma adapter at `lib/auth/prisma-adapter.ts`.
- Database helpers live in `lib/prisma.ts`.
- Time conversions and utilities are in `src/utils/` (e.g. `convert-time-string-to-minutes.ts`).
- UI components are under `src/components/` and pages are under `src/pages/`.

## Deployment

1. Ensure environment variables are set in your hosting platform (e.g., Vercel).
2. Run `npm run build` and `npm start` (or use platform-specific build/deploy).
3. Ensure your production `DATABASE_URL` points to a managed Postgres instance and migrations are applied (you can run `npx prisma migrate deploy` on CI).

## Troubleshooting

- If NextAuth can't sign in, check provider callback URLs and `NEXTAUTH_URL`.
- If Prisma cannot connect, verify `DATABASE_URL` and reachability of the DB from your environment.
