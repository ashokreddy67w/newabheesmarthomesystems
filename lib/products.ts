export const productFilters = ['All', 'Home Automation', 'Security & Access', 'Audio & Video', 'Community Solutions', 'Sports & Infrastructure', 'Function Hall Solutions'] as const;
export type ProductCategory = Exclude<typeof productFilters[number], 'All'>;
export type Product = {name: string; categories: ProductCategory[]; image: string; alt: string; description: string};
const security: ProductCategory = 'Security & Access';
const automation: ProductCategory = 'Home Automation';
const av: ProductCategory = 'Audio & Video';
const community: ProductCategory = 'Community Solutions';
const sports: ProductCategory = 'Sports & Infrastructure';
const hall: ProductCategory = 'Function Hall Solutions';
const product = (slug: string, name: string, categories: ProductCategory[], description: string, alt: string): Product => ({name, categories, image: `/images/products/${slug}.jpg`, description, alt});

export const products: Product[] = [
 product('home-automation', 'Home Automation', [automation], 'Bring everyday home controls together.', 'Home automation control system'),
 product('digital-door-lock', 'Digital Door Locks', [security], 'Convenient digital access for your entrance.', 'Digital door lock on an entrance door'),
 product('home-theater', 'Home Theater', [av], 'A dedicated cinema experience at home.', 'Home theater screen and seating'),
 product('cctv', 'CCTV', [security, hall], 'Surveillance for homes and shared spaces.', 'CCTV surveillance camera'),
 product('intercom-systems', 'Intercom Systems', [security, hall], 'Simple communication across your property.', 'Intercom communication system'),
 product('video-door-phone', 'Video Door Phones', [security], 'See and speak with visitors at your door.', 'Video door phone monitor and entrance unit'),
 product('access-control', 'Access Control Systems', [security, hall], 'Manage entry to your property.', 'Access control reader at an entrance'),
 product('remote-gates', 'Remote Gates', [security, hall], 'Convenient automated gate access.', 'Remote operated entrance gate'),
 product('boom-barriers', 'Boom Barriers', [security, hall], 'Manage vehicle entry and exit.', 'Vehicle access boom barrier'),
 product('security-sensors', 'Security Sensors', [security], 'Add monitoring to key areas of your home.', 'Home security sensor'),
 product('solar-fencing', 'Solar Fencing', [security, hall], 'Solar-powered perimeter security.', 'Solar fencing along a property boundary'),
 product('motorized-curtains', 'Motorized Curtains', [automation], 'Open and close curtains with ease.', 'Motorized curtains on a residential window'),
 product('motorized-blinds', 'Motorized Blinds', [automation], 'Convenient control of light and privacy.', 'Motorized window blinds'),
 product('transparent-elevation-motorized-shutters', 'Transparent Elevation Motorized Shutters', [automation], 'Motorized transparent shutters for building elevations.', 'Transparent motorized elevation shutters'),
 product('pa-sound-systems', 'P.A. Sound Systems', [av, hall], 'Sound systems for announcements and events.', 'Public address sound system speakers'),
 product('projectors', 'Projectors', [av, hall], 'Large-format visuals for films and presentations.', 'Presentation and home cinema projector'),
 product('projection-screens', 'Projection Screens', [av, hall], 'A dedicated surface for projected visuals.', 'Projection screen for presentations and cinema'),
 product('led-display-screens', 'LED Display Screens', [av, hall], 'Display content across shared and event spaces.', 'LED display screen'),
 product('podiums-with-speakers', 'Podiums with Speakers', [av], 'Presentation podiums with integrated speakers.', 'Presentation podium with speakers'),
 product('artificial-lawn', 'Artificial Lawn', [community], 'Green finishes for landscaped spaces.', 'Artificial lawn in a landscaped area'),
 product('wooden-flooring', 'Wooden Flooring', [community], 'Warm wood finishes for interior spaces.', 'Wooden interior flooring'),
 product('swimming-pools', 'Swimming Pools', [community], 'Pool solutions for villas and communities.', 'Residential community swimming pool'),
 product('gym-equipment', 'Gym Equipment', [community], 'Equip dedicated fitness spaces.', 'Gym fitness equipment'),
 product('gym-flooring', 'Gym Flooring', [community], 'Flooring for workout and fitness areas.', 'Flooring in a gym workout area'),
 product('running-track-epdm', 'Running Track EPDM', [sports], 'EPDM surfacing for running tracks.', 'EPDM running track surface'),
 product('wooden-shuttle-court', 'Wooden Shuttle Court', [sports], 'Wooden court flooring for badminton.', 'Wooden badminton court'),
 product('basketball-court', 'Basketball Court', [sports], 'Dedicated court spaces for basketball.', 'Basketball court surface and markings'),
 product('volleyball-court', 'Volleyball Court', [sports], 'Dedicated court spaces for volleyball.', 'Volleyball court with net'),
 product('multi-sport-turf', 'Cricket / Volleyball / Football Turf', [sports], 'Turf solutions for outdoor sports spaces.', 'Multi-sport turf playing surface'),
 product('astro-turf', 'Astro Turf', [sports], 'Artificial turf for sports and recreation.', 'Astro turf sports surface'),
 product('indoor-games', 'Indoor Games', [sports], 'Create shared spaces for indoor recreation.', 'Indoor games equipment'),
 product('pp-sports-tiles', 'PP Tiles for Sports', [sports], 'Polypropylene tiles for sports surfaces.', 'Interlocking polypropylene sports tiles'),
 product('synthetic-sports-flooring-paint', 'Synthetic Paint for Sports Flooring', [sports], 'Surface finishes for sports flooring.', 'Synthetic painted sports flooring'),
 product('function-hall-chairs', 'Function Hall Chairs', [hall], 'Seating for gatherings and celebrations.', 'Function hall event chairs'),
 product('premium-sofas-lounge-seating', 'Premium Sofas & Lounge Seating', [hall], 'Comfortable seating for event lounge spaces.', 'Premium sofa and event lounge seating'),
];
