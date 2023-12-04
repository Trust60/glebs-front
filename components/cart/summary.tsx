'use client';

import { useTranslations } from 'next-intl';

import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import CustomerModalForm from './customer-modal-form';

const Summary = () => {
	const t = useTranslations();

	const items = useCart((state) => state.items);

	const { totalQuantity, totalPrice } = items.reduce(
		(totals, item) => {
			totals.totalQuantity += item.quantity;
			totals.totalPrice += Number(item.price) * item.quantity;
			return totals;
		},
		{ totalQuantity: 0, totalPrice: 0 },
	);

	if (totalPrice === 0) {
		return null;
	}

	return (
		<div className="mt-16 rounded-lg bg-gray-50 px-4 py-6">
			<h2 className="text-lg font-medium text-gray-900">{t('order-summary')}</h2>
			<div className="mt-6 space-y-4">
				<div className="flex items-center justify-between border-t border-gray-200 pt-4">
					<div className="text-base font-medium text-gray-900">{t('order-total')}</div>
					<Currency value={totalPrice} />
				</div>
			</div>
			<CustomerModalForm />
		</div>
	);
};

export default Summary;
