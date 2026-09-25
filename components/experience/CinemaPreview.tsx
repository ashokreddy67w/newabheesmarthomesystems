import Image from 'next/image';
import styles from './CinemaPreview.module.css';

export default function CinemaPreview(){
 return <div className={styles.preview}>
  <div className={styles.stage}>
   <Image src="/images/projects/home-theater-supplied.png" alt="Home theatre with recliners, ceiling projector, surround speakers and illuminated acoustic walls" width={1200} height={1600} sizes="(max-width: 700px) 100vw, 720px"/>
   <div className={styles.screen}><Image src="/images/projects/cinema-ocean-scene.png" alt="Ocean sunset scene projected on the cinema screen" fill sizes="(max-width: 700px) 25vw, 180px"/></div>
  </div>
 </div>;
}
