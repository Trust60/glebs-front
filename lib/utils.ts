import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const navItems = [
	{ id: 0, name: 'Main', slug: '/' },
	{ id: 1, name: 'Categories', slug: '/categories' },
	{ id: 2, name: 'About us', slug: '/about' },
	{ id: 3, name: 'Contact', slug: '/contact' },
];
