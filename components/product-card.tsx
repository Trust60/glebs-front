'use client';

import { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import { ScanEye, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import useCart from '@/hooks/use-cart';
import { Skeleton } from './ui/skeleton';

type ProductCard = {
	data: Product;
};

const ProductCard: React.FC<ProductCard> = ({ data }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const router = useRouter();
	const cart = useCart();

	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		cart.addItem(data);
	};
	return (
		<div onClick={handleClick} className="flex group flex-col">
			<div className="border rounded-xl shadow-lg">
				<div className="relative w-full h-[35vh] sm:h-[40vh] lg:h-[45vh]">
					{!imageLoaded && (
						<Skeleton className="w-full h-[35vh] sm:h-[40vh] lg:h-[45vh] rounded-t-xl bg-neutral-900/10" />
					)}
					<Image
						className="object-cover aspect-square rounded-t-xl"
						src={data?.images?.[0]?.url}
						alt={data?.name}
						fill
						onLoad={() => setImageLoaded(true)}
					/>
					<div className="hidden lg:block scale-0 group-hover:scale-100 absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out">
						<div className="flex gap-x-6 justify-center">
							<IconButton
								onClick={handleClick}
								icon={<ScanEye size={20} className="text-gray-600" />}
							/>
							<IconButton
								onClick={onAddToCart}
								icon={<ShoppingCart size={20} className="text-gray-600" />}
							/>
						</div>
					</div>
				</div>
				<div className="px-4 py-2 flex flex-col gap-1">
					<div className="text-xl">
						<p>{data.name}</p>
					</div>
					<div className="font-bold text-stone-950">
						<p>{data.price} UAH</p>
					</div>
					<div className="text-sm text-green-500">
						<p>{data.status}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
