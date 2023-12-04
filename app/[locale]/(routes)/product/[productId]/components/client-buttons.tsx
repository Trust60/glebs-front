'use client';
import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import { useTranslations } from 'next-intl';
import { MouseEventHandler } from 'react';

interface ClientButtonsProps {
	data: Product;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ data }) => {
	const t = useTranslations();
	const cart = useCart();

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		cart.addItem(data);
	};
	return (
		<div className="mt-3 space-y-4 xl:flex xl:gap-4 xl:w-full xl:space-y-0">
			<Button className="bg-lime-600 w-full">{t('buy-now')}</Button>
			<Button onClick={onAddToCart} className="border border-lime-600 w-full text-lime-600">
				{t('add-to-cart')}
			</Button>
		</div>
	);
};

export default ClientButtons;
