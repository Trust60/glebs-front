import { Product } from '@/types';
import NoResults from './no-results';
import ProductCard from '../product-card';

interface ProductsListProps {
	items: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ items }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-7 2xl:gap-14 px-4 sm:px-16 lg:px-32 2xl:px-60 my-5">
			{items?.length === 0 && <NoResults />}
			{items?.map((item) => (
				<ProductCard key={item.id} data={item} />
			))}
		</div>
	);
};

export default ProductsList;
