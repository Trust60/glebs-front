'use client';

import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronDown, Clock, Mail, Phone } from 'lucide-react';

const Footer = () => {
	return (
		<div className="flex flex-col text-white px-5 py-4 md:px-10 bg-neutral-800 relative">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left font-medium">
							<span>Contacts</span>
							<ChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pb-2 pt-4 flex flex-col gap-2 text-gray-300/60">
							<div className="flex flex-row gap-2 items-center">
								<div>
									<Phone className="w-4 h-4" />
								</div>
								<div>
									<p>+38 098 123 1212</p>
								</div>
							</div>
							<div className="flex flex-row gap-2 items-center">
								<div>
									<Mail className="w-4 h-4" />
								</div>
								<div>
									<p>mail@gamil.com</p>
								</div>
							</div>
							<div className="flex flex-row gap-2 items-center">
								<div>
									<Clock className="w-4 h-4" />
								</div>
								<div>
									<p>10:00 - 18:00</p>
								</div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure as="div" className="mt-2">
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left font-medium">
							<span>Information</span>
							<ChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-300/60">
							<ul className="flex flex-col gap-2">
								<li>
									<Link href={'/'}>Products</Link>
								</li>
								<li>
									<Link href={'/contact'}>Contact us</Link>
								</li>
								<li>
									<Link href={'/'}>Delivery and payment</Link>
								</li>
								<li>
									<Link href={'/'}>Returns</Link>
								</li>
							</ul>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<div className="text-center mt-4 text-sm">
				<p>© 2023. DronoTorba</p>
			</div>
		</div>
	);
};

export default Footer;
