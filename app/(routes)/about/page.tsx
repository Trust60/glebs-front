import Image from 'next/image';

import Separator from '@/components/ui/separator';

export default async function AboutPage() {
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
					<p className="text-2xl lg:text-3xl text-center mb-2">welcome-to-the-dronotorbas-world</p>

					<p className="mb-4">
						your-trusted-partner-in-drone-backpacks-we-proudly-present-ourselves-as-a-manufacturer-that-not-only-creates-but-also-brings-to-life-ideas-and-innovations-for-those-who-are-diving-into-the-world-of-drones,
					</p>

					<p className="mb-4">
						our-mission-is-not-just-to-sell-backpacks-but-also-to-create-high-quality-and-functional-products-that-meet-all-the-needs-and-requirements-of-modern-drone-pilots-we-believe-in-combining-style-comfort-and-reliability-in-every-piece-that-leaves-our-production-facilities-production-facilities,
					</p>

					<p>
						dronetorba-is-not-just-a-brand-name-it-is-a-creative-space-where-ideas-are-born-and-dreams-come-true-we-dont-resell-we-design-and-sew-our-own-products-putting-our-love-of-aviation-and-desire-to-give-our-customers-something-special-into-each-design,
					</p>
				</div>
				<div className="p-4 rounded-lg bg-neutral-900/5 md:w-2/3 md:mx-auto lg:w-2/5 2xl:w-2/5">
					<div className="text-lg font-medium mb-2">
						<p>information-about-us</p>
					</div>
					<div className="flex justify-between py-2">
						<div>
							<p>name</p>
						</div>
						<div className="font-semibold">
							<p>dronotorba</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>type-of-company</p>
						</div>
						<div className="font-semibold">
							<p>manufacture</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>organizational-form</p>
						</div>
						<div className="font-semibold">
							<p>private-enterprise</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>location</p>
						</div>
						<div className="font-semibold">
							<p>kyiv-ukraine</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>year-of-foundation</p>
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
