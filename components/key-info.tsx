import { useTranslations } from 'next-intl';

import { Keyinfo as KeyinfoType } from '@/types';
import Separator from './ui/separator';

interface KeyinfoProps {
	items: KeyinfoType;
}

const Keyinfo: React.FC<KeyinfoProps> = ({ items }) => {
	const t = useTranslations();
	return (
		<div className="md:flex md:justify-center md:gap-8 md:mb-5 xl:mx-20 xl:mt-5 xl:mb-5">
			<div className="mt-6 p-4 -mx-4 md:mx-0 md:w-full rounded-lg bg-neutral-900/5">
				<div className="text-lg font-medium mb-2">
					<p>{t('key-information')}</p>
				</div>
				<div className="flex justify-between py-2">
					<div>
						<p>{t('country-of-manufacture')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.country}</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('volume')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.volume} L</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('colors')}</p>
					</div>
					<div className="font-semibold flex flex-row gap-1">
						{items.colors.map((color, index) => {
							return (
								<div key={color.id}>
									<p>
										{color.name}
										{index < items.colors.length - 1 ? ',' : ''}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('material')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.material}</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('weight')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.weight} kg</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('by-type-of-construction')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.construction}</p>
					</div>
				</div>
				<Separator />
			</div>
			<div className="mt-6 mb-8 p-4 -mx-4 md:mx-0 rounded-lg bg-neutral-900/5 md:w-full">
				<div className="text-lg font-medium mb-2">
					<p>{t('overall-dimensions')}</p>
				</div>
				<div className="flex justify-between py-2">
					<div>
						<p>{t('length')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.dimensions.length} cm</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('width')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.dimensions.width} cm</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{t('height')}</p>
					</div>
					<div className="font-semibold">
						<p>{items.dimensions.height} cm</p>
					</div>
				</div>
				<Separator />
			</div>
		</div>
	);
};

export default Keyinfo;
