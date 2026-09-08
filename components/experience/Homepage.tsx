'use client';
import {images,referenceSolutions,projects} from '@/lib/experience-content';
import {ImagePlaceholder} from './Primitives';
import {Home, Wrench, Network, Cpu, Headphones, ShieldCheck} from 'lucide-react';
const heroContent = [
 {image:images.heroImages[0],category:'SECURITY & ACCESS',title:'Security that works quietly in the background.',description:'Smart access, gates and connected security for your home.'},
 {image:images.heroImages[1],category:'HOME AUTOMATION',title:'A home that moves with your day.',description:'Lighting, curtains and climate on schedules and scenes, tuned to how each room is actually used.'},
 {image:images.heroImages[2],category:'CLIMATE & LIGHTING',title:'Comfort that feels second nature.',description:'Sensor-driven comfort — lights, AC and blinds adjusting to daylight, weather and occupancy.'},
 {image:images.heroImages[3],category:'ENTERTAINMENT & AV',title:'Every room. In perfect harmony.',description:'Whole-home audio and screens, grouped by zone, controlled by voice or a single tap.'},
];
// Reference-locked hero: keep copy, composition, and styling independent of the experience below.
function Hero(){return <section className="locked-hero" id="hero" aria-label="ABHEE smart home systems">
<div className="locked-hero-copy">
<p className="locked-eyebrow">Smart home systems, built for Indian homes</p>
<h1>A home that responds<br/><span>before you ask.</span></h1>
</div>
<div className="locked-composition">{heroContent.map((item,index)=><article className={`locked-photo locked-photo-${index+1}`} key={item.image.src}>
<div className="locked-photo-media"><ImagePlaceholder image={item.image} eager/></div>
<div className="locked-item-content">
<p className="locked-item-category">{item.category}</p>
<h2>{item.title}</h2>
<p className="locked-item-description">{item.description}</p>
</div>
</article>)}</div>
</section>}

function ReferenceSolutions(){return <section className="reference-solutions" id="solutions" aria-labelledby="reference-solutions-title">
 <h2 id="reference-solutions-title">Services</h2>
 <p className="reference-solutions-subtitle">Smart home systems designed around the way you live.</p>
 <div className="reference-solutions-cards">{referenceSolutions.map((solution,index)=><article className="reference-solution-card" key={solution.image.src}>
  <div className="reference-solution-image"><ImagePlaceholder image={solution.image}/></div>
  <div className="reference-solution-copy">
   <p className="reference-solution-number">{String(index+1).padStart(2,'0')}.</p>
   <h3>{solution.title}</h3>
   <p className="reference-solution-description">{solution.description}</p>
  </div>
 </article>)}</div>
 </section>}

function ProjectsSection(){return <section className="projects-reference" id="projects" aria-labelledby="projects-reference-title">
 <div className="projects-reference-heading"><h2 id="projects-reference-title">Projects</h2><p>Illustrative smart-home possibilities.</p></div>
 <div className="projects-reference-grid">{projects.map(project=><article className="project-reference-item" key={project.image.src}>
  <div className="project-reference-image"><ImagePlaceholder image={project.image}/></div>
  <div className="project-reference-copy"><p className="project-reference-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div>
 </article>)}</div>
 </section>}

const whyValues = [
 {title:'Designed Around You',description:'Solutions based on your lifestyle and property.',icon:Home},
 {title:'Professional Installation',description:'Skilled team, clean execution, no hassle.',icon:Wrench},
 {title:'Integrated Solutions',description:'All systems, one platform, complete control.',icon:Network},
 {title:'Right Technology',description:'Trusted brands, future-ready solutions.',icon:Cpu},
 {title:'Local Support',description:'Quick response, long-term relationship.',icon:Headphones},
 {title:'Built for the Long Term',description:'Reliable, scalable and warranty-backed.',icon:ShieldCheck},
];

function WhyAbheeSection(){return <section className="why-reference" id="why-abhee" aria-labelledby="why-reference-title">
 <div className="why-reference-inner">
  <p className="why-reference-eyebrow">WHY ABHEE</p>
  <h2 id="why-reference-title">Why ABHEE</h2>
  <div className="why-reference-grid">{whyValues.map(({title,description,icon:Icon})=><article className="why-reference-item" key={title}>
   <span className="why-reference-icon"><Icon size={22} strokeWidth={1.55}/></span>
   <h3>{title}</h3>
   <p>{description}</p>
  </article>)}</div>
 </div>
 </section>}

export default function Homepage(){return <div className="abhee-experience hero-only"><Hero/><ReferenceSolutions/><ProjectsSection/><WhyAbheeSection/></div>}
