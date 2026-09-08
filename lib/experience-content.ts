/** Homepage imagery is generated; prompts are documented in public/images/GENERATION.md.
 * All paths are relative to public. Missing files render neutral placeholders.
 */
export type ExperienceImage = { src: string; alt: string; ratio: string };
const media = (name: string, alt: string, ratio = '16/10'): ExperienceImage => ({src: `/images/${name}.jpg`, alt, ratio});
export const images = {
 heroImages: [media('hero-02','Automated sliding gate at a villa entrance','318/271'),media('solution-automation','Living room with motorized curtains and a wall control panel','318/270'),media('solution-climate','Bedroom with integrated lighting, blinds and climate control','318/271'),media('solution-entertainment','Home entertainment room with television and speakers','318/270')],
 idea: media('experience','An intelligently connected home','21/9'), connected: media('connected-home','Architectural view of a connected home','16/9'),
 lightingImages: ['morning','day','evening','movie-night'].map(s=>media(`lighting-${s}`,`Lighting — ${s}`)),
 securityImages: ['smart-lock','camera','video-door-phone','gate'].map(s=>media(`security-${s}`,`Security — ${s}`,'4/5')),
 climateImages: ['cool','comfort','relax','sleep'].map(s=>media(`climate-${s}`,`Climate — ${s}`)),
 entertainmentImages: ['curtains','lighting','projector','screen','audio'].map(s=>media(`entertainment-${s}`,`Home cinema — ${s}`)),
 projectImages: [1,2].map(n=>[media(`project-0${n}-01`,'Project overview','16/9'),media(`project-0${n}-02`,'Project interior detail','4/3'),media(`project-0${n}-03`,'Project integration detail','4/3')]),
 galleryImages: ['Interiors','Lighting','Security','Entertainment','Automation'].map((s,i)=>({...media(`gallery-0${i+1}`,`${s} gallery photography`,i%2?'4/5':'4/3'),category:s})),
 final: media('final-home','Premium home at dusk','16/9'),
};
export const solutions = [
 {title:'Security & access',description:'Video gates, smart locks and motion alerts, monitored and reachable from anywhere.',image:media('security-access','Security and access')},
 {title:'Home automation',description:'Lighting, curtains and climate on schedules and scenes, tuned to how each room is actually used.',image:media('home-automation','Home automation')},
 {title:'Climate & lighting',description:'Sensor-driven comfort — lights, AC and blinds adjusting to daylight, weather and occupancy.',image:media('climate-lighting','Climate and lighting')},
 {title:'Entertainment & AV',description:'Whole-home audio and screens, grouped by zone, controlled by voice or a single tap.',image:media('entertainment-av','Entertainment and AV')},
];
export const journal = ['What is a smart home?','How smart lighting changes a home.','Planning automation during construction.','What to consider before installing a home theatre.'].map((title,i)=>({title,image:media(`journal-0${i+1}`,title,'4/3')}));
// Populate only with verified information. Empty lists never imply partnerships or locations.
export const business = { email: 'info.abheesmarthome@gmail.com', whatsapp: '', locations: [] as {city:string;address:string}[], brands: [] as {name:string;category:string}[], social: [] as {name:string;url:string}[] };

export const referenceSolutions = [
 {title:'Security & Access',description:'Smart locks, automated gates, video door phones and connected security designed to keep your home protected and accessible.',image:media('solution-security','Security and access')},
 {title:'Home Automation',description:'Lighting, curtains, climate and everyday routines brought together into one intelligent system.',image:media('solution-automation','Home automation')},
 {title:'Climate & Lighting',description:'Create the right atmosphere and comfort with intelligent lighting, climate control and motorized blinds.',image:media('solution-climate','Climate and lighting')},
 {title:'Entertainment & AV',description:'Home theatre, audio, screens and entertainment controlled effortlessly across the spaces that matter.',image:media('solution-entertainment','Entertainment and AV')},
];

export const projects = [
 {category:'RESIDENTIAL · SMART HOME',title:'Luxury Smart Residence',description:'A complete smart-home experience integrating lighting, security, climate, entertainment and access into one connected system.',image:media('projects/project-01','Luxury Smart Residence','16/9')},
 {category:'RESIDENTIAL · AUTOMATION',title:'Connected Villa',description:'Whole-home automation designed around everyday routines, intelligent lighting, climate control and seamless access.',image:media('projects/project-02','Connected Villa','16/9')},
 {category:'RESIDENTIAL · SECURITY',title:'Intelligent Home Security',description:'Integrated access, smart locks, video door phones and surveillance designed for secure and effortless living.',image:media('projects/project-03','Intelligent Home Security','16/9')},
 {category:'HOME THEATRE · ENTERTAINMENT',title:'Private Home Cinema',description:'A dedicated entertainment environment combining projection, audio, lighting and motorized curtains.',image:media('projects/project-04','Private Home Cinema','16/9')},
];
