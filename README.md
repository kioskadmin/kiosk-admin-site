# Kiosk Admin Docs

Documentation site for [Kiosk Admin](https://github.com/mfried40/kiosk-admin) — self-hosted fleet management for Android kiosk devices.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site locally.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start local dev server                       |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Content

Documentation lives in `src/content/docs/` and is organized into sections:

- **Getting Started** — Introduction, installation, and first login
- **Providers** — Supported kiosk providers (Fully Kiosk Browser, FreeKiosk) and how to add custom ones
- **Configuration** — Environment variables, database, MQTT, and alerts setup
- **Reference** — CLI commands and user roles

To add or edit a page, create or modify a `.md` or `.mdx` file in the appropriate subfolder. The sidebar is configured in `astro.config.mjs`.

## Contributing

Edit links on each page point to the source file on GitHub. Pull requests are welcome via the [kiosk-admin-site repository](https://github.com/kioskadmin/kiosk-admin-site).
