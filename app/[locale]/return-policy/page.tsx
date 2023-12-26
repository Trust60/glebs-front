import { getTranslations } from 'next-intl/server';

import Separator from '@/components/ui/separator';

export default async function ReturnPolicyPage() {
	const t = await getTranslations();
	return (
		<div className="px-20 py-6">
			<div className="text-3xl font-semibold p-2">
				<p>{t('return-policy')}</p>
			</div>
			<Separator />
			<div className="text-2xl font-medium p-2">
				<p>{t('warranty-obligations')}</p>
			</div>
			<div>
				<p>
					{t(
						'dronotorba-products-are-covered-by-a-warranty-that-confirms-the-obligation-to-ensure-that-the-product-is-free-from-factory-defects-the-warranty-is-provided-for-a-period-of-14-calendar-days-from-the-date-of-purchase-in-our-online-store-provided-that-the-product-has-not-been-used',
					)}
					<br />
					<br />
					{t(
						'pay-special-attention-to-checking-the-completeness-and-absence-of-defects-in-the-product-upon-receipt-at-the-offices-of-courier-delivery-services',
					)}
				</p>
			</div>
			<div className="text-2xl font-medium p-2">
				<p>{t('replacement-or-return-the-product')}</p>
			</div>
			<div>
				<p>
					{t(
						'you-can-replace-or-return-the-product-within-14-days-after-purchase-in-accordance-with-the-consumer-protection-act',
					)}
					<br />
					<br />
					{t(
						'the-return-procedure-is-carried-out-by-the-buyer-returning-the-product-purchased-in-the-dronotorba-online-store-followed-by-a-refund-to-the-buyer',
					)}
					<br />
					<br />
					{t('returns-are-possible-only-in-the-following-cases')}
				</p>
				<div className="p-1">
					<ul>
						<li>
							{t(
								'if-there-are-no-signs-of-use-or-wear-of-the-product-scratches-snags-scuffs-tears-etc',
							)}
						</li>
						<li>{t('the-original-dronotorba-labels-are-still-intact')}</li>
						<li>{t('if-the-integrity-of-the-package-is-not-compromised')}</li>
						<li>
							{t(
								'if-the-selected-backpack-does-not-fit-you-we-will-exchange-it-provided-that-the-backpack-was-only-tried-on-and-retained-its-original-appearance',
							)}
						</li>
					</ul>
				</div>
				<br />
				<div>
					<p>
						{t(
							'you-can-get-more-detailed-information-on-the-replacement-or-return-of-product-by-contacting-us-by-phone-or-e-mail-in-this-case-you-must-specify',
						)}
					</p>
				</div>
				<div className="p-1">
					<ul>
						<li>{t('order-number')}</li>
						<li>{t('the-reason-for-the-return-or-exchange')}</li>
						<li>{t('in-case-of-return-details-for-transferring-funds')}</li>
						<li>
							{t(
								'in-case-of-exchange-the-product-for-which-you-want-to-exchange-the-previously-purchased-product',
							)}
						</li>
					</ul>
				</div>
				<br />
				<div>
					<p>
						{t(
							'replacement-or-return-of-product-is-carried-out-using-the-courier-service-that-you-used-when-ordering',
						)}
					</p>
				</div>
				<br />
				<div>
					<p>
						{t(
							'if-the-product-is-returned-due-to-a-factory-defect-all-transportation-costs-are-paid-by-our-company-in-this-case-when-sending-indicate-in-the-declaration-that-the-recipient-paid-for-the-parcel',
						)}
					</p>
				</div>
			</div>
		</div>
	);
}
