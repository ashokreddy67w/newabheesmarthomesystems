import type {Metadata} from 'next';
import {existsSync} from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {business} from '@/lib/experience-content';
import {products, productTypes, productTypeImages, productTypeGalleries} from '@/lib/products';
import styles from './ProductDetail.module.css';

type Props = {params: Promise<{slug: string}>};

const doorLockModels = [
 {brand:'Yale',name:'YDME 200 NxT',image:'yale-ydme-200-nxt',url:'https://www.yalehome.com/in/en/products/smart-products/smart-locks/non-connected/ydme-200-nxt'},
 ...[
  ['Fingerprint Smart Door Lock','fingerprint-smart-door-lock'],
  ['Face Recognition Smart Door Lock','face-recognition-smart-door-lock'],
  ['Face + Fingerprint Smart Door Lock','face-fingerprint-smart-door-lock'],
  ['Smart Door Lock','smart-door-lock'],
  ['Smart Hotel Lock','smart-hotel-lock'],
  ['Core Smart Door Lock','core-smart-door-lock'],
 ].map(([name,slug])=>({brand:'Smart Liv',name,image:`smartliv-${slug}`,url:`https://smartliv.io/products/${slug}`})),
];

export function generateStaticParams() {
 return products.map(({slug})=>({slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
 const {slug}=await params;
 const product=products.find(item=>item.slug===slug);
 return {title:product?.name ?? 'Product',description:product?.description};
}

export default async function ProductDetail({params}: Props) {
 const {slug}=await params;
 const product=products.find(item=>item.slug===slug);
 if(!product) notFound();
 const types=productTypes[slug] ?? [];
 const hasImage=existsSync(path.join(process.cwd(),'public',product.image));
 const enquiry=`Hi ABHEE, I would like to know more about ${product.name} and the available types.`;

 return <div className={styles.page}>
  <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/products">Products</Link><span aria-hidden="true">/</span><span>{product.name}</span></nav>
  <section className={styles.hero} aria-labelledby="product-title">
   <div className={styles.intro}>
    <p className={styles.category}>{product.categories.join(' · ')}</p>
    <h1 id="product-title">{product.name}</h1>
    <p className={styles.description}>{product.description}</p>
    <a className={styles.enquire} href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(enquiry)}`} target="_blank" rel="noopener noreferrer">Ask about available options <span aria-hidden="true">↗</span></a>
   </div>
   <div className={styles.image}>{hasImage?<Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 100vw, 50vw" style={{objectFit:'cover'}} priority/>:<span>Image coming soon</span>}</div>
  </section>
  <section className={styles.types} aria-labelledby="types-title">
   {slug==='digital-door-lock'?<>
    <div className={styles.sectionHeading}><p className={styles.category}>EXPLORE YOUR OPTIONS</p><h2 id="types-title">Digital door lock brands & models</h2><p>Explore models by brand. Contact ABHEE for current availability and the right fit for your door.</p></div>
    <ul className={styles.typeGrid}>{doorLockModels.map(model=><li key={model.image}>
     <div className={`${styles.typeImage} ${styles.lockImage}`}><Image src={`/images/product-types/digital-door-lock/${model.image}.webp`} alt={`${model.brand} ${model.name}`} fill sizes="(max-width: 550px) 100vw, (max-width: 800px) 50vw, 33vw" style={{objectFit:'contain',padding:'18px'}}/></div>
     <div className={styles.typeCopy}><p className={styles.category}>{model.brand}</p><h3>{model.name}</h3><a className={styles.back} href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi ABHEE, I would like to enquire about the ${model.brand} ${model.name}.`)}`} target="_blank" rel="noopener noreferrer">Enquire about this model ↗</a><a className={styles.modelSource} href={model.url} target="_blank" rel="noopener noreferrer">Product details ↗</a></div>
    </li>)}</ul>
    <div className={styles.details}><h3>More models</h3><p className={styles.modelNote}>Ask us about Yale YDME 100 BM, Godrej Advantis IoT 9 and Godrej Neo Pro View.</p><a className={styles.back} href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi ABHEE, please share photos and availability for Yale YDME 100 BM and Godrej digital door locks.')}`} target="_blank" rel="noopener noreferrer">Request model photos ↗</a></div>
   </>:<>
   <div className={styles.sectionHeading}><p className={styles.category}>EXPLORE YOUR OPTIONS</p><h2 id="types-title">Common types of {product.name.toLowerCase()}</h2><p>These are general options to help you explore. Ask us which models and configurations are available for your project.</p></div>
   <ul className={styles.typeGrid}>{types.map((type,index)=>{
    const typeSlug=type.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    const typeImage=productTypeImages[slug]?.[type] ?? `/images/product-types/${slug}/${typeSlug}.jpg`;
    const imageAvailable=existsSync(path.join(process.cwd(),'public',typeImage));
    const gallery=productTypeGalleries[slug]?.[type];
    return <li key={type} className={gallery?styles.galleryCard:undefined}>
     {gallery?<div className={styles.galleryImages}>{gallery.map((src,imageIndex)=><div className={styles.typeImage} key={src}><Image src={src} alt={`${type}, view ${imageIndex+1}`} fill sizes="(max-width: 550px) 100vw, 33vw" style={{objectFit:'cover'}}/></div>)}</div>:<div className={styles.typeImage}>{imageAvailable?<Image src={typeImage} alt={type} fill sizes="(max-width: 550px) 100vw, (max-width: 800px) 50vw, 33vw" style={{objectFit:slug==='remote-gates'&&type==='Swing gate motors'?'contain':'cover'}}/>:<span>Image coming soon</span>}</div>}
     <div className={styles.typeCopy}><span className={styles.typeNumber}>{String(index+1).padStart(2,'0')}</span><h3>{type}</h3></div>
    </li>;
   })}</ul>
   </>}
  </section>
  <section className={styles.details} aria-labelledby="details-title"><h2 id="details-title">What to consider</h2><ul>{product.points.map(point=><li key={point}>{point}</li>)}</ul></section>
  <Link className={styles.back} href="/products">← Back to all products</Link>
 </div>;
}
