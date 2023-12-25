import { Filter } from 'lucide-react';
import { Metadata } from 'next';

import getProducts from '@/actions/get-products';
import ProductsList from '@/components/ui/products-list';
import Sorting from '@/components/sorting';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const t = await getTranslations({ locale });

	return {
		title: `${t('backpack-for-drones')}. ${t(
			'sale-price-in-kyiv-army-special-bags-and-backpacks-from-dronotorba',
		)}`,
		description: t('high-quality-and-functional-backpacks-for-drones'),
	};
}

export default async function ProductsListPage({
	params,
	searchParams,
}: {
	params: { locale: string; categoryId: string };
	searchParams: { sortBy: string };
}) {
	const products = await getProducts({
		sortBy: searchParams.sortBy,
	});

	const t = await getTranslations();

	return (
		<div>
			<div className="flex justify-between px-2 py-2 md:px-10 2xl:px-24">
				<div className="text-base flex gap-1 items-center">
					<Filter size={22} absoluteStrokeWidth={false} />
					<p>{t('filters')}</p>
				</div>
				<Sorting />
			</div>
			<div className="text-3xl text-center">
				<p>{t('drone-backpacks')}</p>
			</div>
			<ProductsList items={products} params={params.locale} />
		</div>
	);
}
