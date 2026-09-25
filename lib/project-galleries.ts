export type ProjectScene = {title:string; setting:string; image:string; description:string; features:string[]; credit:string; source?:string};
export const projectGalleries: Record<string, ProjectScene[]> = {
 "connected-villa": [
  {
   "title": "Brick-Facade Residence",
   "setting": "Contemporary residential exterior",
   "image": "/images/projects/connected-villa-brick-residence.png",
   "description": "A contemporary residence with red brick accents, glass balconies, vertical screens and a timber entrance gate.",
   "features": [
    "Brick facade",
    "Glass balconies",
    "Rooftop terrace"
   ],
   "credit": "User-supplied photograph"
  },
  {
   "title": "Terraced Residence",
   "setting": "Contemporary residential exterior",
   "image": "/images/projects/connected-villa-terraced-residence-replacement.png",
   "description": "A contemporary residence with pale stone cladding, glass-fronted balconies and tree-lined gated entrances.",
   "features": [
    "Stone facade",
    "Glass balconies",
    "Landscaped entrance"
   ],
   "credit": "User-supplied image"
  },
  {
   "title": "Glass Balcony Villa",
   "setting": "Contemporary villa exterior",
   "image": "/images/projects/connected-villa-glass-balconies.png",
   "description": "A contemporary three-level villa with glass balconies, timber soffits, cascading greenery and a rooftop spiral staircase.",
   "features": [
    "Glass balconies",
    "Landscaped entrance",
    "Rooftop terrace"
   ],
   "credit": "User-supplied photographs · AI-edited composite"
  },
  {
   "title": "Connected Villa",
   "setting": "Featured residence",
   "image": "/images/projects/connected-villa-supplied.png",
   "description": "A contemporary residence with a timber-screen facade, black entrance gates and perimeter security fencing.",
   "features": [
    "Villa exterior",
    "Gated entrance",
    "Perimeter fencing"
   ],
   "credit": "Supplied photograph \u00b7 cables removed and perspective adjusted"
  },

 ],
 "luxury-smart-residence": [
 {
  "title": "Bright Open Living",
  "setting": "Spacious apartment",
  "image": "/images/projects/photo-5998120.jpg",
  "description": "Consider coordinated curtains, light levels and entertainment in an open living space.",
  "features": [
   "Window coverings",
   "Ambient lighting",
   "Entertainment"
  ],
  "credit": "Max Vakhtbovych",
  "source": "https://www.pexels.com/photo/stylish-living-room-in-light-apartment-5998120/"
 }
],

 "intelligent-home-security": [
  {
    "title": "Entrance CCTV",
    "setting": "Residential entrance monitoring",
    "image": "/images/projects/security-entrance-cctv.png",
    "description": "A discreet porch-mounted camera illustrates monitoring of a home's gate and driveway.",
    "features": [
      "Entrance monitoring",
      "Driveway coverage",
      "Discreet installation"
    ],
    "credit": "AI-generated illustration"
  },
  {
    "title": "Video Door Intercom",
    "setting": "Visitor communication",
    "image": "/images/projects/security-video-intercom.png",
    "description": "A gate-mounted video intercom illustrates a convenient visitor communication point.",
    "features": [
      "Video intercom",
      "Visitor communication",
      "Gate access"
    ],
    "credit": "AI-generated illustration"
  },
  {
    "title": "Smart Door Lock",
    "setting": "Keyless home entrance",
    "image": "/images/projects/security-smart-door-lock.png",
    "description": "A digital lock illustrates fingerprint and keypad access at a timber front door.",
    "features": [
      "Fingerprint access",
      "PIN entry",
      "Keyless convenience"
    ],
    "credit": "AI-generated illustration"
  },
  {
    "title": "Perimeter CCTV",
    "setting": "Side passage monitoring",
    "image": "/images/projects/security-perimeter-cctv.png",
    "description": "An outdoor camera illustrates coverage along a landscaped side passage and garden gate.",
    "features": [
      "Perimeter monitoring",
      "Side gate coverage",
      "Outdoor camera"
    ],
    "credit": "AI-generated illustration"
  }
],
 "private-home-cinema": []
};
