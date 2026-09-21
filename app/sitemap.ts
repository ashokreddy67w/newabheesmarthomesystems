import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import {products} from '@/lib/products';
export default function sitemap(): MetadataRoute.Sitemap {
 const pages=['', '/products', '/privacy-policy', '/terms-and-conditions', ...products.map(product=>`/products/${product.slug}`)];
 return pages.map(route=>({url:`${SITE.url}${route}`,changeFrequency:'monthly',priority:route?0.2:1}));
}
