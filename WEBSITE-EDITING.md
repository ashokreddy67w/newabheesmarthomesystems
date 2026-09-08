# ABHEE — new website

Run `npm run dev` or `npm run build && npm run start`.

The new homepage uses `components/experience/`, `app/experience.css`, and
`lib/experience-content.ts`. It does not import legacy UI. This standalone project contains only the new website. The sitemap lists only the new public routes.

## Photography

All image names, descriptions, and aspect ratios are centralized in
`lib/experience-content.ts`. Place your photographs in `public/images/` using
those exact names. Rebuild after adding files. The server checks which images
exist, so missing images cause no 404 requests. Images use Next.js responsive
optimization, lazy loading (except hero images), and fixed aspect-ratio frames.
The homepage uses original generated photographic illustrations. Prompts and asset provenance
are documented in `public/images/GENERATION.md`. These images are illustrative,
not photographs of completed ABHEE installations.

Suggested exports:

| Area | Aspect ratio | Suggested source dimensions |
| --- | --- | --- |
| hero-01.jpg | 4:3 | 1600 × 1200 |
| hero-02.jpg | 5:4 | 1000 × 800 |
| hero-03.jpg | 3:4 | 900 × 1200 |
| hero-04.jpg | 16:9 | 1600 × 900 |
| experience.jpg | 21:9 (mobile crops to 4:3) | 2520 × 1080 |
| connected-home.jpg | 16:9 (mobile crops to 4:5) | 2400 × 1350 |
| lighting / climate / entertainment scenes | responsive cinematic crop | 2400 × 1500 |
| security scenes | responsive portrait crop | 1600 × 2000 |
| solution-01.jpg through solution-10.jpg | 16:10 | 1600 × 1000 |
| project-01-01.jpg, project-02-01.jpg | 16:9 | 2400 × 1350 |
| additional project images | 4:3 | 1600 × 1200 |
| gallery images | alternating 4:3 / 4:5 | 1600 × 1200 / 1600 × 2000 |
| journal-01.jpg through journal-04.jpg | 4:3 | 1200 × 900 |
| final-home.jpg | full-viewport crop | 2400 × 1600 |

Keep important subjects near the center to accommodate mobile cropping.

## Editable business information

In `lib/experience-content.ts`, populate `business.locations`, `business.brands`,
`business.social`, and `business.whatsapp` only with verified details. WhatsApp
expects country code and phone digits without punctuation. Until configured,
the floating button explains that WhatsApp is pending and offers email.

The site-visit and support buttons open an accessible dialog with an email
link using the existing project email address. They do not claim to submit or
confirm bookings. Verify this email before launch. Set the canonical domain using `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

Project names are editable previews, not claims about completed work. Their
expanded views include two more image frames and space for approved copy.
Journal items are explicitly article previews. Add approved article text,
project stories, legal copy, and social URLs before publishing. Existing legal
pages remain marked as awaiting approved text.

## Interaction and motion

Lighting, security, climate, and entertainment share `ScrollStory`. Their
visuals remain pinned and crossfade as the visitor scrolls; scene buttons also
support direct keyboard and pointer selection. Mobile uses a stacked
composition. Reduced-motion mode removes pinning, parallax, and transitions;
all scenes remain selectable. Automation offers Movie Night and Good Morning.
Solutions have previous/next controls and a horizontally scrollable index.
Gallery filters, project previews, and journal previews are interactive.

## Verification

Production build and TypeScript passed. Browser checks covered 1440px desktop,
390px mobile, all four scroll stories, gallery filters, automation scenes,
solution selection, project expansion, contact dialog, and reduced motion.
No homepage runtime errors or page-level horizontal overflow were observed.
