'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDown, Clock, Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';

import telegram from '@/images/icons/telegram.svg';
import instagram from '@/images/icons/instagram.svg';
import viber from '@/images/icons/viber.svg';
import whatsapp from '@/images/icons/whatsapp.svg';
import facebook from '@/images/icons/facebook.svg';
import Separator from './ui/separator';

const Footer = () => {
	const t = useTranslations();
	return (
		<>
			<div className="flex flex-col text-white px-5 py-4 md:px-10 bg-neutral-800 relative md:hidden">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left font-medium">
								<span>{t('contacts')}</span>
								<ChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pb-2 pt-4 flex flex-col gap-2 text-gray-300/60">
								<div className="flex flex-row gap-2 items-center">
									<div>
										<Phone className="w-4 h-4" />
									</div>
									<div>
										<p>+380 (73) 429-65-29</p>
									</div>
								</div>
								<div className="flex flex-row gap-2 items-center">
									<div>
										<Mail className="w-4 h-4" />
									</div>
									<div>
										<p>dronotorba@gmail.com</p>
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
								<span>{t('information')}</span>
								<ChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-300/60">
								<ul className="flex flex-col gap-2">
									<li>
										<Link href={'/category'}>{t('products')}</Link>
									</li>
									<li>
										<Link href={'/about'}>{t('about-us')}</Link>
									</li>
									<li>
										<Link href={'/contact'}>{t('contact-us')}</Link>
									</li>
									<li>
										<Link href={'/'}>{t('delivery-and-payment')}</Link>
									</li>
								</ul>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<div className="flex flex-col px-4 mt-2 mb-5">
					<div className=" py-2">
						<p className="font-medium mb-2">{t('social-media')}</p>
					</div>
					<div className="flex flex-row gap-5">
						<a
							href="https://www.instagram.com/dronotorba/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={instagram} width={35} height={35} alt="instagram icon" />
						</a>
						<a
							href="https://www.facebook.com/Gleb.and.Alina.military.equipment/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={facebook} width={35} height={35} alt="facebook icon" />
						</a>
						<Image src={telegram} width={35} height={35} alt="telegram icon" />
						<Image src={viber} width={35} height={35} alt="viber icon" />
						<Image src={whatsapp} width={35} height={35} alt="whatsapp icon" />
					</div>
				</div>
				<Separator />
				<div className="text-center mt-4 text-sm mb-5">
					<p>© 2023. {t('dronotorba')}</p>
				</div>
				<div className="flex text-sm flex-col gap-3 justify-center sm:flex-row text-gray-300/60">
					<div>
						<p>{t('privacy-policy')}</p>
					</div>
					<div>
						<p>{t('terms-and-conditions')}</p>
					</div>
					<div>
						<Link href={'/public-offer'}>
							<p>{t('public-offer')}</p>
						</Link>
					</div>
					<div>
						<p>{t('return-policy')}</p>
					</div>
				</div>
			</div>
			<div className="hidden flex-col text-white px-5 py-4 md:px-10 bg-neutral-800 relative md:flex">
				<div className=" flex text-2xl font-semibold my-5">
					<p>{t('dronotorba')}</p>
				</div>
				<div className="flex flex-row justify-between gap-10 px-20 mb-5">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-2 items-center">
							<div>
								<Clock className="w-4 h-4" />
							</div>
							<div>
								<p>10:00 - 18:00</p>
							</div>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<div>
								<Mail className="w-4 h-4" />
							</div>
							<div>
								<p>dronotorba@gmail.com</p>
							</div>
						</div>
						<div className="flex flex-row gap-2 items-center">
							<div>
								<Phone className="w-4 h-4" />
							</div>
							<div>
								<p>+380 (73) 429-65-29</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="text-xl mb-5 -mt-12">
							<p>{t('information')}</p>
						</div>
						<ul className="flex flex-col gap-2">
							<li>
								<Link href={'/category'}>{t('products')}</Link>
							</li>
							<li>
								<Link href={'/about'}>{t('about-us')}</Link>
							</li>
							<li>
								<Link href={'/contact'}>{t('contact-us')}</Link>
							</li>
							<li>
								<Link href={'/'}>{t('delivery-and-payment')}</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col">
						<div>
							<p className="text-xl mb-5 -mt-12">{t('social-media')}</p>
						</div>
						<div className="flex flex-row gap-3">
							<a
								href="https://www.instagram.com/dronotorba/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src={instagram} width={35} height={35} alt="instagram icon" />
							</a>
							<a
								href="https://www.facebook.com/Gleb.and.Alina.military.equipment/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src={facebook} width={35} height={35} alt="facebook icon" />
							</a>
							<Image src={telegram} width={35} height={35} alt="telegram icon" />
							<Image src={viber} width={35} height={35} alt="viber icon" />
							<Image src={whatsapp} width={35} height={35} alt="whatsapp icon" />
						</div>
					</div>
				</div>
				<Separator />
				<div className="flex items-center text-xs mt-4 md:flex-col md:gap-3 lg:flex-row">
					<div className="">
						<p>
							© 2023 {t('dronotorba')}. {t('all-rights-reserved')}
						</p>
					</div>
					<div className="flex flex-row justify-end w-3/5 gap-5 md:w-full md:justify-center lg:w-3/5 lg:justify-end">
						<div>
							<p>{t('privacy-policy')}</p>
						</div>
						<div>
							<p>{t('terms-and-conditions')}</p>
						</div>
						<div>
							<Link href={'/public-offer'}>
								<p>{t('public-offer')}</p>
							</Link>
						</div>
						<div>
							<p>{t('return-policy')}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
