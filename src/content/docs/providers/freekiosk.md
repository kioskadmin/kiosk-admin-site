---
title: FreeKiosk
description: Using Kiosk Admin with FreeKiosk devices.
---

import { Aside } from '@astrojs/starlight/components';

[FreeKiosk](https://www.freekiosk.app/) is a lightweight Android kiosk app with a JSON REST API and full MQTT bidirectional support.

## Device setup

1. Install **FreeKiosk** on your Android device.
2. Open the app settings and note the device's **IP address**.
3. Optionally set an **API key** under the remote control settings.

The REST API listens on port **8080** by default.

## Adding a FreeKiosk device

| Field | Value |
|---|---|
| Provider | `FreeKiosk` |
| IP Address | Device IP |
| Password / API key | Optional — leave blank if no API key is configured |

<Aside type="tip">
The MQTT Device ID is automatically fetched when you save a new device. You can also click **Fetch** in the form to retrieve it manually.
</Aside>

## Capabilities

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
| **D-pad remote control** | ✅ |
| **Kiosk lock** | ✅ |
| **MQTT commands** | ✅ |
| Device settings API | ❌ |
| File management | ❌ |
| APK install/uninstall | ❌ |
| Tab management | ❌ |
| Log viewer | ❌ |

## MQTT

FreeKiosk has full MQTT support. It **publishes** status to `{baseTopic}/{deviceId}/state` and **subscribes** to commands on `{baseTopic}/{deviceId}/set/{entity}`.

Kiosk Admin automatically learns the base topic from the first incoming state message, so commands can be routed via MQTT as soon as the device connects — no manual configuration needed.

See [MQTT & Real-time](/configuration/mqtt/) for setup details.

## D-pad remote control

When `hasRemoteControl` is enabled, the Controls tab shows a D-pad grid plus Back, Home, Menu, and Play/Pause buttons. These send commands to the FreeKiosk Accessibility Service, which works across all apps on the device.
