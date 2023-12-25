import { Open_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

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

export const metadata: Metadata = {
	title: 'Dроноторба',
	description: 'Купляй рюкзаки для дронів у нас',
};

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
					<Footer />
					<ScrollToTopArrow />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
