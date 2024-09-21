import { Undo2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Slider from '@/components/slider/slider';
import getKeyInfo from '@/actions/get-keyinfo';
import Keyinfo from '@/components/key-info';
import ClientButtons from './components/client-buttons';
import ProductDescription from './components/product-description';
import { Link } from '@/navigation';
import DeliveryAndPayment from '@/components/delivery-and-payment';
import getExchangeRate from '@/actions/get-exchange-rate';
import { convertPrice } from '@/lib/utils';
import RelatedProductsSwiper from './components/related-products-swiper';

interface ProductPageProps {
	params: {
		productId: string;
		categoryId: string;
		locale: string;
	};
}

export async function generateMetadata({
	params: { productId },
}: ProductPageProps): Promise<Metadata> {
	const t = await getTranslations();
	const product = await getProduct(productId);

	return {
		title: `${t('backpack-for-drones')} ${product.name}. ${t(
			'sale-price-in-kyiv-army-special-bags-and-backpacks-from-dronotorba',
		)}`,
		description: product.description,
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const t = await getTranslations();
	const product = await getProduct(params.productId);
	console.log(product);
	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
		currentProductId: params.productId,
	});
	const rate = await getExchangeRate();
	const exchangeRate: number = (rate?.rate as number) || 0;
	const keyinfo = await getKeyInfo(product.keyinfoId);

	return (
		<>
			<div className="my-3 mx-4 md:hidden">
				<Link href={'/category'}>
					<div className="flex gap-2 items-center text-sm mb-5">
						<Undo2 size={18} />
						<p>{t('back-to-drone-backpacks')}</p>
					</div>
				</Link>
				<div>
					<div className="font-semibold text-2xl">
						<p>{product.name}</p>
					</div>
					<div className="text-sm text-green-500 mb-3">
						<p>{product.status}</p>
					</div>
				</div>
				<Slider data={product} />
				<div className="mt-5">
					<div className="font-bold text-2xl mt-5">
						<p>
							{params.locale === 'en' && '$'}
							{convertPrice(Number(product.price), exchangeRate, params.locale)}{' '}
							{params.locale === 'uk' && t('uah')}
						</p>
					</div>
					<ClientButtons data={product} />
					<div className="mt-10">
						<DeliveryAndPayment />
					</div>
					<div className="mt-5">
						<div className="text-lg font-medium mb-2">
							<p>{t('description')}:</p>
						</div>
						<ProductDescription data={product.description} />
					</div>
					<Keyinfo items={keyinfo as any} />
				</div>
				<div className="font-bold text-2xl">{t('related-products')}</div>
				<RelatedProductsSwiper items={suggestedProducts} params={params.locale} />
			</div>
			<div className="my-3 mx-4 hidden md:block lg:mx-14">
				<Link href={`/category`}>
					<div className="flex gap-2 items-center text-sm mb-5">
						<Undo2 size={18} />
						<p>{t('back-to-drone-backpacks')}</p>
					</div>
				</Link>
				<div className="flex">
					<div className="w-2/3 xl:w-3/5">
						<Slider data={product} />
					</div>
					<div className="mt-5 lg:w-1/3 xl:h-2/5">
						<div className="font-semibold text-2xl">
							<p>{product.name}</p>
						</div>
						<div className="text-sm text-green-500 mb-3">
							<p>{product.status}</p>
						</div>
						<div className="font-bold text-2xl mt-5">
							<p>
								{params.locale === 'en' && '$'}
								{convertPrice(Number(product.price), exchangeRate, params.locale)}{' '}
								{params.locale === 'uk' && t('uah')}
							</p>
						</div>
						<ClientButtons data={product} />
						<div className="mt-10">
							<DeliveryAndPayment />
						</div>
					</div>
				</div>
				<div className="mt-5 md:mx-10 md:w-2/3 xl:w-2/4">
					<div className="text-lg font-medium mb-2">
						<p>{t('description')}:</p>
					</div>
					<ProductDescription data={product.description} />
				</div>
				<Keyinfo items={keyinfo as any} />
				<div className="font-bold text-2xl">{t('related-products')}</div>
				<div className="xl:mx-10">
					<RelatedProductsSwiper items={suggestedProducts} params={params.locale} />
				</div>
			</div>
		</>
	);
};

export default ProductPage;
