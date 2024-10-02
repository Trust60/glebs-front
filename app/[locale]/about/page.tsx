import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Separator from '@/components/ui/separator';
import { locales } from '@/config';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale });

	return {
		title: t('about-dronotorba'),
		description: t('vash-nadiinii-partner-u-virobnictvi-ryukzakiv-dlya-droniv'),
	};
}

export default async function AboutPage({ params }: Props) {
	const isValidLocale = locales.some((cur) => cur === params.locale);
	if (!isValidLocale) notFound();

	unstable_setRequestLocale(params.locale);
	const t = await getTranslations();
	return (
		<div className="pb-10">
			<div className="relative w-full sm:w-3/4 md:w-2/3 2xl:w-2/4 h-[20vh] lg:h-[25vh] 2xl:h-[30vh] mb-3 sm:mx-auto">
				<Image
					src={'https://i.imgur.com/BGc8FUU.png'}
					fill
					className="object-fill"
					alt="logo dronotorba"
				/>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-5">
				<div className="pb-5 px-3 lg:w-3/5 lg:px-7 2xl:w-2/5 2xl:ml-24">
					<p className="text-2xl lg:text-3xl text-center mb-2">
						{t('welcome-to-the-dronotorbas-world')}
					</p>

					<p className="mb-4">
						{t(
							'dronetorba-workshop-is-a-ukrainian-manufacturer-of-secure-backpacks-and-bags-for-drones-we-offer-comfortable-and-reliable-backpacks-of-various-sizes-for-dji-mavic-autel-and-fpv-we-also-manufacture-starlink-backpacks-and-medical-backpacks-our-products-combine-high-quality-materials-thoughtful-construction-and-ergonomic-design-to-provide-the-best-protection-for-your-equipment-in-extreme-conditions',
						)}{' '}
					</p>

					<p className='font-semibold'>
						{t('advantages-of-our-drone-bags')}
					</p>

					<p className="mb-4">
						{t(
							'materials-all-products-are-made-of-high-quality-1000d-nylon-cordura-with-irr-treatment-not-glowing-in-the-dark-there-are-quality-certificates-high-density-belt-straps-zippers-and-runners-of-ucc-or-equivalent-velcro-nylon-velcro-polyester-lining-plastic-fittings-from-a-ukrainian-manufacturer-polyacetal', 
						)}{' '}
					</p>

					<p className="mb-4">
						{t(
							'protection-all-external-parts-walls-back-lids-are-sewn-with-2-mm-plastic-specially-designed-by-a-ukrainian-manufacturer-for-backpack-frames-this-provides-reliable-protection-for-the-contents-of-the-backpack-for-example-if-a-machine-gun-falls-on-it-strong-seams-and-high-quality-materials-allow-the-backpack-to-serve-for-a-long-time-even-in-military-conditions',
						)}{' '}
					</p>

					<p className="mb-4">
						{t(
							'modularity-all-internal-dividers-are-modular-with-velcro-closures-the-configuration-of-the-main-compartment-is-customized-to-your-needs-the-inner-membranes-are-half-10-mm-high-density-polyethylene-foam-the-other-half-is-2-mm-plastic-and-a-5-mm-layer-of-isolon-with-a-set-of-membranes-installed-the-backpack-can-withstand-a-load-of-60-kg-without-critical-deformation',
						)}{' '}
					</p>
					<p>
						{t(
							'drone-bags-are-not-as-noticeable-as-standard-dji-mavic-bags-and-autel-cases-the-shape-is-not-as-recognizable-and-we-sew-them-in-different-colors-8-camouflage-and-5-plain-colors-specify-if-necessary-so-our-aerial-reconnaissance-men-attract-less-attention-of-the-enemy',
						)}
					</p>
				</div>
				<div className="p-4 rounded-lg bg-neutral-900/5 md:w-2/3 md:mx-auto lg:w-2/5 2xl:w-2/5">
					<div className="text-lg font-medium mb-2">
						<p>{t('information-about-us')}</p>
					</div>
					<div className="flex justify-between py-2">
						<div>
							<p>{t('name')}</p>
						</div>
						<div className="font-semibold">
							<p>{t('dronotorba')}</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>{t('type-of-company')}</p>
						</div>
						<div className="font-semibold">
							<p>{t('manufacture')}</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>{t('organizational-form')}</p>
						</div>
						<div className="font-semibold">
							<p>{t('private-enterprise')}</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>{t('location')}</p>
						</div>
						<div className="font-semibold">
							<p>{t('kyiv-ukraine')}</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>{t('year-of-foundation')}</p>
						</div>
						<div className="font-semibold">
							<p>2023</p>
						</div>
					</div>
					<Separator />
				</div>
			</div>
		</div>
	);
}
