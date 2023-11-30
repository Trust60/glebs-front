'use client';

import { cn } from '@/lib/utils';
import { ChevronsUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollToTopArrow: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		setIsVisible(scrollTop > 200);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={cn(
				'scroll-to-top fixed bottom-5 right-5 cursor-pointer transition-all duration-300 ease-in-out',
				isVisible ? 'translate-y-0' : 'translate-y-[130%]',
			)}
			onClick={scrollToTop}
		>
			<ChevronsUp className="w-10 h-10 hover:scale-110 transition-all " />
		</div>
	);
};

export default ScrollToTopArrow;
