import { Undo2 } from 'lucide-react';

import Slider from '@/components/slider/slider';
import Keyinfo from '@/components/key-info';
import ClientButtons from './components/client-buttons';
import ProductDescription from './components/product-description';
import DeliveryAndPayment from '@/components/delivery-and-payment';
import { convertPrice } from '@/lib/utils';
import RelatedProductsSwiper from './components/related-products-swiper';
import Link from 'next/link';

interface ProductPageProps {
	params: {
		productId: string;
		locale: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	return (
		<>
			<div className="my-3 mx-4 md:hidden">
				<Link href={`/categories/`}>
					<div className="flex gap-2 items-center text-sm mb-5">
						<Undo2 size={18} />
						<p>back-to-drone-backpacks</p>
					</div>
				</Link>
				<div>
					<div className="font-semibold text-2xl">
						<p></p>
					</div>
					<div className="text-sm text-green-500 mb-3">
						<p></p>
					</div>
				</div>
				<div className="mt-5">
					<div className="font-bold text-2xl mt-5">
						<p>
							{params.locale === 'en' && '$'}

							{params.locale === 'uk' && 'uah'}
						</p>
					</div>
					<div className="mt-5">
						<div className="text-lg font-medium mb-2">
							<p>description:</p>
						</div>
					</div>
				</div>
				<div className="font-bold text-2xl">related-products</div>
			</div>
			<div className="my-3 mx-4 hidden md:block lg:mx-14">
				<div className="flex gap-2 items-center text-sm mb-5">
					<Undo2 size={18} />
					<p>back-to-drone-backpacks</p>
				</div>
				<div className="flex">
					<div className="w-2/3 xl:w-3/5"></div>
					<div className="mt-5 lg:w-1/3 xl:h-2/5">
						<div className="font-semibold text-2xl"></div>
						<div className="text-sm text-green-500 mb-3"></div>
						<div className="font-bold text-2xl mt-5">
							<p>
								{params.locale === 'en' && '$'}
								{params.locale === 'uk' && 'uah'}
							</p>
						</div>
						<div className="mt-10">
							<DeliveryAndPayment />
						</div>
					</div>
				</div>
				<div className="mt-5 md:mx-10 md:w-2/3 xl:w-2/4">
					<div className="text-lg font-medium mb-2">
						<p>description:</p>
					</div>
				</div>
				<div className="font-bold text-2xl">related-products</div>
				<div className="xl:mx-10"></div>
			</div>
		</>
	);
};

export default ProductPage;
