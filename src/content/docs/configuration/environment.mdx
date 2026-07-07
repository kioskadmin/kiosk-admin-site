---
title: Environment Variables
description: All environment variables required to run Kiosk Admin.
---

import { Aside } from '@astrojs/starlight/components';

Copy `.env.example` to `.env` in the `kiosk-admin/` directory and fill in the values below.

## Required

| Variable | Description |
|---|---|
| `AUTH_SECRET` | Random string (32+ chars) used to sign session tokens. Generate with `openssl rand -base64 32`. |
| `AUTH_URL` | Full URL of the server, e.g. `http://localhost:3000`. Used for OAuth redirects. |
| `ENCRYPTION_SECRET` | 64 hexadecimal characters (32 bytes). Device passwords are encrypted at rest using AES-256-GCM. |

Generate `ENCRYPTION_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

<Aside type="danger">
Never commit `.env` to version control. Both `AUTH_SECRET` and `ENCRYPTION_SECRET` must be kept secret — losing them means losing access to stored device passwords.
</Aside>

## Database

| Variable | Default | Description |
|---|---|---|
| `DATABASE_PROVIDER` | `sqlite` | `sqlite`, `postgresql`, or `mongodb` |
| `DATABASE_URL` | `file:./dev.db` | Connection string for the chosen provider |

## Optional

| Variable | Description |
|---|---|
| `MQTT_BROKER_URL` | MQTT broker URL, e.g. `mqtt://localhost:1883`. Can also be set from the Settings page. |
| `SMTP_HOST` | SMTP server hostname for alert emails |
| `SMTP_PORT` | SMTP port (default `587`) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `SMTP_FROM` | Sender address for alert emails |

MQTT and SMTP settings can also be configured through the **Settings** page in the UI — values saved there are stored in the database and take precedence over environment variables.
