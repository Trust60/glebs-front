import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import getProducts from '@/actions/get-products';
import ButtonWithIcon from '@/components/ui/button-with-icon';
import ProductsList from '@/components/ui/products-list';
import { Link } from '@/navigation';
import { locales } from '@/config';

export default async function Home({
	params,
}: {
	params: {
		locale: string;
	};
}) {
	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

	unstable_setRequestLocale(params.locale);

	const products = await getProducts({ isFeatured: true });
	const t = await getTranslations();

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
				>
					<Link href={`/category`}>{t('product-catalog')}</Link>
				</ButtonWithIcon>
			</div>
			<div className="pb-10">
				<div className="text-3xl text-center">
					<p>{t('popular-products')}</p>
				</div>
				<ProductsList items={products} params={params.locale} />
			</div>
		</main>
	);
}
