import Image from 'next/image';
import styles from './CinemaPreview.module.css';

export default function CinemaPreview({sizes='(max-width: 700px) 100vw, 720px',eager=false}:{sizes?:string;eager?:boolean}){
 return <div className={styles.preview}>
  <div className={styles.stage}>
   <Image src="/images/projects/home-theater-supplied.webp" alt="Home theatre with recliners, ceiling projector, surround speakers and illuminated acoustic walls" width={1200} height={1600} sizes={sizes} priority={eager}/>
   <div className={styles.screen}><Image src="/images/projects/cinema-ocean-scene.webp" alt="Ocean sunset scene projected on the cinema screen" fill sizes="(max-width: 700px) 25vw, 180px"/></div>
  </div>
 </div>;
}
