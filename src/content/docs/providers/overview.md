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
                                            ┌────────────┴────────────┐
                                     FullyKioskProvider       FreeKioskProvider
                                     (port 2323, query params) (port 8080, JSON body)
```

## Capability flags

Each provider exposes a static `capabilities` object. Kiosk Admin reads these flags at build time and at runtime to gate the UI:

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
| `hasAppManagement` | Clear app data, kill processes |
| `hasFileManagement` | File transfer |
| `hasApkManagement` | APK install/uninstall |
| `hasTabManagement` | Multi-tab management |
| `hasLogViewer` | Device log stream |

## Supported providers

| Provider | Port | Auth |
|---|---|---|
| [Fully Kiosk Browser](/providers/fully-kiosk/) | 2323 | Password (required) |
| [FreeKiosk](/providers/freekiosk/) | 8080 | API key (optional) |

## Adding a custom provider

See [Adding a Provider](/providers/adding-a-provider/) for a step-by-step guide.
