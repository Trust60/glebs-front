import { Clock, Home, Mail, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import ContactForm from './components/contact-form';
import { locales } from '@/config';
import { Metadata } from 'next';

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const t = await getTranslations({ locale });

	return {
		title: t('contacts'),
		description: t('address-phone-number-social-networks-of-the-company'),
	};
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

	unstable_setRequestLocale(params.locale);

	const t = await getTranslations();
	return (
		<div className="px-4 flex flex-col md:flex-row-reverse md:gap-20 lg:gap-32 md:justify-end md:px-16">
			<div className="flex flex-col gap-2">
				<div className="text-2xl mt-6 mb-2 md:mt-16">
					<p>{t('contacts')}</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Home className="w-4 h-4" />
					</div>
					<div>
						<p>{t('33-velyka-vasylkivska-street-kyiv-ukraine')}</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Phone className="w-4 h-4" />
					</div>
					<div>
						<p>{t('telephone')}: +380 (73) 429-65-29</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Mail className="w-4 h-4" />
					</div>
					<div>
						<p>
							{t('email')}: <a href="mailto:dronotorba@gmail.com">dronotorba@gmail.com</a>
						</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Clock className="w-4 h-4" />
					</div>
					<div>
						<p>{t('work-schedule')}: 10:00 - 18:00</p>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
}
