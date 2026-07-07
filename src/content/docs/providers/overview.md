---
title: Providers Overview
description: How Kiosk Admin abstracts device APIs behind a unified interface.
---

A **provider** is a driver class that translates Kiosk Admin's internal command model into the specific HTTP calls (or MQTT messages) that a particular kiosk app understands.

## How it works

Every device is assigned a provider when it is added. The dashboard reads each device's provider to decide which controls to show — controls for capabilities the provider doesn't support are hidden automatically.

```
Dashboard  →  POST /api/devices/{id}/command  →  KioskProvider.sendCommand()
                                                         │
                                    ┌────────────────────┼────────────────────┐
                               FullyKiosk           FreeKiosk            FullyCloud
                               local REST           local REST        api.fully-kiosk.com
                               port 2323            port 8080           (cloud relay)
```

## Supported providers

| Provider | Connection | Auth |
|---|---|---|
| [Fully Kiosk Browser](/providers/fully-kiosk/) | Local REST on port 2323 | Password (required) |
| [FreeKiosk](/providers/freekiosk/) | Local REST on port 8080 | API key (optional) |
| [Fully Cloud](/providers/fully-cloud/) | `api.fully-kiosk.com` | Email + API key |

## Capability flags

Each provider exposes a static `capabilities` object. Kiosk Admin reads these flags to gate the UI:

| Flag | Controls gated |
|---|---|
| `hasScreenControl` | Screen on/off, force sleep |
| `hasUrlControl` | Load URL, refresh, clear cache |
| `hasScreensaver` | Start/stop screensaver |
| `hasTTS` | Text-to-speech |
| `hasVolume` | Volume slider |
| `hasScreenshot` | Screenshot panel |
| `hasCamshot` | Camera capture |
| `hasMediaPlayer` | Audio/video playback |
| `hasMaintenance` | Reboot, overlay message |
| `hasAppLauncher` | Launch app, send to background |
| `hasInjectJS` | JavaScript injection |
| `hasKioskLock` | Kiosk lock/unlock |
| `hasRemoteControl` | D-pad + keyboard remote |
| `hasAppManagement` | Clear app data, kill processes |
| `hasFileManagement` | File transfer |
| `hasApkManagement` | APK install/uninstall |
| `hasTabManagement` | Multi-tab management |
| `hasLogViewer` | Device log stream |
| `hasMqttCommands` | Route commands through MQTT |

## Adding a custom provider

See [Adding a Provider](/providers/adding-a-provider/) for a step-by-step guide.
