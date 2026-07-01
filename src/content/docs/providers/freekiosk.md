---
title: FreeKiosk
description: Using Kiosk Admin with FreeKiosk devices.
---

import { Aside } from '@astrojs/starlight/components';

[FreeKiosk](https://www.freekiosk.app/) is a lightweight Android kiosk app with a JSON REST API. Authentication is optional — devices can be accessed with or without an API key.

## Device setup

1. Install **FreeKiosk** on your Android device.
2. Open the app settings and note the device's **IP address**.
3. Optionally set an **API key** under the remote control settings.

The REST API listens on port **8080** by default.

## Adding a FreeKiosk device in Kiosk Admin

| Field | Value |
|---|---|
| Provider | `FreeKiosk` |
| IP address | Device IP |
| Password / API key | Optional — leave blank if no API key is configured |

<Aside type="tip">
Unlike Fully Kiosk, the API key is optional for FreeKiosk. If your device has no API key configured, leave the password field empty when adding the device.
</Aside>

## Capabilities

FreeKiosk supports most remote control capabilities. Device settings, file management, APK management, tab management, and log viewer are not available.

| Capability | Supported |
|---|:---:|
| Screenshot | ✅ |
| Screen on/off | ✅ |
| URL navigation & reload | ✅ |
| App restart | ✅ |
| Screensaver | ✅ |
| Text-to-speech | ✅ |
| Volume control | ✅ |
| Camera capture | ✅ |
| Audio/video playback | ✅ |
| Maintenance (reboot, lock) | ✅ |
| App launcher | ✅ |
| JavaScript injection | ✅ |
| Device settings API | ❌ |
| File management | ❌ |
| APK install/uninstall | ❌ |
| Tab management | ❌ |
| Log viewer | ❌ |

Controls for unsupported capabilities are automatically hidden in the Kiosk Admin UI — no manual configuration needed.
