import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/9aa91e4c-975b-4f6e-b20c-37719bb1df79`;

const getCategories = async (): Promise<Category> => {
	const response = await fetch(`${URL}`);

	return response.json();
};

export default getCategories;
