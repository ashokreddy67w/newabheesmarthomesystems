import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {business, projects} from '@/lib/experience-content';
import {projectGalleries} from '@/lib/project-galleries';
import styles from './Projects.module.css';
import CinemaPreview from '@/components/experience/CinemaPreview';

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const project=projects.find(item=>item.slug===slug);return {title:project?.title??'Project not found',description:project?.description};}
export default async function ProjectGallery({params}:Props){
 const {slug}=await params;
 const project=projects.find(item=>item.slug===slug);
 if(!project||!projectGalleries[slug]) notFound();
 const scenes=projectGalleries[slug];
 const enquiry=`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi ABHEE, I would like to discuss ${project.title.toLowerCase()} ideas for my property.`)}`;
 return <div className={styles.page}>
  <Link className={styles.back} href="/#projects">← All project collections</Link>
  <header className={styles.heading}><p className={styles.eyebrow}>{project.category}</p><h1>{project.title}</h1><p>{project.description}</p><a className={styles.cta} href={enquiry} target="_blank" rel="noopener noreferrer">Plan a similar space ↗</a></header>
  {slug==='private-home-cinema'?<div style={{aspectRatio:'3/4',maxWidth:720,margin:'0 auto'}}><CinemaPreview eager/></div>:project.image.src?<div className={styles.hero} style={slug==='connected-villa'?{aspectRatio:'4/3'}:undefined}><Image src={project.image.src} alt={project.image.alt} fill priority sizes="(max-width: 1280px) 100vw, 1200px"/></div>:null}
  {scenes.length>0&&<section className={styles.collection} aria-labelledby="collection-title"><div className={styles.intro}><div><p className={styles.eyebrow}>EXPLORE THE POSSIBILITIES</p><h2 id="collection-title">More spaces. More inspiration.</h2></div><p>{slug==='intelligent-home-security'?'AI-generated imagery for design inspiration. These installations are not presented as completed ABHEE projects.':'Real photography for design inspiration. These spaces and installations are not presented as completed ABHEE projects.'}</p></div>
   <div className={styles.grid}>{scenes.map((scene,index)=><article className={styles.card} key={scene.title}><a className={styles.photo} href={scene.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${scene.title} image in full size`}><Image src={scene.image} alt={`${scene.title}: ${scene.setting.toLowerCase()}`} fill sizes="(max-width: 700px) 100vw, 50vw"/></a><div className={styles.copy}>{scene.source?<a className={styles.credit} href={scene.source} target="_blank" rel="noopener noreferrer">Photo: {scene.credit} / Pexels ↗</a>:<p className={styles.credit}>{scene.credit}</p>}<p className={styles.setting}>{String(index+1).padStart(2,'0')} / {scene.setting}</p><h3>{scene.title}</h3><p>{scene.description}</p><ul>{scene.features.map(feature=><li key={feature}>{feature}</li>)}</ul><a className={styles.textLink} href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi ABHEE, I am interested in the ${scene.title} concept from your ${project.title} collection. Please help me plan something similar.`)}`} target="_blank" rel="noopener noreferrer">Discuss this idea ↗</a></div></article>)}</div>
  </section>}
  <nav className={styles.related} aria-label="Other project collections"><h2>Explore more collections</h2><div>{projects.filter(item=>item.slug!==slug).map(item=><Link key={item.slug} href={`/projects/${item.slug}`}>{item.title}<span aria-hidden="true">↗</span></Link>)}</div></nav>
 </div>;
}
