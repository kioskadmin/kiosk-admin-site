---
title: Role Permissions
description: What ADMIN and VIEWER users can and cannot do.
---

Kiosk Admin has two roles. Every authenticated user has exactly one.

## ADMIN

Full control. ADMINs can:

- View and manage all devices (add, edit, delete)
- Send any remote command to any device
- Read and write device settings
- Create and delete groups, tags, and config templates
- Configure alert rules
- Configure MQTT and SMTP settings
- View the full audit log
- Manage other user accounts

## VIEWER

Read-only monitoring. VIEWERs can:

- View all device cards and status information
- Take screenshots and camera captures
- View the audit log (read-only)

VIEWERs **cannot**:

- Send commands (screen control, URL navigation, restart, etc.)
- Read or write device settings
- Add, edit, or delete devices, groups, or tags
- Access the Settings page

## API enforcement

Every API route is protected:

- Unauthenticated requests → `401 Unauthorized`
- VIEWER requests to ADMIN-only routes → `403 Forbidden`

Role checks are enforced server-side via `requireRole()` — the UI hiding controls is a convenience, not a security boundary.
