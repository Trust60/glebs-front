import { Open_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react"

import type { Metadata } from 'next';

import Navbar from '@/components/navbar';
import ToastProvider from '@/providers/toast-provider';
import ScrollToTopArrow from '@/components/scroll-to-top-arrow';
import Footer from '@/components/footer';

import { locales } from '@/config';

const font = Open_Sans({ subsets: ['latin'] });

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const t = await getTranslations({ locale });

	return {
		title: {
			default: t('dronotorba-seo'),
			template: `%s | ${t('dronotorba')}`,
		},
		description: t('vash-nadiinii-partner-u-virobnictvi-ryukzakiv-dlya-droniv'),
	};
}

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	if (!locales.includes(locale as any)) notFound();

	unstable_setRequestLocale(locale);

	let messages;
	try {
		messages = (
			await (locale === 'en'
				? import('../../messages/en.json')
				: import(`../../messages/${locale}.json`))
		).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={font.className}>
				<NextIntlClientProvider messages={messages}>
					<ToastProvider />
					<Navbar />
					{children}
					<Analytics/>
					<Footer />
					<ScrollToTopArrow />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
