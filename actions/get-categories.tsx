import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/6067c704-fa29-4b3b-93bf-401cb6421792`;

const getCategories = async (): Promise<Category> => {
	const response = await fetch(`${URL}`);

	return response.json();
};

export default getCategories;
