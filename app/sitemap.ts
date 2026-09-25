import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import {products} from '@/lib/products';
import {projects} from '@/lib/experience-content';
export default function sitemap(): MetadataRoute.Sitemap {
 const pages=['', '/products', '/privacy-policy', '/terms-and-conditions', ...products.map(product=>`/products/${product.slug}`), ...projects.map(project=>`/projects/${project.slug}`)];
 return pages.map(route=>({url:`${SITE.url}${route}`,changeFrequency:'monthly',priority:route?0.2:1}));
}
