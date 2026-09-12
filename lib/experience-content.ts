    /** Homepage imagery is centralized here so real ABHEE photography can be
     * dropped in later without touching any layout code. All paths are relative
     * to /public. Missing files render neutral placeholders (see Primitives.tsx).
     */
    export type ExperienceImage = { src: string; alt: string; ratio: string; fit?: 'cover' | 'contain' };
    const media = (name: string, alt: string, ratio = '16/10'): ExperienceImage => ({src: `/images/${name}.jpg`, alt, ratio});

    // Shared across the hero, Services and Products so image updates stay consistent.
    const homeAutomationImage: ExperienceImage = {
    ...media('services/home-automation-new-20260910','ABHEE smart home automation poster with connected home and mobile controls'),
    fit:'contain',
    };

    export const images = {
    heroImages: [
    media('hero-02','Automated sliding gate at a villa entrance','318/271'),
    {...homeAutomationImage,ratio:'318/270'},
    media('projects/project-04','Private home theater with a projection screen, cinema seating and acoustic wall panels','318/271'),
    ],
    };

    export const referenceSolutions = [
    {title:'Gate Automation',description:'Motorized sliding and swing gates with convenient remote access for your home entrance.',image:media('services/gate-automation-new-20260910','Installed sliding gate motor, rack, track and safety sensor')},
    {title:'Home Automation',description:'Bring lighting, curtains, climate and everyday routines together with simple, connected control.',image:homeAutomationImage},
    {title:'Home Theater',description:'Enjoy a dedicated cinema experience with projection, surround sound, acoustic treatment and coordinated lighting.',image:media('services/home-theater-new-20260910','Home theater with ceiling-mounted projector, screen, speakers and recliner seating')},
    {title:'VDP · Video Door Phone',description:'See and speak with visitors at your entrance, and manage door access from an indoor video monitor.',image:media('services/video-door-phone-new-20260910','Wall-mounted video door phone showing a villa entrance')},
    {title:'Climate & Lighting',description:'Intelligent lighting, AC and motorized blinds that create the right comfort and atmosphere throughout the day.',image:media('services/climate-lighting-new-20260910','Smart thermostat mounted on a living room wall')},
    {title:'CCTV Camera',description:'Round-the-clock CCTV monitoring with remote viewing, so you can check in on your property from anywhere.',image:media('services/cctv-camera-new-20260910','White turret CCTV camera mounted under a villa eave')},
    {title:'Solar Fencing',description:'Solar-powered electric perimeter fencing that deters intrusions and keeps your property boundary secure, day and night.',image:media('services/solar-fencing-new-20260910','Solar-powered electric security fence along a boundary wall')},
    {title:'Swimming Pool',description:'Automated pool lighting, pumps and filtration, scheduled and controlled from a single app.',image:media('services/swimming-pool-new-20260910','Private residential backyard swimming pool')},
    {title:'Children’s Play Area',description:'Safer outdoor play with connected lighting and camera monitoring for peace of mind.',image:media('services/childrens-play-area-new-20260910','Landscaped residential playground with slide and swings')},
    {title:'Smart Door Lock',description:'Keyless entry with PIN, card, fingerprint or facial recognition — no more fumbling for keys.',image:media('services/smart-door-lock-new-20260910','Matte black smart door lock with keypad and handle on a teak door')},
    {title:'Security Sensor',description:'Motion and entry sensors that detect activity the moment it happens and alert you instantly.',image:media('services/security-sensor-new-20260910','White PIR motion security sensor mounted in a room corner')},
    ];

    export const projects = [
    {category:'RESIDENTIAL · SMART HOME',title:'Luxury Smart Residence',description:'A complete smart-home experience integrating lighting, security, climate, entertainment and access.',image:media('projects/project-01','Residence living room with integrated lighting, curtains and a television','16/9')},
    {category:'RESIDENTIAL · AUTOMATION',title:'Connected Villa',description:'Whole-home automation designed around everyday routines, intelligent lighting, climate control and seamless access.',image:media('projects/project-02','Contemporary two-storey villa with illuminated entrance and landscaped garden','16/9')},
    {category:'RESIDENTIAL · SECURITY',title:'Intelligent Home Security',description:'Integrated access, smart locks, video door phones and surveillance for secure and effortless living.',image:media('projects/project-03','Villa entrance with a security camera, gate and video intercom','16/9')},
    {category:'HOME THEATRE · ENTERTAINMENT',title:'Private Home Cinema',description:'A dedicated entertainment environment combining projection, audio, lighting and motorized curtains.',image:media('projects/project-04','Private cinema with a projection screen, two rows of seats and acoustic wall panels','16/9')},
    ];

    export const footerColumns = {
    category:['Smart Products','Digital Safe','Door Locks and Security','Padlocks'],
    info:['About Us','Contact Us','FAQ’s','News','Book Demo','Stories'],
    support:['Returns & Exchange','Shipping','Installation','Terms of Use'],
    };

    // Populate only with verified information. Empty lists never imply partnerships or locations.
    export const business = { email: 'info.abheesmarthome@gmail.com', whatsapp: '919248123456', social: [{name:'Instagram',url:'https://www.instagram.com/abhee_smarthome_systems/'},{name:'YouTube',url:'https://www.youtube.com/@abheesmarthomesystems'},{name:'Facebook',url:'https://www.facebook.com/share/19d2sT5V8r/'}] as {name:string;url:string}[] };

    // Illustrative product catalog — grouped into four broad product categories. Populate with verified SKUs, specs and brand names
    // before publishing; until then these are representative smart-home product
    // types, not a live catalog.
    export const productCategories = [
    {
    key:'security-access',title:'Security & Access',
    description:'Smart locks, automated gates, video door phones and connected security designed to keep your home protected and accessible.',
    image:media('solution-security','Entrance with a smart door lock and video doorbell'),
    products:[
    {name:'Smart Video Door Phone',description:'See, hear and speak with visitors from anywhere, with a recorded visitor log.'},
    {name:'Motorized Gate & Boom Barrier',description:'Automated entry gates and barriers with remote, app and number-plate based access.'},
    {name:'Smart Door Lock',description:'Keyless entry with PIN, card, fingerprint or app-based unlocking.'},
    {name:'Connected CCTV & Alarms',description:'Continuous monitoring with motion and perimeter alerts sent straight to your phone.'},
    ],
    },
    {
    key:'home-automation',title:'Home Automation',
    description:'Lighting, curtains, climate and everyday routines brought together into one intelligent system.',
    image:homeAutomationImage,
    products:[
    {name:'Motorized Curtains & Blinds',description:'Scheduled or scene-based curtain and blind control across every room.'},
    {name:'Scene Control Panel',description:'A single wall panel to trigger lighting, climate and AV scenes at a touch.'},
    {name:'Whole-Home Automation Hub',description:'The central controller that ties lighting, climate, security and AV into one system.'},
    {name:'Voice & App Control',description:'Control every connected system from a phone, tablet or voice assistant.'},
    ],
    },
    {
    key:'climate-lighting',title:'Climate & Lighting',
    description:'Create the right atmosphere and comfort with intelligent lighting, climate control and motorized blinds.',
    image:media('solution-climate','Bedroom with integrated AC vents, window blinds and warm cove lighting'),
    products:[
    {name:'Smart Lighting System',description:'Tunable, dimmable lighting scenes tuned to daylight, mood and time of day.'},
    {name:'Climate & AC Control',description:'Zone-by-zone temperature scheduling that adapts to occupancy and weather.'},
    {name:'Occupancy & Daylight Sensors',description:'Rooms that respond automatically as people and daylight move through them.'},
    {name:'Motorized Blinds',description:'Light and privacy control that adjusts itself through the day.'},
    ],
    },
    {
    key:'entertainment-av',title:'Entertainment & AV',
    description:'Home theatre, audio, screens and entertainment controlled effortlessly across the spaces that matter.',
    image:media('solution-entertainment','Home entertainment system with a large television and surround speakers'),
    products:[
    {name:'Whole-Home Audio',description:'Zoned, multi-room sound with independent control in every space.'},
    {name:'Home Theatre Systems',description:'Projection, screen, seating and acoustics tuned for a dedicated cinema room.'},
    {name:'Multi-Room Video Distribution',description:'One source, every screen — distributed AV without a tangle of cables.'},    ],
    },
    ];
