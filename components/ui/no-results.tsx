import { getTranslations } from 'next-intl/server';

const NoResults = async () => {
	const t = await getTranslations();
	return (
		<div className="flex items-center justify-center h-full w-full text-neutral-600">
			{t('no-results-found')}
		</div>
	);
};

export default NoResults;
