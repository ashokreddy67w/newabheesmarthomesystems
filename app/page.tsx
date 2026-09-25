import type { Metadata } from 'next';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {images,referenceSolutions,projects} from '@/lib/experience-content';
import {MediaAvailability} from '@/components/experience/Primitives';
import Homepage from '@/components/experience/Homepage';
export const metadata: Metadata = {title:'ABHEE Smart Home Systems | A home that responds',description:'Lighting, security, climate and entertainment — intelligently connected into one seamless smart-home experience.'};
export default function HomePage(){const sources = Array.from(new Set(JSON.stringify({images,referenceSolutions,projects}).match(/\/images\/[^" ]+\.(?:jpg|png|webp)/g) || [])).filter(src=>existsSync(path.join(process.cwd(),'public',src)));return <MediaAvailability sources={sources}><Homepage/></MediaAvailability>}
