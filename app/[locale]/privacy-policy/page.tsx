import Separator from '@/components/ui/separator';
import { getTranslations } from 'next-intl/server';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale });

	return {
		title: t('privacy-policy'),
	};
}
export default async function PrivacyPolicyPage() {
	const t = await getTranslations();
	return (
		<div className="px-20 py-6">
			<div className="text-3xl font-semibold p-2">
				<p>{t('privacy-policy')}</p>
			</div>
			<Separator />

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
