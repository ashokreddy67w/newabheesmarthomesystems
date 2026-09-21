'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
import {referenceSolutions,projects} from '@/lib/experience-content';
import {ImagePlaceholder} from './Primitives';
import {Home, Wrench, Network, Cpu, Headphones, ShieldCheck} from 'lucide-react';
function HomeHero(){return <section className="home-hero" id="hero" aria-labelledby="home-hero-title">
 <div className="home-hero-media"><ImagePlaceholder image={projects[1].image}/></div>
 <div className="home-hero-content">
  <p className="home-hero-eyebrow">A smarter way to feel at home</p>
  <h1 id="home-hero-title">Make your home smarter<br/><span>and your life easier.</span></h1>
  <p className="home-hero-description">Lighting, comfort, security and entertainment working together around the way you live.</p>
 </div>
 </section>}

function ReferenceSolutions(){
 const track=useRef<HTMLDivElement>(null);
 const [reducedMotion,setReducedMotion]=useState(false);
 const [paused,setPaused]=useState(false);
 const resumeAt=useRef(0);
 const delayAutoplay=()=>{resumeAt.current=Date.now()+5000;};
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>setReducedMotion(preference.matches);
  update(); preference.addEventListener('change',update);
  return ()=>preference.removeEventListener('change',update);
 },[]);
 const advance=useCallback((direction:number)=>{
  const rail=track.current; if(!rail) return;
  const card=rail.firstElementChild as HTMLElement|null; if(!card) return;
  const step=card.getBoundingClientRect().width+parseFloat(getComputedStyle(rail).columnGap);
  const end=rail.scrollWidth-rail.clientWidth;
  const next=direction>0 && rail.scrollLeft>=end-2 ? 0 : direction<0 && rail.scrollLeft<=2 ? end : Math.min(end,Math.max(0,rail.scrollLeft+direction*step));
  rail.scrollTo({left:next,behavior:reducedMotion?'instant':'smooth'});
 },[reducedMotion]);
 useEffect(()=>{
  if(paused||reducedMotion) return;
  const timer=window.setInterval(()=>{if(!document.hidden && Date.now()>=resumeAt.current) advance(1);},3500);
  return ()=>window.clearInterval(timer);
 },[paused,reducedMotion,advance]);
 return <section className="reference-solutions" id="solutions" aria-labelledby="reference-solutions-title">
 <h2 id="reference-solutions-title">Services</h2>
 <p className="reference-solutions-subtitle">Smart home systems designed around the way you live.</p>
 <div className="service-carousel" role="region" aria-roledescription="carousel" aria-label="Smart home services">
 <div ref={track} className="reference-solutions-cards" tabIndex={0} aria-label="Swipe or scroll to explore services" onPointerDown={delayAutoplay} onPointerMove={event=>{if(event.buttons) delayAutoplay();}} onPointerUp={delayAutoplay} onPointerCancel={delayAutoplay} onWheel={delayAutoplay} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();delayAutoplay();advance(event.key==='ArrowRight'?1:-1);}}}>{referenceSolutions.map((solution,index)=><article className="reference-solution-card" key={solution.image.src}>
  <div className="reference-solution-image"><ImagePlaceholder image={solution.image}/></div>
  <div className="reference-solution-copy">
   <p className="reference-solution-number">{String(index+1).padStart(2,'0')}.</p>
   <h3>{solution.title}</h3>
   <p className="reference-solution-description">{solution.description}</p>
  </div>
 </article>)}</div>
 </div>
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

const faqs = [
 {question:'What is a smart home system?',answer:'A smart home connects everyday features such as lighting, curtains, air conditioning and security so they can work together. You can manage compatible devices through switches, a control panel or your phone, and set routines for mornings, evenings or leaving home.'},
 {question:'What can ABHEE automate in my home?',answer:'ABHEE offers solutions for lighting, curtains and blinds, climate control, gates, smart locks, video door phones, CCTV and home entertainment. We help you choose what suits your home, daily routines and budget.'},
 {question:'Can I add automation to an existing home?',answer:'Yes. Many existing flats and independent homes can use retrofit or wireless solutions without extensive rewiring. The right approach depends on your wiring, available space and devices. A site assessment helps identify any changes needed before installation.'},
 {question:'Can I control my home from my smartphone?',answer:'Compatible systems let you check and control connected devices through a smartphone app while you are away. Remote access needs a working internet connection at home and on your phone. The available controls depend on the system you choose.'},
 {question:'Can security and home automation work together?',answer:'Compatible cameras, door phones, locks and sensors can be connected with your automation setup. For example, an entry sensor may trigger a light or send an alert. We review compatibility and access settings when planning your system.'},
 {question:'Will my existing switches and devices need replacement?',answer:'Not always. Some installations can retain existing switches and appliances with compatible control modules. Others may need new switches or devices. We check your current setup and explain what can be reused before recommending replacements.'},
 {question:'How does installation and support work?',answer:'The process starts with a discussion of your needs and a site assessment, followed by a proposed setup and installation plan. Ask for the schedule, device warranties and support terms in your quotation. Handover should include a walkthrough so your household knows how to use the system.'},
 {question:'How much does a smart home system cost?',answer:'Pricing depends on the size of your home, the rooms and features you want to automate, device choices and any wiring work. A few smart lights will cost less than a whole-home setup. Contact ABHEE for a quotation based on your requirements and budget.'},
 {question:'Can I expand the system later?',answer:'Many systems can be expanded in stages, starting with one room or a few functions. Tell us about future plans early so we can consider compatible devices, wiring and system capacity. New additions depend on the capabilities of your chosen setup.'},
 {question:'Is a smart home easy for everyone in the family to use?',answer:'A well-planned setup keeps everyday actions simple, with clearly labelled controls and routines such as “Good night” or “Away”. Depending on the installation, familiar wall switches can remain available so family members do not need to use a phone for every task.'},
];

function FAQSection(){
 const [openIndex,setOpenIndex]=useState<number|null>(null);
 return <section className="faq-section" id="faq" aria-labelledby="faq-title">
  <h2 id="faq-title">Frequently asked questions</h2>
  <p className="faq-intro">A little clarity before you make your home smarter.</p>
  <div className="faq-list">{faqs.map((faq,index)=>{
   const open=openIndex===index;
   return <article className="faq-item" key={faq.question}>
    <h3><button className="faq-question" id={`faq-question-${index}`} aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={()=>setOpenIndex(open?null:index)}>{faq.question}<span className="faq-toggle" aria-hidden="true">{open?'−':'+'}</span></button></h3>
    <div className={`faq-answer${open?' is-open':''}`} id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} aria-hidden={!open}><div className="faq-answer-inner"><p>{faq.answer}</p></div></div>
   </article>;
  })}</div>
 </section>;
}

export default function Homepage(){return <div className="abhee-experience hero-only"><HomeHero/><ReferenceSolutions/><ProjectsSection/><WhyAbheeSection/><FAQSection/></div>}
