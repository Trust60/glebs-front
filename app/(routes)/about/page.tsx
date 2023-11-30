import Separator from '@/components/ui/separator';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<div className="pb-10">
			<div className="relative w-full sm:w-3/4 md:w-2/3 2xl:w-2/4 h-[20vh] lg:h-[25vh] 2xl:h-[30vh] mb-3 sm:mx-auto">
				<Image
					src={'https://i.imgur.com/BGc8FUU.png'}
					fill
					objectFit="fill"
					alt="logo dronotorba"
				/>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-5">
				<div className="pb-5 px-3 lg:w-3/5 lg:px-7 2xl:w-2/5 2xl:ml-24">
					<p className="text-2xl lg:text-3xl text-center mb-2">{`Welcome to the DroneTorba's world `}</p>

					<p className="mb-4">
						Your trusted partner in drone backpacks. We proudly present ourselves as a manufacturer
						that not only creates, but also brings to life ideas and innovations for those who are
						diving into the world of drones.
					</p>

					<p className="mb-4">
						Our mission is not just to sell backpacks, but also to create high-quality and
						functional products that meet all the needs and requirements of modern drone pilots. We
						believe in combining style, comfort, and reliability in every piece that leaves our
						production facilities. production facilities.
					</p>

					<p>
						DroneTorba is not just a brand name, it is a creative space where ideas are born and
						dreams come true. We dont resell, we design and sew our own products, putting our love
						of aviation and desire to give our customers something special into each design.
					</p>
				</div>
				<div className="p-4 rounded-lg bg-neutral-900/5 md:w-2/3 md:mx-auto lg:w-2/5 2xl:w-2/5">
					<div className="text-lg font-medium mb-2">
						<p>Information about us:</p>
					</div>
					<div className="flex justify-between py-2">
						<div>
							<p>Name</p>
						</div>
						<div className="font-semibold">
							<p>DronoTorba</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>Type of company</p>
						</div>
						<div className="font-semibold">
							<p>Manufacture</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>Organizational form</p>
						</div>
						<div className="font-semibold">
							<p>Private enterprise</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>Location</p>
						</div>
						<div className="font-semibold">
							<p>Kyiv, Ukraine</p>
						</div>
					</div>
					<Separator />
					<div className="flex justify-between py-2">
						<div>
							<p>Year of foundation</p>
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
};

export default AboutPage;
