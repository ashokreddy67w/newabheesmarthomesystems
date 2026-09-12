'use client';
import {useState} from 'react';
import Image from 'next/image';
import {ImageIcon} from 'lucide-react';
import {products, productFilters, type Product} from '@/lib/products';
import styles from './ProductsPage.module.css';

function ProductImage({product, available}: {product: Product; available: boolean}) {
 const [failed, setFailed] = useState(false);
 return <div className={styles.image}>
  {available && !failed ? <Image src={product.image} alt={product.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 29vw" style={{objectFit:'cover'}} onError={()=>setFailed(true)}/> : <div className={styles.placeholder} role="img" aria-label={`${product.name} — image coming soon`}><ImageIcon size={30} strokeWidth={1} aria-hidden="true"/><span>Image coming soon</span></div>}
 </div>;
}

export default function ProductsPage({availableImages}: {availableImages: string[]}) {
 const [active, setActive] = useState<typeof productFilters[number]>('All');
 const visible = products.filter(product=>active==='All'||product.categories.includes(active));
 return <div className={`abhee-experience ${styles.catalogue}`}>
  <header className={styles.intro}>
   <p className="eyebrow bronze">ABHEE SMART HOME SYSTEMS</p>
   <h1>Our Products</h1>
   <p className={styles.lead}>Thoughtful technology. Exceptional spaces.</p>
   <p className={styles.description}>Explore solutions for gated communities, villas, schools &amp; colleges, and function halls.</p>
  </header>
  <section aria-labelledby="catalogue-heading">
   <div className={styles.heading}><h2 id="catalogue-heading">Explore our collection</h2><p role="status" aria-live="polite" aria-atomic="true">{visible.length} products · {active}</p></div>
   <div className={styles.filters} role="group" aria-label="Filter products by category">{productFilters.map(category=><button key={category} type="button" aria-pressed={active===category} aria-controls="product-grid" onClick={()=>setActive(category)}>{category}</button>)}</div>
   <ul id="product-grid" className={styles.grid} key={active}>
    {visible.map(product=><li key={product.image} className={styles.card}>
     <article>
      <ProductImage product={product} available={availableImages.includes(product.image)}/>
      <div className={styles.copy}><h3>{product.name}</h3><p>{product.description}</p>
       <ul className={styles.points}>{product.points.map(point=><li key={point}>{point}</li>)}</ul>
      </div>
     </article>
    </li>)}
   </ul>
  </section>
 </div>;
}
