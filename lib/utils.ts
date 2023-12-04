import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const convertPrice = (price: number, exchangeRate: number, params: string) => {
	if (params === 'en') {
		const convertedPrice = price / exchangeRate;
		const roundedPrice = Math.floor(convertedPrice * 10) / 10;
		return roundedPrice.toFixed(2);
	} else {
		return price;
	}
};
