---
title: MQTT & Real-time
description: Enable live device updates and cross-network command routing with MQTT.
---

import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Without MQTT, Kiosk Admin polls devices every 30 seconds. With MQTT, device status updates appear instantly — and commands can be routed to devices on **different networks** without port forwarding.

## Three modes

| Mode | When to use |
|---|---|
| **Embedded broker** | Self-contained setup; no external service needed |
| **External broker** | You already run Mosquitto, HiveMQ, or similar |
| **No MQTT** | HTTP polling only (30-second interval) |

## Embedded broker

The simplest option. Kiosk Admin starts an Aedes MQTT broker inside the same process on port 1883.

<Steps>

1. Go to **Settings → MQTT**
2. Click **Embedded Broker**
3. Set a port (default `1883`)
4. Optionally set a username and password
5. Click **Save & Connect**

</Steps>

The status badge shows "Running on port 1883 — N clients connected" and updates every 5 seconds.

Configure your devices to connect to:

| Protocol | URL |
|---|---|
| MQTT TCP | `mqtt://{server-ip}:1883` |
| MQTT WebSocket | `ws://{server-ip}:9883` (if WS port is set) |

## External broker

<Steps>

1. Run an MQTT broker (e.g. Mosquitto via Docker):
   ```bash
   docker run -d -p 1883:1883 eclipse-mosquitto
   ```

2. Go to **Settings → MQTT** → **External Broker**

3. Enter the broker URL — all standard schemes are supported:

   | Scheme | Example | Notes |
   |---|---|---|
   | `mqtt://` | `mqtt://192.168.1.10:1883` | Plain TCP |
   | `mqtts://` | `mqtts://broker.example.com:8883` | TLS (e.g. HiveMQ Cloud) |
   | `ws://` | `ws://192.168.1.10:9001` | WebSocket |
   | `wss://` | `wss://xxx.hivemq.cloud:8884/mqtt` | WebSocket over TLS |

4. Set optional credentials and topic prefix (default: `fully`)

5. Click **Save & Connect**

</Steps>

## Topic structure

### Fully Kiosk Browser

| Direction | Topic |
|---|---|
| Device → broker (status) | `{prefix}/deviceInfo/{deviceId}` |
| Device → broker (events) | `{prefix}/event/{event}/{deviceId}` |

Fully Kiosk MQTT is **publish-only** — it sends status updates but does not subscribe to commands. Commands are always sent via the local REST API.

### FreeKiosk

| Direction | Topic |
|---|---|
| Device → broker (status) | `{baseTopic}/{deviceId}/state` |
| Device → broker (availability) | `{baseTopic}/{deviceId}/availability` |
| Broker → device (commands) | `{baseTopic}/{deviceId}/set/{entity}` |

FreeKiosk supports **bidirectional** MQTT. Kiosk Admin learns the base topic from the first incoming state message and routes subsequent commands through MQTT automatically.

## Cross-network devices

Both embedded and external brokers work for cross-network devices: the device connects **outbound** to the broker, so no inbound ports need to be open on the device's network.

For FreeKiosk devices: once an MQTT Device ID is set and the broker is connected, commands are automatically routed through MQTT regardless of whether the device is on the local network or not.

## MQTT device discovery

When a device publishes MQTT messages but is not yet registered in Kiosk Admin, a **"Discovered via MQTT"** banner appears above the device grid. Click **Add** to open the Add Device form pre-filled with:
- Device name (from MQTT payload)
- IP address (from MQTT payload)
- MQTT Device ID

<Aside type="tip">
MQTT device IDs are also automatically fetched when you save a new device — Kiosk Admin probes the device's REST API during registration.
</Aside>
