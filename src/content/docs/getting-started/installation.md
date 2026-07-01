---
title: Installation
description: Install and run Kiosk Admin on your own server.
---

import { Steps, Aside } from '@astrojs/starlight/components';

## Prerequisites

- **Node.js 20 LTS** or newer
- Git

## Quick start

<Steps>

1. **Clone the repository**

   ```bash
   git clone https://github.com/mfried40/kiosk-admin.git
   cd kiosk-admin/kiosk-admin
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create your `.env` file**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and fill in at minimum:

   ```ini
   AUTH_SECRET=<random 32+ character string>
   AUTH_URL=http://localhost:3000
   ENCRYPTION_SECRET=<64 hex characters>
   ```

   Generate `ENCRYPTION_SECRET` with:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   ```

   This creates a local `dev.db` SQLite file. No external database required.

5. **Start the server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000/setup](http://localhost:3000/setup) to create your first admin account.

</Steps>

## Production build

```bash
npm run build
npm start
```

<Aside type="tip">
For production, use a process manager like **PM2** or containerise with Docker to keep the server running after a restart.
</Aside>

## Using PostgreSQL or MongoDB

Set these environment variables before running migrations:

```ini
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@localhost:5432/kiosk_admin
```

For MongoDB:

```ini
DATABASE_PROVIDER=mongodb
DATABASE_URL=mongodb://localhost:27017/kiosk_admin
```

Then run `npx prisma db push` (MongoDB) or `npx prisma migrate dev` (PostgreSQL) instead.

See [Database configuration](/configuration/database/) for more details.
