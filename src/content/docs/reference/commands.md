---
title: Remote Commands
description: Full reference of all commands that can be sent to devices.
---

Commands are sent via `POST /api/devices/{id}/command` with body `{ "cmd": "<command>", ...params }`.

Commands unavailable for a given provider are hidden in the UI and return `501` from the API.

## Screen control

| Command | Parameters | Description |
|---|---|---|
| `screenOn` | — | Turn the screen on |
| `screenOff` | — | Turn the screen off |
| `forceSleep` | — | Force sleep immediately |

## URL & web

| Command | Parameters | Description |
|---|---|---|
| `loadUrl` | `url` (string) | Navigate to a URL |
| `loadStartUrl` | — | Navigate to the configured start URL |
| `refreshTab` | — | Reload the current page |
| `clearCache` | — | Clear the browser cache |
| `clearWebstorage` | — | Clear localStorage and sessionStorage |
| `clearCookies` | — | Clear all cookies |
| `resetWebview` | — | Fully reset the WebView |

## Screensaver

| Command | Parameters | Description |
|---|---|---|
| `startScreensaver` | — | Start screensaver / daydream |
| `stopScreensaver` | — | Stop screensaver |

## Text-to-speech

| Command | Parameters | Description |
|---|---|---|
| `textToSpeech` | `text`, `locale` (optional) | Speak text aloud |
| `stopTextToSpeech` | — | Stop speaking |

## Volume

| Command | Parameters | Description |
|---|---|---|
| `setVolume` | `level` (0–100) | Set media volume |

## App control

| Command | Parameters | Description |
|---|---|---|
| `restartApp` | — | Restart the kiosk app |
| `startApplication` | `package` | Launch an app by package name |
| `toForeground` | — | Bring kiosk app to foreground |
| `toBackground` | — | Send kiosk app to background |
| `exitApp` | — | Exit the kiosk app |

## Kiosk lock

| Command | Parameters | Description |
|---|---|---|
| `lockKiosk` | — | Enable kiosk lock mode |
| `unlockKiosk` | `pin` | Unlock kiosk mode |

## Media playback

| Command | Parameters | Description |
|---|---|---|
| `playSound` | `url` | Play an audio file |
| `stopSound` | — | Stop audio playback |
| `playVideo` | `url` | Play a video |
| `stopVideo` | — | Stop video playback |

## Maintenance

| Command | Parameters | Description |
|---|---|---|
| `enableLockedMode` | — | Enable maintenance/locked mode |
| `disableLockedMode` | — | Disable maintenance mode |
| `setOverlayMessage` | `message` | Show an overlay message |

## JavaScript injection

| Command | Parameters | Description |
|---|---|---|
| `injectJavascript` | `script` | Execute JavaScript in the WebView |

## Screenshot & camera

| Command | Parameters | Description |
|---|---|---|
| `screenshot` | — | Capture a screenshot (returned as image) |
