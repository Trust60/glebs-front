'use client';

import { Tab } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import selfDelivery from '@/images/icons/self-delivery.svg';

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
						<div className="flex flex-row justify-between px-3">
							<Image
								src="https://i.imgur.com/l4i3x5K.png"
								alt="Nova poshta"
								width={90}
								height={90}
								className="object-contain "
							/>
							<Image
								src="https://i.imgur.com/LV3cPWd.png"
								alt="Meest Express"
								width={80}
								height={80}
								className="object-contain"
							/>
							<Image
								src={selfDelivery}
								alt="Self delivery"
								width={50}
								height={50}
								className="object-contain"
							/>
						</div>
						{t('nova-poshta-mist-ekspres-samoviviz')} <br />
						<br />
						{t('dostavka-poshtovimi-sluzhbami-zdiisnyuyetsya-zgidno-tarifiv-pereviznika')}
					</Tab.Panel>
					<Tab.Panel className={'leading-loose'}>
						{t(
							'cash-on-delivery-or-payment-to-the-sole-proprietors-account-with-the-issuance-of-an-invoice-and-an-expense-invoice',
						)}
						<br />
						<br />
						{t('it-is-also-possible-to-arrange-olx-or-prom-delivery')}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};

export default DeliveryAndPayment;
