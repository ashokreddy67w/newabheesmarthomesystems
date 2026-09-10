import type {Metadata} from 'next';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {products} from '@/lib/products';
import ProductsPage from '@/components/experience/ProductsPage';
export const metadata: Metadata = {title:'Our Products',description:'Explore ABHEE home automation, security, audio and video, community, sports and function hall solutions.'};
export default function Products(){
 const availableImages=products.map(product=>product.image).filter(src=>existsSync(path.join(process.cwd(),'public',src)));
 return <ProductsPage availableImages={availableImages}/>;
}
