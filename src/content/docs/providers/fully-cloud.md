---
title: Fully Cloud
description: Using Kiosk Admin with Fully Cloud devices.
---

import { Aside, Steps } from '@astrojs/starlight/components';

**Fully Cloud** routes all commands through `api.fully-kiosk.com` using your Fully Cloud account credentials. No local network access, no open firewall ports — just a Fully Cloud subscription.

## When to use Fully Cloud

- Devices are on a remote network you don't control
- You already have a Fully Cloud subscription
- You want queued commands — commands sent while a device is offline are delivered when it reconnects

<Aside type="note">
Fully Cloud uses `persistent=1` for all commands, so they queue automatically for offline devices. There is no need to retry manually.
</Aside>

## Setup

<Steps>

1. **Get your API key**

   Log in to [Fully Cloud](https://www.fully-kiosk.com/cloud/) and go to your account settings to generate a REST API access token.

2. **Add a device in Kiosk Admin**

   Select **Fully Cloud** as the provider. Fill in:

   | Field | Value |
   |---|---|
   | Name | Friendly label |
   | Account Email | Your Fully Cloud account email |
   | API Key | Your REST API token |
   | Cloud Device ID | The Fully Cloud `devid` for this device |

3. **Find the Cloud Device ID**

   Click **Fetch** in the Add Device form. Kiosk Admin calls `GET /cloud/devices` with your credentials and presents a dropdown of all devices on the account. Select the one you want.

</Steps>

## Capabilities

Fully Cloud supports the same commands as Fully Kiosk Browser, except screenshot and camera capture (not available via the cloud API).

| Capability | Supported |
|---|:---:|
| Screenshot | ❌ |
| Screen on/off | ✅ |
| URL navigation | ✅ |
| App restart | ✅ |
| Screensaver | ✅ |
| TTS, volume, JS injection | ✅ |
| Maintenance (reboot, lock) | ✅ |
| App launcher | ✅ |
| Offline command queuing | ✅ |
| Camera capture | ❌ |
| Device settings API | ❌ |

## Rate limits

The Fully Cloud API allows max 10 requests/second and 100/minute. Kiosk Admin applies a conservative token-bucket limiter (8 req/s) and retries automatically on HTTP 429.
