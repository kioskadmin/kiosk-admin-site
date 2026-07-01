---
title: Database
description: Configure SQLite, PostgreSQL, or MongoDB as the Kiosk Admin database.
---

import { Tabs, TabItem, Aside } from '@astrojs/starlight/components';

Kiosk Admin uses **Prisma** as its ORM and supports three database backends. SQLite requires no external service and is the default for development and small deployments.

## SQLite (default)

No setup required. A `dev.db` file is created automatically in `kiosk-admin/` when you first run migrations.

```ini
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:./dev.db
```

```bash
npx prisma migrate dev
```

## PostgreSQL

```ini
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@localhost:5432/kiosk_admin
```

```bash
npx prisma migrate dev
```

## MongoDB

```ini
DATABASE_PROVIDER=mongodb
DATABASE_URL=mongodb://localhost:27017/kiosk_admin
```

```bash
npx prisma db push   # MongoDB uses db push, not migrate
```

<Aside type="caution">
MongoDB does not support Prisma migrations. Use `prisma db push` to sync the schema — this will drop collections that no longer exist.
</Aside>

## Switching backends

To switch from SQLite to PostgreSQL on an existing installation:

1. Export any important data first (there is no built-in migration tool between backends).
2. Update `DATABASE_PROVIDER` and `DATABASE_URL` in `.env`.
3. Run `npx prisma migrate dev` to create the schema in the new database.
4. Re-add devices and re-create users.
