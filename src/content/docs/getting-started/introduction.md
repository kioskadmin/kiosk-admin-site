---
title: Introduction
description: What Kiosk Admin is, who it's for, and how it fits into your infrastructure.
---

Kiosk Admin is a **self-hosted** web application for managing a fleet of Android kiosk devices from a single dashboard. Devices run kiosk software that exposes a local REST API — Kiosk Admin talks to that API on your behalf.

## Who it's for

| Role | What they do |
|---|---|
| **IT Admin** | Configures devices, sends commands, manages templates and alert rules |
| **Technician** | Monitors device status and takes screenshots; read-only access |

## Key capabilities

- One screen for all devices — battery, screen state, current URL, online/offline history
- Send commands to one device or an entire group at once
- Abstract away provider differences — the same UI works for Fully Kiosk Browser and FreeKiosk
- Zero-config default — runs on SQLite with no external services required
- Real-time updates when an MQTT broker is available; graceful 30-second polling fallback

## How it works

```
Your browser  ─→  Kiosk Admin server  ─→  Device REST API (port 2323 / 8080)
                        │
                        └─→  MQTT broker  ─→  Device (optional, for remote networks)
```

Kiosk Admin sits between your browser and your devices. It never requires inbound access to the server from devices — devices either expose a local REST API (same-network) or connect to an MQTT broker (cross-network).

## Next steps

- [Installation](/getting-started/installation/) — get the server running in under 5 minutes
- [Providers overview](/providers/overview/) — understand how provider abstraction works
