'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import NavbarActions from './navbar-actions';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import Image from 'next/image';

type EventListener = (e: MouseEvent) => void;

const Navbar = () => {
	const navbarRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleDocumentClick: EventListener = (e) => {
			if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('click', handleDocumentClick);

		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);

	const t = useTranslations();

	return (
		<>
			<div
				className="flex items-center px-5 py-4 md:px-10 bg-neutral-800 relative z-30"
				ref={navbarRef}
			>
				<div
					className={cn(
						`flex relative items-center justify-start w-[24px] h-[18px] before:content-[''] before:absolute before:h-[2px] before:w-full before:bg-slate-200 before:transition-all before:duration-300 before:ease-in-out before:top-0 after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-slate-200 after:transition-all after:duration-300 after:ease-in-out after:bottom-0 md:hidden`,
						isMenuOpen &&
							'before:top-1/2 before:-rotate-45 before:-translate-y-1/2 after:bottom-1/2 after:rotate-45 after:translate-y-1/2',
					)}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span
						className={`h-0.5 w-full bg-slate-200 transition-all duration-300 ease-in-out ${
							isMenuOpen ? 'scale-0' : 'scale-100'
						}`}
					></span>
				</div>
				<div className="hidden items-center -my-4 md:my-0 md:flex md:flex-1 md:mr-20 ">
					<Link href={'/'}>
						<Image
							src={'https://i.imgur.com/BGc8FUU.png'}
							width={200}
							height={200}
							quality={100}
							alt="logo dronotorba"
						/>
					</Link>
				</div>

				<div className="relative w-52 h-14 justify-center items-center flex-1 -my-4 md:my-0 md:hidden">
					<Link href={'/'}>
						<Image
							src={'https://i.imgur.com/BGc8FUU.png'}
							fill
							className="object-contain"
							alt="logo dronotorba"
						/>
					</Link>
				</div>

				<div className="hidden md:flex md:flex-1 md:-mr-24 lg:mr-0 md:text-white xl:text-lg">
					<ul className="md:flex md:flex-row md:gap-5 md:translate-x-[-50%]">
						<li>
							<Link href={'/'}>{t('main')}</Link>
						</li>
						<li>
							<Link href={`/category`}>{t('products')}</Link>
						</li>
						<li>
							<Link href={'/about'}>{t('about-us')}</Link>
						</li>
						<li>
							<Link href={'/contact'}>{t('contact')}</Link>
						</li>
						<li>
							<Link href={'/payment-delivery'}>{t('delivery-and-payment')}</Link>
						</li>
					</ul>
				</div>

				<div className="text-white gap-3 hidden md:flex mr-5">
					<Link href={'/'} locale="en">
						EN
					</Link>
					<Link href={'/'} locale="uk">
						UK
					</Link>
				</div>
				<NavbarActions />
			</div>
			<div
				className={`${
					isMenuOpen ? 'translate-y-0' : '-translate-y-[130%]'
				} absolute z-20 w-full text-white text-xl text-center bg-neutral-800 border-t border-t-neutral-700 py-10 transition duration-300 ease-in-out`}
			>
				<ul className="space-y-7">
					<li>
						<Link href={'/'}>{t('main')}</Link>
					</li>
					<li>
						<Link href={`/category`}>{t('products')}</Link>
					</li>
					<li>
						<Link href={'/about'}>{t('about-us')}</Link>
					</li>
					<li>
						<Link href={'/contact'}>{t('contact')}</Link>
					</li>
				</ul>
				<div className="text-white gap-3 flex text-center justify-center mt-10">
					<Link href={'/'} locale="en">
						EN
					</Link>
					<Link href={'/'} locale="uk">
						UK
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
