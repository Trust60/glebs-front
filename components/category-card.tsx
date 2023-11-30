'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Billboard as BillboardType, Category } from '@/types';

import Button from './ui/button';
import Billboard from './billboard';

interface CategoryCardProps {
	category: Category[];
	billboard: BillboardType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, billboard }) => {
	const pathname = usePathname();
	const router = useRouter();

	const routes = category.map((route) => ({
		href: `/categories/${route.id}`,
		label: route.name,
		active: pathname === `/categories/${route.id}`,
	}));
	return (
		<>
			{routes.map((route) => (
				<>
					<Billboard data={billboard} />
					<Button className="-mt-24 mx-16 bg-lime-600 z-10" onClick={() => router.push(route.href)}>
						View products
					</Button>
				</>
			))}
		</>
	);
};

export default CategoryCard;
