import Link from 'next/link';
import { Undo2 } from 'lucide-react';

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import ProductsList from '@/components/ui/products-list';
import Slider from '@/components/ui/slider';
import getKeyInfo from '@/actions/get-keyinfo';
import Keyinfo from '@/components/key-info';
import ClientButtons from './components/client-buttons';
import ProductDescription from './components/product-description';

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const product = await getProduct(params.productId);
	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
		currentProductId: params.productId,
	});
	const keyinfo = await getKeyInfo(product.keyinfoId);
	return (
		<div className="my-3 mx-4">
			<Link href={`/categories/${product.category.id}`}>
				<div className="flex gap-2 items-center text-sm mb-5">
					<Undo2 size={18} />
					<p>Back to Drone Backpacks</p>
				</div>
			</Link>
			<Slider data={product} />
			<div className="mt-5">
				<div className="text-sm text-green-500 mb-3">
					<p>{product.status}</p>
				</div>
				<div className="font-semibold text-2xl">
					<p>{product.name}</p>
				</div>
				<div className="font-bold text-2xl mt-5">
					<p>{product.price} UAH</p>
				</div>
				<ClientButtons data={product} />
				<div className="mt-5">
					<div className="text-lg font-medium mb-2">
						<p>Description:</p>
					</div>
					<ProductDescription data={product.description} />
				</div>
				<Keyinfo data={keyinfo} />
			</div>
			<div className="font-bold text-2xl">Related products</div>
			<div className="-mx-4">
				<ProductsList items={suggestedProducts} />
			</div>
		</div>
	);
};

export default ProductPage;
