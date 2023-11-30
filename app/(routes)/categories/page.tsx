import getBillboard from '@/actions/get-billboard';
import getCategories from '@/actions/get-categories';
import CategoryCard from '@/components/category-card';

export default async function Categories() {
	const categories = await getCategories();
	const billboard = await getBillboard('efd87b32-a9ff-49b8-8ccf-47d882677a4f');
	return (
		<div className="flex flex-col w-full py-5 px-4">
			<CategoryCard category={categories} billboard={billboard} />
		</div>
	);
}
