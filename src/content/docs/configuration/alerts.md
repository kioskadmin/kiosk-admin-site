---
title: Alerts & Email
description: Configure email notifications for device events.
---

import { Aside } from '@astrojs/starlight/components';

Kiosk Admin can send email alerts when devices go offline, battery drops low, or a device is unplugged from power.

## SMTP configuration

Go to **Settings → Email** and fill in your SMTP server details:

| Field | Example |
|---|---|
| Host | `smtp.example.com` |
| Port | `587` |
| Username | `alerts@example.com` |
| Password | Your SMTP password |
| From address | `Kiosk Admin <alerts@example.com>` |

<Aside type="tip">
Most email providers (Gmail, SendGrid, Mailgun, Postmark) work via SMTP. For Gmail, use an **App Password** rather than your account password.
</Aside>

## Alert rules

Go to **Settings → Alert Rules** to configure which events trigger emails and for which devices.

| Event | Trigger |
|---|---|
| **Device offline** | Device stops responding for more than N minutes |
| **Low battery** | Battery drops below a configured threshold (%) |
| **Unplugged** | Device disconnects from AC power |

Each rule can target:
- All devices
- A specific group
- Individual devices

## Suppressing alerts

Disable a rule by toggling it off in the alert rules list. Notifications already queued will still be sent.

To silence alerts for a specific device temporarily, remove it from the rule's target list.
