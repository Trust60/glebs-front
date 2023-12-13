import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	defaultLocale: 'en',
	locales: ['en', 'uk'],
	localePrefix: 'always',
});

export const config = {
	matcher: ['/', '/(uk|en)/:path*'],
};
