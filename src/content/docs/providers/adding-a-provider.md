---
title: Adding a Provider
description: Implement support for a new kiosk app in four steps.
---

import { Steps, Aside } from '@astrojs/starlight/components';

Any kiosk app with a REST API (or MQTT support) can be added as a provider. You only need to write one TypeScript class.

<Steps>

1. **Create the provider class**

   Create `kiosk-admin/lib/providers/<name>.ts`:

   ```ts
   import { BaseKioskProvider, ProviderCapabilityError } from '../provider.types';
   import type { Device } from '../generated/prisma/client';

   export class MyKioskProvider extends BaseKioskProvider {
     static readonly capabilities = {
       hasScreenshot: true,
       hasScreenControl: true,
       hasUrlControl: true,
       hasAppRestart: true,
       hasScreensaver: false,
       hasTTS: false,
       hasVolume: false,
       hasCamshot: false,
       hasMediaPlayer: false,
       hasMaintenance: false,
       hasAppLauncher: false,
       hasInjectJS: false,
       hasKioskLock: false,
       hasFileManagement: false,
       hasAppManagement: false,
       hasUsageStats: false,
       hasLogViewer: false,
       hasTabManagement: false,
       hasFileTransfer: false,
       hasApkManagement: false,
     };

     async getDeviceInfo(device: Device) {
       // Call the device's status endpoint and map the response
       // to the DeviceInfo type defined in provider.types.ts
     }

     async getScreenshot(device: Device): Promise<Buffer> {
       // Return the raw PNG/JPEG bytes
     }

     async sendCommand(
       device: Device,
       cmd: string,
       params?: Record<string, string>,
     ): Promise<unknown> {
       switch (cmd) {
         case 'screenOn':
           // ...
         default:
           throw new ProviderCapabilityError(`${cmd} is not supported`);
       }
     }
   }
   ```

2. **Add the enum value to the Prisma schema**

   In `kiosk-admin/prisma/schema.prisma`:

   ```prisma
   enum Provider {
     FULLY_KIOSK
     FREE_KIOSK
     MY_KIOSK   // ← add this
   }
   ```

   Then run:

   ```bash
   cd kiosk-admin
   npx prisma migrate dev --name add_my_kiosk_provider
   npx prisma generate
   ```

3. **Register the provider**

   In `kiosk-admin/lib/providers/index.ts`:

   ```ts
   import { MyKioskProvider } from './my-kiosk';

   export function getProvider(p: Provider): BaseKioskProvider {
     switch (p) {
       case 'FULLY_KIOSK': return new FullyKioskProvider();
       case 'FREE_KIOSK':  return new FreeKioskProvider();
       case 'MY_KIOSK':    return new MyKioskProvider();   // ← add this
     }
   }
   ```

   And in `kiosk-admin/lib/capabilities.ts`:

   ```ts
   export const CAPABILITIES: Record<Provider, ProviderCapabilities> = {
     FULLY_KIOSK: FullyKioskProvider.capabilities,
     FREE_KIOSK:  FreeKioskProvider.capabilities,
     MY_KIOSK:    MyKioskProvider.capabilities,   // ← add this
   };
   ```

4. **Add a display label**

   In `kiosk-admin/components/DeviceForm.tsx`, add the label to the provider select:

   ```tsx
   { FULLY_KIOSK: 'Fully Kiosk', FREE_KIOSK: 'FreeKiosk', MY_KIOSK: 'My Kiosk' }[provider]
   ```

</Steps>

<Aside type="tip">
See `specs/012-freekiosk-provider/` in the repository for a fully worked example — requirements, design, and implementation checklist.
</Aside>
