import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';

import ButtonWithIcon from '@/components/ui/button-with-icon';
import ProductsList from '@/components/ui/products-list';
import Link from 'next/link';

export default async function Home({
	params,
}: {
	params: {
		locale: string;
	};
}) {
	return (
		<main className="">
			<div className="bg-slate-500 relative w-full h-[70vh] md:h-[75vh] 2xl:h-[80vh] mb-8">
				<Image
					src={'https://i.imgur.com/rJxVtnt.png'}
					fill
					className="object-cover"
					priority={true}
					sizes="70vh, (min-width: 768px) 75vw, (min-width: 1536px) 80vw"
					alt="banner-image"
				/>
			</div>
			<div className="px-7 my-4">
				<ButtonWithIcon
					className="w-full lg:w-2/3 2xl:w-1/3 lg:mx-auto border-black text-black"
					icon={<LayoutGrid />}
				></ButtonWithIcon>
			</div>
			<div className="pb-10">
				<div className="text-3xl text-center">
					<p>popular-products</p>
				</div>
			</div>
		</main>
	);
}
