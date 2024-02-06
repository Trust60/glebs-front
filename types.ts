export interface Billboard {
	id: string;
	label: string;
	imagePath: string;
}

export interface Category {
	id: string;
	name: string;
	billboards: Billboard;
}

export interface Product {
	id: string;
	category: Category;
	name: string;
	price: string;
	quantity: number;
	isFeatured: boolean;
	isArchived: boolean;
	sortBy: string;
	description: string;
	keyinfoId: string;
	status: string;
	images: Image[];
}

export interface Keyinfo {
	name: string;
	country: string;
	volume: string;
	material: string;
	weight: string;
	construction: string;
	colors: Color[];
	size: Size;
	dimensions: Dimensions;
}

export interface Image {
	id: string;
	url: string;
}

export interface Color {
	id: string;
	name: string;
	value: string;
}

export interface Size {
	id: string;
	name: string;
	value: string;
}

export interface Dimensions {
	id: string;
	value: string;
	length: string;
	width: string;
	height: string;
}

export interface ExchangeRate {
	r030: number;
	txt: string;
	rate: number;
	cc: string;
	exchangedate: string;
}
