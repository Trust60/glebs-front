'use client';

import Image from 'next/image';
import { Minus, Plus, Trash } from 'lucide-react';

import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import Currency from '../ui/currency';
import useCart from '@/hooks/use-cart';

interface CartItem extends Product {
	quantity: number;
}

interface CartItemProps {
	data: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart();

	const onRemove = () => {
		cart.removeItem(data.id);
	};

	const totalCost = Number(data.price) * data.quantity;

	return (
		<li className="flex py-6 border-b">
			<div className="relative h-24 w-24 rounded-md overflow-hidden">
				<Image
					fill
					src={data.images[0].url}
					alt={data.name}
					className="object-cover object-center"
				/>
			</div>
			<div className="relative w-full ml-4 flex flex-col justify-between sm:ml-6 ">
				<div className="absolute z-10 right-0 top-0">
					<IconButton
						onClick={onRemove}
						icon={<Trash size={15} color="#fff" />}
						className="bg-[#ef4444]"
					/>
				</div>
				<div className="relative pr-9">
					<div className="flex justify-between">
						<p className="text-base font-semibold mb-2">{data.name}</p>
					</div>
					<div className="mb-2 flex flex-row items-center gap-1">
						<Minus onClick={() => cart.decreaseQuantity(data.id)} className="w-4 h-4" />
						{data.quantity}
						<Plus onClick={() => cart.increaseQuantity(data.id)} className="w-4 h-4" />
					</div>
					<Currency value={totalCost} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
