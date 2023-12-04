'use client';

import { Tab } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { cn } from '@/lib/utils';

const DeliveryAndPayment = () => {
	const t = useTranslations();
	return (
		<>
			<Tab.Group>
				<Tab.List className={'flex gap-4'}>
					<Tab
						as="div"
						className={({ selected }) =>
							cn(
								' font-medium  focus:outline-none cursor-pointer transition-colors duration-200',
								selected
									? 'border-b-2 text-neutral-900 border-neutral-900 -mb-[2px] active:border-none'
									: 'text-neutral-400 hover:text-lime-600',
							)
						}
					>
						{t('delivery')}{' '}
					</Tab>
					<Tab
						as="div"
						className={({ selected }) =>
							cn(
								' font-medium focus:outline-none cursor-pointer transition-colors duration-200',
								selected
									? 'border-b-2 border-neutral-900 text-neutral-900 -mb-[2px] active:border-none'
									: 'text-neutral-400 hover:text-lime-600',
							)
						}
					>
						{t('payment')}{' '}
					</Tab>
				</Tab.List>
				<div className="h-[2px] bg-neutral-300/60" />
				<Tab.Panels className={'mt-4'}>
					<Tab.Panel className={'leading-loose'}>
						{t(
							'nova-poshta-in-ukraine-according-to-the-carriers-tariffs-address-delivery-by-nova-poshta-courier-according-to-the-carriers-tariffs-cash-on-delivery-20-uah-and-2-of-the-amount-of-goods',
						)}
					</Tab.Panel>
					<Tab.Panel className={'leading-loose'}>
						{t('cash-on-delivery-or-card-upon-receipt-at-a-nova-poshta-branch')} <br />
						{t('cash-on-delivery-by-cash-or-card-upon-receipt-by-a-nova-poshta-courier')}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default DeliveryAndPayment;
