'use client';
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import { MouseEventHandler } from 'react';

interface ClientButtonsProps {
	data: Product;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ data }) => {
	const cart = useCart();

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		cart.addItem(data);
	};
	return (
		<div className="mt-3 space-y-4">
			<Button className="bg-lime-600 w-full">Buy now</Button>
			<Button onClick={onAddToCart} className="border border-lime-600 w-full text-lime-600">
				Add to cart
			</Button>
		</div>
	);
};

export default ClientButtons;
