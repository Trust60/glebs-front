import getProducts from '@/actions/get-products';
import ProductCard from '@/components/product-card';
import Button from '@/components/ui/button';
import ButtonWithIcon from '@/components/ui/button-with-icon';
import NoResults from '@/components/ui/no-results';
import ProductsList from '@/components/ui/products-list';
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
	const products = await getProducts({ isFeatured: true });
	return (
		<main className="">
			<div className="bg-slate-500 relative w-full h-[70vh] md:h-[75vh] 2xl:h-[80vh] mb-8">
				<Image src={'https://i.imgur.com/rJxVtnt.png'} fill objectFit="cover" alt="banner-image" />
			</div>
			<div className="px-7 my-4">
				<ButtonWithIcon
					className="w-full lg:w-2/3 2xl:w-1/3 lg:mx-auto border-black text-black"
					icon={<LayoutGrid />}
				>
					Product catalog
				</ButtonWithIcon>
			</div>
			<div className="pb-10">
				<div className="text-3xl text-center">
					<p>Popular products</p>
				</div>
				<ProductsList items={products} />
			</div>
		</main>
	);
}
