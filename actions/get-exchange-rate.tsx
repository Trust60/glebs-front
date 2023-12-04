import { ExchangeRate } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_NBU_URL}`;

const getExchangeRate = async (): Promise<ExchangeRate | null> => {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		const usdExchangeRate = data.find((rate: ExchangeRate) => rate.txt === 'Долар США');

		return usdExchangeRate || null;
	} catch (error) {
		console.error('Error fetching exchange rate:', error);
		return null;
	}
};

export default getExchangeRate;
