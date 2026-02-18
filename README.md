# Autriders Monorepo

Production-ready full-stack SaaS starter for **Autriders** (autriders.com), built for Kavagie Smarttech Private Limited.

## Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion
- **Backend:** NestJS, PostgreSQL, Redis, BullMQ, FFmpeg integration hooks
- **Infra:** Docker Compose for Postgres + Redis

## Monorepo layout
- `apps/web` — marketing site + app dashboard
- `apps/api` — NestJS REST API and queue services

## Quick start
1. Copy env templates:
   - `cp apps/web/.env.example apps/web/.env.local`
   - `cp apps/api/.env.example apps/api/.env`
2. Start infra:
   - `docker compose up -d`
3. Install and run apps in separate terminals.

## Company details
- **Company:** Kavagie Smarttech Private Limited
- **Address:** 9 D Kewal Vihar, Dehradun, Uttarakhand, India - 248001
- **Support:** support@autriders.com

## Backup and download
Run the following command to create a downloadable backup archive:

- `npm run backup`

This generates a file inside `backups/` like:
- `backups/autriders-backup-YYYYMMDD-HHMMSS.tar.gz`

What is included:
- Project source snapshot (excluding `.git`, `node_modules`, build artifacts, and previous backups)
- PostgreSQL SQL dump if the local docker `postgres` container is running

You can download/share that generated `.tar.gz` file directly.
