# Product photographs

Upload your own product photographs here using the exact filenames below. No generated or stock product images are used. Until uploaded, each card displays an intentional “Image coming soon” placeholder without requesting a missing file. Failed image loads also fall back to this placeholder.

Use high-quality JPEG images, ideally 1600 × 1200 (4:3). Keep the subject centered: all cards use the same rounded 4:3 frame with object-fit: cover. Aim for under 400 KB per image. Next.js supplies responsive optimized images with lazy loading.

After adding or replacing photographs, rebuild and redeploy (`npm run build`). Restart the development server if needed. If replacing a deployed photo under the same name, use a new versioned filename and update its slug in `lib/products.ts` to avoid stale optimized image caches.

Names, descriptions, alt text, image paths and category memberships are in `lib/products.ts`. Shared products have multiple categories and appear only once in All. Enquire Now opens an email addressed to the existing business email with the product name in its subject.

Content follows the product list supplied in the request; the referenced PDF was not available in this session.

| Product | Upload filename |
| --- | --- |
| Home Automation | `home-automation.jpg` |
| Digital Door Locks | `digital-door-lock.jpg` |
| Home Theater | `home-theater.jpg` |
| CCTV | `cctv.jpg` |
| Intercom Systems | `intercom-systems.jpg` |
| Video Door Phones | `video-door-phone.jpg` |
| Access Control Systems | `access-control.jpg` |
| Remote Gates | `remote-gates.jpg` |
| Boom Barriers | `boom-barriers.jpg` |
| Security Sensors | `security-sensors.jpg` |
| Solar Fencing | `solar-fencing.jpg` |
| Motorized Curtains | `motorized-curtains.jpg` |
| Motorized Blinds | `motorized-blinds.jpg` |
| Transparent Elevation Motorized Shutters | `transparent-elevation-motorized-shutters.jpg` |
| P.A. Sound Systems | `pa-sound-systems.jpg` |
| Projectors | `projectors.jpg` |
| Projection Screens | `projection-screens.jpg` |
| LED Display Screens | `led-display-screens.jpg` |
| Podiums with Speakers | `podiums-with-speakers.jpg` |
| Artificial Lawn | `artificial-lawn.jpg` |
| Wooden Flooring | `wooden-flooring.jpg` |
| Swimming Pools | `swimming-pools.jpg` |
| Gym Equipment | `gym-equipment.jpg` |
| Gym Flooring | `gym-flooring.jpg` |
| Running Track EPDM | `running-track-epdm.jpg` |
| Wooden Shuttle Court | `wooden-shuttle-court.jpg` |
| Basketball Court | `basketball-court.jpg` |
| Volleyball Court | `volleyball-court.jpg` |
| Cricket / Volleyball / Football Turf | `multi-sport-turf.jpg` |
| Astro Turf | `astro-turf.jpg` |
| Indoor Games | `indoor-games.jpg` |
| PP Tiles for Sports | `pp-sports-tiles.jpg` |
| Synthetic Paint for Sports Flooring | `synthetic-sports-flooring-paint.jpg` |
| Function Hall Chairs | `function-hall-chairs.jpg` |
| Premium Sofas & Lounge Seating | `premium-sofas-lounge-seating.jpg` |
