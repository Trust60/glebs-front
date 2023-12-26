import Separator from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale });

	return {
		title: t('public-offer'),
	};
}

export default function PublicOfferPage() {
	const t = useTranslations('');
	return (
		<div className="px-20 py-6">
			<div className="text-3xl font-semibold p-2">
				<p>{t('public-offer')}</p>
			</div>
			<Separator />
			<div className="text-2xl font-medium p-2">
				<p>{t('general-terms')}</p>
			</div>
			<div>
				<p>
					{t(
						'1-1-this-offer-is-an-official-offer-of-tm-dronotorba-hereinafter-referred-to-as-the-seller-to-conclude-a-contract-for-the-sale-of-goods-remotely-that-is-through-the-online-store-hereinafter-referred-to-as-the-agreement-and-places-the-public-offer-offer-on-the-official-website-of-the-seller-https-dronotorba-com-hereinafter-referred-to-as-the-website',
					)}
					<br />
					<br />
					{t(
						'1-2-the-moment-of-full-and-unconditional-acceptance-by-the-buyer-of-the-sellers-offer-acceptance-to-conclude-an-electronic-contract-for-the-sale-of-goods-is-considered-the-fact-that-the-buyer-has-paid-for-the-order-under-the-terms-of-this-agreement-within-the-terms-and-at-the-prices-indicated-on-the-sellers-website',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('terms-and-definitions')}</p>
			</div>
			<div>
				<p>
					{t(
						'2-1-in-this-offer-unless-the-context-requires-otherwise-the-following-terms-have-the-following-meanings',
					)}
				</p>
				<div className="p-1">
					<ul>
						<li>{t('product-models-accessories-components-and-related-items')}</li>
						<li>
							{t(
								'online-store-in-accordance-with-the-law-of-ukraine-on-electronic-commerce-a-means-for-the-presentation-or-sale-of-goods-works-or-services-by-means-of-an-electronic-transaction',
							)}
						</li>
						<li>{t('seller-a-company-that-sells-goods-presented-on-the-website')}</li>
						<li>
							{t(
								'buyer-an-individual-who-has-entered-into-an-agreement-with-the-seller-on-the-terms-set-forth-below',
							)}
						</li>
						<li>
							{t(
								'order-the-selection-of-individual-items-from-the-list-of-goods-specified-by-the-buyer-when-placing-an-order-and-making-payment',
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('subject-of-the-agreement')}</p>
			</div>
			<div>
				<p>
					{t(
						'3-1-the-seller-undertakes-to-transfer-the-goods-to-the-buyers-ownership-and-the-buyer-undertakes-to-pay-for-and-accept-the-goods-under-the-terms-of-this-agreement-this-agreement-governs-the-sale-and-purchase-of-goods-in-the-online-store-including',
					)}
				</p>
				<div className="p-1">
					<ul>
						<li>
							{t(
								'voluntary-selection-of-goods-by-the-buyer-in-the-online-store-independent-ordering-by-the-buyer-in-the-online-store',
							)}
						</li>
						<li>{t('independent-ordering-by-the-buyer-in-the-online-store')}</li>
						<li>{t('payment-by-the-buyer-for-the-order-placed-in-the-online-store')} </li>
						<li>
							{t(
								'processing-and-delivery-of-the-order-to-the-buyer-in-accordance-with-the-terms-of-this-agreement',
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('ordering-process')}</p>
			</div>
			<div>
				<p>
					{t(
						'4-1-the-buyer-has-the-right-to-place-an-order-for-any-product-presented-on-the-website-of-the-online-store-and-available',
					)}
					<br />
					<br />
					{t('4-2-each-item-can-be-presented-in-the-order-in-any-quantity')} <br />
					<br />
					{t(
						'4-3-in-the-absence-of-goods-in-the-warehouse-the-company-manager-is-obliged-to-notify-the-buyer-by-phone-or-e-mail',
					)}
					<br />
					<br />
					{t(
						'4-4-in-the-absence-of-goods-the-buyer-has-the-right-to-replace-it-with-goods-of-a-similar-model-refuse-this-product-cancel-the-order',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('the-order-payment-procedure')}</p>
			</div>
			<div>
				<p>
					{t('5-1-payment-is-made-according-to-the-invoice')} <br />
					<br />
					{t(
						'5-2-if-the-funds-are-not-received-the-online-store-reserves-the-right-to-cancel-the-order',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('terms-of-delivery-of-the-order')}</p>
			</div>
			<div>
				<p>
					{t(
						'6-1-delivery-of-goods-purchased-in-the-online-store-is-carried-out-by-means-of-transport-companies',
					)}
					<br />
					<br />
					{t(
						'6-2-together-with-the-order-the-buyer-is-provided-with-documents-in-accordance-with-the-legislation-of-ukraine',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('rights-and-obligations-of-the-parties')}</p>
			</div>
			<div>
				<p>
					{t('7-1-the-seller-has-the-right-to')} <br />
					{t(
						'unilaterally-terminate-the-provision-of-services-under-this-agreement-in-case-of-violation-by-the-buyer-of-the-terms-of-this-agreement',
					)}
					<br />
					{t('7-2-the-buyer-is-obliged-to')} <br />
					{t('timely-pay-and-receive-the-order-on-the-terms-of-this-agreement')} <br />
					{t('7-3-the-buyer-has-the-right')} <br />
					{t('place-an-order-in-the-online-store')} <br />
					{t('require-the-seller-to-fulfill-the-terms-of-this-agreement')}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('responsibility-of-the-parties')}</p>
			</div>
			<div>
				<p>
					{t(
						'8-1-the-parties-shall-be-liable-for-non-fulfillment-or-improper-fulfillment-of-the-terms-of-this-agreement-in-the-manner-prescribed-by-this-agreement-and-the-current-legislation-of-ukraine',
					)}
					<br />
					<br />
					{t('8-2-the-seller-is-not-responsible-for')}
				</p>
				<div className="p-1">
					<ul>
						<li>{t('the-appearance-of-the-goods-changed-by-the-manufacturer')}</li>
						<li>
							{t(
								'for-a-slight-discrepancy-in-the-color-scheme-of-the-goods-which-may-differ-from-the-original-goods-solely-due-to-the-different-color-rendering-of-personal-computer-monitors-of-certain-models',
							)}
						</li>
						<li>
							{t(
								'for-the-content-and-accuracy-of-the-information-provided-by-the-buyer-when-placing-an-order',
							)}
						</li>
						<li>
							{t(
								'for-delays-and-interruptions-in-the-provision-of-services-order-processing-and-delivery-of-goods-that-occur-for-reasons-beyond-its-control',
							)}
						</li>
						<li>
							{t(
								'for-unlawful-illegal-actions-performed-by-the-buyer-using-this-access-to-the-internet',
							)}
						</li>
					</ul>
				</div>
				<p>
					<br />
					{t(
						'8-3-the-buyer-using-the-internet-access-provided-to-him-is-solely-responsible-for-the-damage-caused-by-his-actions-to-persons-or-their-property-legal-entities-the-state-or-moral-principles-of-morality',
					)}
					<br />
					<br />
					{t(
						'8-4-in-the-event-of-force-majeure-the-parties-shall-be-released-from-fulfillment-of-the-terms-of-this-agreement-for-the-purposes-of-this-agreement-force-majeure-circumstances-shall-mean-events-of-an-extraordinary-unforeseen-nature-that-exclude-or-objectively-interfere-with-the-performance-of-this-agreement-the-occurrence-of-which-the-parties-could-not-have-foreseen-and-prevented-by-reasonable-means',
					)}
					<br />
					<br />
					{t(
						'8-5-the-parties-shall-use-their-best-efforts-to-resolve-any-disagreements-exclusively-through-negotiations',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('other-terms')}</p>
			</div>
			<div>
				<p>
					{t(
						'9-1-the-online-store-reserves-the-right-to-unilaterally-amend-this-agreement-subject-to-its-prior-publication-on-the-website-https-dronotorba-com',
					)}
					<br />
					<br />
					{t(
						'9-2-the-online-store-is-designed-to-organize-a-remote-method-of-selling-goods-via-the-internet',
					)}
					<br />
					<br />
					{t(
						'9-3-the-buyer-is-responsible-for-the-accuracy-of-the-information-specified-when-placing-an-order-at-the-same-time-when-making-an-acceptance-placing-an-order-and-subsequent-payment-for-the-goods-the-buyer-gives-the-seller-his-unconditional-consent-to-the-collection-processing-storage-use-of-his-personal-data-within-the-meaning-of-the-law-of-ukraine-on-personal-data-protection',
					)}
					<br />
					<br />
					{t(
						'9-4-payment-by-the-buyer-for-the-order-placed-in-the-online-store-means-the-buyers-full-consent-to-the-terms-of-the-purchase-and-sale-agreement-public-offer',
					)}
					<br />
					<br />
					{t(
						'9-5-the-actual-date-of-the-electronic-agreement-between-the-parties-is-the-date-of-acceptance-of-the-terms-and-conditions-in-accordance-with-art-11-of-the-law-of-ukraine-on-electronic-commerce',
					)}
					<br />
					<br />
					{t(
						'9-6-using-the-resource-of-the-online-store-for-previewing-the-goods-as-well-as-for-placing-an-order-for-the-buyer-is-free-of-charge',
					)}
					<br />
					<br />
					{t(
						'9-7-the-information-provided-by-the-buyer-is-confidential-the-online-store-uses-information-about-the-buyer-solely-for-the-purpose-of-processing-the-order-sending-notifications-to-the-buyer-delivering-the-goods-making-settlements-etc',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('the-procedure-for-returning-products-of-good-quality')}</p>
			</div>
			<div>
				<p>
					{t(
						'10-1-the-return-of-goods-to-the-online-store-is-carried-out-in-accordance-with-the-current-legislation-of-ukraine',
					)}
					<br />
					<br />
					{t('10-2-return-of-the-goods-to-the-online-store-is-made-at-the-expense-of-the-buyer')}
					<br />
					<br />
					{t(
						'10-3-when-the-buyer-returns-the-goods-of-good-quality-the-online-store-shall-refund-the-amount-paid-for-the-goods-upon-return-of-the-goods-less-compensation-for-the-costs-of-the-online-store-related-to-the-delivery-of-the-goods-to-the-buyer',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('term-of-the-agreement')}</p>
			</div>
			<div>
				<p>
					{t(
						'11-1-an-electronic-agreement-shall-be-deemed-concluded-from-the-moment-the-person-who-sent-the-proposal-to-conclude-such-an-agreement-receives-a-response-on-acceptance-of-this-proposal-in-accordance-with-the-procedure-established-by-part-six-of-article-11-of-the-law-of-ukraine-on-electronic-commerce',
					)}
					<br />
					<br />
					{t(
						'11-2-before-the-expiration-of-the-term-this-agreement-may-be-terminated-by-mutual-agreement-of-the-parties-until-the-actual-delivery-of-the-goods-by-refund',
					)}
					<br />
					<br />
					{t(
						'11-3-the-parties-have-the-right-to-terminate-this-agreement-unilaterally-in-case-of-non-fulfillment-by-one-of-the-parties-of-the-terms-of-this-agreement-and-in-cases-provided-for-by-the-current-legislation-of-ukraine',
					)}
				</p>
			</div>
		</div>
	);
}
