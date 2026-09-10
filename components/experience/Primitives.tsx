'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import Image from 'next/image';
import type { ExperienceImage } from '@/lib/experience-content';
const AvailableImages = createContext<string[]>([]);
export function MediaAvailability({sources,children}:{sources:string[];children:ReactNode}){return <AvailableImages.Provider value={sources}>{children}</AvailableImages.Provider>}
export function ImagePlaceholder({image,className='',eager=false}:{image:ExperienceImage;className?:string;eager?:boolean}) {
 const [failed,setFailed]=useState(false); const available=useContext(AvailableImages).includes(image.src);
 return <div className={`media-placeholder ${className}`} style={{aspectRatio:image.ratio}} role={!available || failed ? "img" : undefined} aria-label={!available || failed ? `${image.alt} — image placeholder` : undefined}><div className="placeholder-center" aria-hidden="true"><span className="placeholder-mark">＋</span><span>{image.alt}</span></div><span className="placeholder-caption" aria-hidden="true">ABHEE / IMAGE PLACEHOLDER <span>{image.src}</span></span>{available&&!failed&&<Image fill style={{objectFit:image.fit??'cover'}} src={image.src} alt={image.alt} priority={eager} loading={eager?undefined:'lazy'} decoding="async" sizes="(max-width: 700px) 100vw, 80vw" onError={()=>setFailed(true)}/>}</div>;
}
export function SectionHeading({eyebrow,children,copy}:{eyebrow?:string;children:ReactNode;copy?:string}) {return <div className="section-heading reveal">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h2>{children}</h2>{copy&&<p className="section-copy">{copy}</p>}</div>}
export function CTAButton({children='Book a Site Visit',secondary=false}:{children?:ReactNode;secondary?:boolean}){return <button className={secondary?'text-cta':'cta'} onClick={()=>window.dispatchEvent(new Event('abhee-contact'))}>{children}<span aria-hidden="true">↗</span></button>}
