import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
export default function sitemap(): MetadataRoute.Sitemap {
 return ['', '/products', '/privacy-policy', '/terms-and-conditions'].map(route=>({url:`${SITE.url}${route}`,changeFrequency:'monthly',priority:route?0.2:1}));
}
