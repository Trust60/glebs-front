import Separator from '@/components/ui/separator';
import { locales } from '@/config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale });

	return {
		title: t('delivery-and-payment'),
	};
}

export default async function PaymentDeliveryPage({ params }: Props) {
	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

	unstable_setRequestLocale(params.locale);
	const t = await getTranslations();
	return (
		<div className="px-20 py-6">
			<div className="text-3xl font-semibold p-2">
				<p>{t('delivery-and-payment')}</p>
			</div>
			<Separator />
			<div className="text-2xl font-medium p-2">
				<p>{t('international-delivery')}</p>
			</div>
			<div>
				<p>
					{t(
						'dronotorb-products-are-available-in-any-country-in-the-world-we-can-make-international-delivery-all-over-the-world-to-do-this-just-place-an-order-on-the-website-and-specify-the-address-for-delivery',
					)}{' '}
					<br />
					<br />
					{t(
						'you-can-pay-for-your-order-with-a-credit-card-after-placing-the-order-our-manager-will-check-the-availability-of-the-product-in-the-warehouse-and-contact-you-to-clarify-the-details-and-send-you-the-payment-information',
					)}{' '}
					<br />
					<br />
					{t(
						'the-order-will-be-packed-and-shipped-after-receiving-the-payment-within-1-2-business-days',
					)}{' '}
					<br />
					<br />
					{t('if-you-have-any-questions-about-your-order-please-contact-us')} <br />
				</p>
			</div>
			<div className="p-1">
				<ul className="space-y-1">
					<li>
						Email:{' '}
						<a href="mailto:dronotorba@gmail.com" target="_blank" rel="noopener noreferrer">
							dronotorba@gmail.com
						</a>
					</li>
					<li>
						Facebook:{' '}
						<a
							href="https://www.facebook.com/Gleb.and.Alina.military.equipment/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="text-lime-600">
								www.facebook.com/Gleb.and.Alina.military.equipment
							</span>
						</a>
					</li>
					<li>
						Instagram:{' '}
						<a
							href="https://www.instagram.com/dronotorba/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="text-lime-600">www.instagram.com/dronotorba</span>
						</a>
					</li>
					<li>WhatsApp, Telegram, Viber: +380 (73) 429-65-29</li>
				</ul>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('delivery-across-kyiv-and-ukraine')}</p>
			</div>
			<div>
				<ul>
					<li>{t('pickup-from-our-production-hall-at-the-address-kyiv')}</li>
					<li>
						{t(
							'nova-poshta-mist-express-delivery-to-the-post-office-orders-are-sent-after-100-payment-for-the-product',
						)}{' '}
					</li>
				</ul>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('payment-options')}</p>
			</div>
			<div>
				<ul>
					<li>{t('transfer-to-the-bank-account-according-to-the-banking-details')}</li>
					<li>{t('in-cash-upon-pickup')}</li>
				</ul>
			</div>
		</div>
	);
}
