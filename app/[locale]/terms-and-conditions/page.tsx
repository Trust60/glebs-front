import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Separator from '@/components/ui/separator';
import { locales } from '@/config';
import { Link } from '@/navigation';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale });

	return {
		title: t('terms-and-conditions'),
	};
}

export default async function TermsAndConditionsPage({ params }: Props) {
	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

	unstable_setRequestLocale(params.locale);
	const t = await getTranslations();
	return (
		<div className="px-20 py-6">
			<div className="text-3xl font-semibold p-2">
				<p>{t('terms-and-conditions')}</p>
			</div>
			<Separator />
			<div className="text-2xl font-medium p-2">
				<p>{t('accept-these-terms')}</p>
			</div>
			<div>
				<p>
					{t(
						'by-using-our-sites-you-confirm-that-you-accept-these-terms-of-use-and-that-you-agree-to-comply-with-them-if-you-do-not-agree-to-these-terms-you-must-not-use-our-sites-we-recommend-that-you-print-a-copy-of-these-terms-for-future-reference',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('changes-to-these-terms')}</p>
			</div>
			<div>
				<p>
					{t(
						'we-amend-these-terms-from-time-to-time-the-amended-terms-will-be-posted-on-this-site-and-will-become-effective-from-the-date-they-are-posted-your-continued-use-of-the-site-after-any-such-post-will-constitute-your-acceptance-of-and-agreement-to-any-changes',
					)}
					<br />
					<br />
					{t('we-may-amend-and-change-our-sites-from-time-to-time')}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('general-terms')}</p>
			</div>
			<div>
				<p>
					{t(
						'the-following-terms-and-conditions-of-sale-and-delivery-apply-to-all-purchases-made-in-the-online-store-https-dronotorba-com-which-will-be-delivered-to-all-regions-of-ukraine-and-internationally-all-agreements-on-purchases-in-the-online-store-https-dronotorba-com-are-made-in-ukrainian',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('cost-of-products')}</p>
			</div>
			<div>
				<p>{t('the-unit-price-is-provided-on-the-product-page-and-in-the-shopping-cart')}</p>
			</div>
			<div className="p-1">
				<ul>
					<li>
						{t(
							'the-price-of-the-product-is-exclusive-of-shipping-costs-you-can-learn-more-about-the-delivery-terms-in-the',
						)}{' '}
						<Link href={'/payment-delivery'}>
							<span className="text-lime-600">{t('delivery-section')}</span>
						</Link>
						.
					</li>
					<li>{t('all-prices-are-current-and-updated-regularly')}</li>
					<li>{t('you-pay-the-price-of-the-products-specified-at-the-time-of-purchase')}</li>
				</ul>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('payment')}</p>
			</div>
			<div>
				<ul>
					<li>{t('transfer-to-the-bank-account-according-to-the-banking-details')}</li>
					<li>{t('in-cash-upon-pickup')}</li>
				</ul>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('order-confirmation')}</p>
			</div>
			<div>
				<p>
					{t(
						'after-placing-an-order-our-manager-will-check-the-availability-of-the-products-in-the-warehouse-and-contact-you-to-clarify-the-details-and-send-payment-information',
					)}
					<br />
					<br />
					{t(
						'once-you-have-entered-into-this-agreement-you-may-not-make-any-changes-to-your-order-however-you-may-cancel-it-in-accordance-with-our-returns-and',
					)}{' '}
					<Link href={'/return-policy'}>
						<span className="text-lime-600">{t('return-policy-0')}</span>
					</Link>
					).
					<br />
					<br />
					{t(
						'we-may-refuse-to-provide-you-with-the-goods-at-any-time-before-the-transaction-is-completed',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('delivery')}</p>
			</div>
			<div>
				<p>
					{t(
						'the-online-order-delivery-service-is-provided-to-postal-companies-nova-poshta-and-meest-all-over-ukraine',
					)}
					<br />
					<br />
					{t(
						'the-cost-of-delivery-is-calculated-based-on-the-carriers-tariffs-and-depends-on-the-dimensions-of-the-selected-product-weight-and-region-of-delivery',
					)}
					<br />
					<br />
					{t('details-of-the-terms-of-transportation-of-nova-post-can-be-found-at')}{' '}
					<a href="https://novapost.com/">
						<span className="text-lime-600">https://novapost.com/</span>
					</a>
					. {t('details-of-meest-transportation-conditions-are-available-at')}{' '}
					<a href="https://ua.meest.com/">
						<span className="text-lime-600">https://ua.meest.com/</span>
					</a>
					.
					<br />
					<br />
					{t(
						'the-order-will-be-packed-and-shipped-after-receiving-payment-within-1-2-business-days',
					)}
					<br />
					<br />
					{t('you-can-track-your-order-on-the-carriers-website')}
				</p>
			</div>
			<div className="p-1">
				<ul>
					<li>
						{t('nova-post')}-{' '}
						<a href="https://novaposhta.ua/tracking/">
							<span className="text-lime-600">https://novaposhta.ua/tracking/</span>
						</a>
					</li>
					<li>
						Meest -{' '}
						<a href="https://ua.meest.com/parcel-track/">
							<span className="text-lime-600">https://ua.meest.com/parcel-track/</span>
						</a>
					</li>
				</ul>
			</div>
			<div>
				<p>
					<br />
					{t(
						'this-service-will-help-you-to-find-out-where-your-shipment-is-now-write-the-express-waybill-number-and-get-information-about-the-shipment',
					)}
					<br />
					<br />
					{t(
						'please-note-that-the-tracking-of-the-parcel-will-be-available-after-the-order-passes-customs-control-which-is-why-the-tracking-number-does-not-work-for-the-first-few-days-after-the-order-is-shipped-from-the-international-warehouse',
					)}
					<br />
					<br />
					{t('when-delivering-an-online-order-to-a-carriers-office-the-delivery-time-is-5-days')}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('returns-and-exchanges')}</p>
			</div>
			<div>
				<p>
					{t(
						'you-can-replace-or-return-the-product-within-14-days-after-purchase-in-accordance-with-the-consumer-protection-act',
					)}
					<br />
					<br />
					{t('you-can-learn-more-about-the-terms-of-return-and-exchange-of-products-in-the')}{' '}
					<Link href={'/return-policy'}>
						<span className="text-lime-600">{t('return-policy-0')}</span>
					</Link>
					.
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('privacy-policy')}</p>
			</div>
			<div>
				<p>
					{t(
						'the-purpose-of-this-privacy-policy-is-to-inform-you-about-how-dronotorba-dronotorba-we-us-processes-your-personal-data-and-your-rights-in-this-regard',
					)}
					<br />
					<br />
					{t('we-process-the-following-personal-data')}
				</p>
			</div>
			<div className="p-1">
				<ul>
					<li>{t('name-1')}</li>
					<li>{t('delivery-address')}</li>
					<li>{t('email-address')}</li>
					<li>{t('phone-number-0')}</li>
					<li>{t('order-number-0')}</li>
					<li>{t('payment-information')}</li>
				</ul>
			</div>
			<div>
				<p>
					{t(
						'the-processing-is-necessary-for-the-performance-of-our-agreement-with-you-regarding-online-purchases-on-the-website-https-dronotorba-com-article-11-1-3-of-the-law-of-ukraine-on-personal-data-protection',
					)}
					<br />
					<br />
					{t(
						'our-legitimate-interest-in-processing-the-purchase-section-11-1-6-of-the-personal-data-protection-act',
					)}
					<br />
					<br />
					{t(
						'pursuant-to-part-3-of-article-29-of-the-law-of-ukraine-on-personal-data-protection-the-member-states-of-the-european-economic-area-as-well-as-the-states-that-have-signed-the-council-of-europe-convention-for-the-protection-of-individuals-with-regard-to-automatic-processing-of-personal-data-are-recognized-as-ensuring-an-adequate-level-of-personal-data-protection',
					)}
					<br />
					<br />
					{t(
						'by-providing-us-with-your-personal-data-you-consent-to-the-transfer-of-your-personal-data-as-set-forth-in-this-section-and-do-not-require-notification-of-such-transfer-otherwise-you-should-stop-using-the-website-https-dronotba-com-and-not-provide-us-with-your-personal-data',
					)}
					<br />
					<br />
					{t(
						'backups-containing-your-personal-data-will-be-deleted-in-a-standardized-manner-through-gradual-overwriting-and-cannot-be-accessed-in-the-usual-way',
					)}
					<br />
					<br />
					{t(
						'this-privacy-policy-may-be-updated-and-modified-for-example-due-to-changes-in-data-protection-laws-and-practices-we-recommend-that-you-stay-informed-of-any-changes-to-the-privacy-policy',
					)}
				</p>
			</div>
		</div>
	);
}
