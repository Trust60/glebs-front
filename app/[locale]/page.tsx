import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import getProducts from '@/actions/get-products';
import ButtonWithIcon from '@/components/ui/button-with-icon';
import ProductsList from '@/components/ui/products-list';
import { Link } from '@/navigation';
import { locales } from '@/config';
import HeroSection from '@/components/hero-section';

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
			<HeroSection />
			<div className="py-10">
				<div className="text-3xl text-center">
					<p>{t('popular-products')}</p>
				</div>
				<ProductsList items={products} params={params.locale} />
			</div>
		</main>
	);
}
