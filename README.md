# Elcam Property Maintenance

Website for a Milton Keynes building, refurbishment and maintenance company, built with Astro 7, TypeScript 6 and Tailwind CSS 4.

## Run it

```sh
npm install
npm run dev
```

The site runs at http://localhost:4321.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local dev server |
| `npm run build` | Builds for Vercel |
| `npm run check` | Type-checks the project |

## Search indexing

Indexing is off. To turn it on, set `SITE_INDEXABLE=true` at build time and remove the `X-Robots-Tag` header from `vercel.json`.

## Enquiry form

The form validates submissions but sends nothing until `RESEND_API_KEY`, `ENQUIRY_TO` and `ENQUIRY_FROM` are set. See `.env.example`.

