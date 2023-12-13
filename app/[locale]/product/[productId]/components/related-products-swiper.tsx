'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/types';

import 'swiper/css';

import ProductCard from '@/components/product-card';
import PrevSlider from '@/components/slider/components/prev-slider';
import NextSlider from '@/components/slider/components/next-slider';
import { MutableRefObject, useRef } from 'react';

interface ProductsListProps {
	items: Product[];
	params: string;
}

const RelatedProductsSwiper: React.FC<ProductsListProps> = ({ items, params }) => {
	const swiperRef: MutableRefObject<any> = useRef();
	return (
		<div className="relative md:mx-10 my-7">
			<PrevSlider swiperRef={swiperRef} classname={'z-10 md:-left-10 lg:-left-14 xl:-left-14'} />
			<Swiper
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				slidesPerView={2}
				spaceBetween={10}
				breakpoints={{
					'640': {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					'768': {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					'1280': {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<ProductCard data={item} params={params} />
					</SwiperSlide>
				))}
			</Swiper>
			<NextSlider swiperRef={swiperRef} classname={'z-10 md:-right-10 lg:-right-14 xl:-right-14'} />
		</div>
	);
};

export default RelatedProductsSwiper;
