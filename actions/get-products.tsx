import { Product } from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryId?: string;
	isFeatured?: boolean;
	currentProductId?: string;
	sortBy?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
	const { sortBy, ...restQuery } = query;
	let url = qs.stringifyUrl({
		url: URL,
		query: {
			...restQuery,
		},
	});

	if (sortBy === 'priceAsc' || sortBy === 'priceDesc') {
		url += `?sortBy=${sortBy}`;
	}

	const res = await fetch(url);
	let products: Product[] = await res.json();

	if (query.currentProductId) {
		products = products.filter((product) => product.id !== query.currentProductId);
	}

	return products;
};

export default getProducts;
