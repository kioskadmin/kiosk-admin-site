import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Kiosk Admin',
      description: 'Self-hosted fleet management for Android kiosk devices.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mfried40/kiosk-admin' },
      ],
      editLink: {
        baseUrl: 'https://github.com/kioskadmin/kiosk-admin-site/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/introduction/' },
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'First Login', link: '/getting-started/first-login/' },
          ],
        },
        {
          label: 'Providers',
          items: [
            { label: 'Overview', link: '/providers/overview/' },
            { label: 'Fully Kiosk Browser', link: '/providers/fully-kiosk/' },
            { label: 'FreeKiosk', link: '/providers/freekiosk/' },
            { label: 'Fully Cloud', link: '/providers/fully-cloud/' },
            { label: 'Adding a Provider', link: '/providers/adding-a-provider/' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Environment Variables', link: '/configuration/environment/' },
            { label: 'Database', link: '/configuration/database/' },
            { label: 'MQTT & Real-time', link: '/configuration/mqtt/' },
            { label: 'Alerts & Email', link: '/configuration/alerts/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Remote Commands', link: '/reference/commands/' },
            { label: 'Role Permissions', link: '/reference/roles/' },
          ],
        },
      ],
    }),
  ],
});
