---
title: MQTT & Real-time
description: Enable live device updates and cross-network command routing with MQTT.
---

import { Aside, Steps } from '@astrojs/starlight/components';

Without MQTT, Kiosk Admin polls devices every 30 seconds. With an MQTT broker, device status updates appear instantly — and commands can be routed to devices on **different networks** without port forwarding.

## How it works

```
Device  ──publishes──▶  MQTT broker  ◀──subscribes──  Kiosk Admin
                             │
                Kiosk Admin publishes commands
                Device subscribes and executes
```

Both the device and the server connect **outbound** to the broker. This means devices behind NAT (on a different network, hotel WiFi, remote office) are fully controllable as long as both sides can reach the broker.

## Setup

<Steps>

1. **Run an MQTT broker**

   [Mosquitto](https://mosquitto.org/) is the simplest option:

   ```bash
   # Docker
   docker run -d -p 1883:1883 eclipse-mosquitto

   # or install locally
   brew install mosquitto   # macOS
   apt install mosquitto    # Ubuntu/Debian
   ```

   The broker must be reachable from both the Kiosk Admin server and your devices.

2. **Configure Kiosk Admin**

   Go to **Settings → MQTT** in the UI and enter:

   | Field | Example |
   |---|---|
   | Broker URL | `mqtt://192.168.1.10:1883` |
   | Username | Optional |
   | Password | Optional |
   | Topic prefix | `fully` (matches Fully Kiosk's default) |

   Click **Save**. The server will attempt to connect immediately. A green indicator confirms the connection.

3. **Configure the device**

   In **Fully Kiosk Browser → Settings → Remote Administration → MQTT**:

   - Enable MQTT
   - Set the broker URL (must match what you entered in step 2)
   - Set the **MQTT Device ID** — this is the identifier used in topics (e.g. `kiosk-lobby`)

4. **Set `mqttDeviceId` on the device in Kiosk Admin**

   Edit the device and set the **MQTT Device ID** field to the same value you set in the Fully Kiosk settings. Once set, commands will automatically route through MQTT when the broker is connected.

</Steps>

## Topic format

| Direction | Topic |
|---|---|
| Device → broker (status) | `{prefix}/deviceInfo/{mqttDeviceId}` |
| Device → broker (events) | `{prefix}/event/{event}/{mqttDeviceId}` |
| Broker → device (commands) | `{prefix}/cmd/{mqttDeviceId}` |

## Command routing logic

```
POST /api/devices/{id}/command
  ├── device.mqttDeviceId is set AND broker is connected?
  │     └── YES → publish JSON command to {prefix}/cmd/{mqttDeviceId}
  │                returns { ok: true, transport: "mqtt" }
  └── NO → call device REST API directly
            returns { ok: true, transport: "http" }
```

<Aside type="tip">
MQTT commands are **fire-and-forget** (QoS 0). The broker acknowledges receipt — not the device. If you need confirmation that a command executed, poll `getDeviceInfo` after a short delay.
</Aside>

## Fallback behaviour

If the broker goes offline, Kiosk Admin automatically falls back to:
- **HTTP polling** every 30 seconds for status updates
- **Direct REST API** calls for commands (if the device is reachable)

No configuration change is needed — the fallback is automatic.
