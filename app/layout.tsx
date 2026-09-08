import type { Metadata } from 'next';
import './globals.css';
import './experience.css';
import {SITE} from '@/lib/site-config';
import {Header,Footer,ContactLayer} from '@/components/experience/Chrome';
export const metadata: Metadata = {metadataBase:new URL(SITE.url),title:{default:'ABHEE Smart Home Systems',template:'%s | ABHEE Smart Home Systems'},description:'Premium smart-home automation and integration for Indian homes.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main-content">{children}</main><Footer/><ContactLayer/></body></html>}
