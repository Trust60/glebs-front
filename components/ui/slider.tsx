'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Product } from '@/types';
import { Skeleton } from './skeleton';

import 'swiper/css';
import 'swiper/css/pagination';

type SliderProps = {
	data: Product;
};

const Slider = ({ data }: SliderProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				slidesPerView={1}
				spaceBetween={10}
			>
				{data.images.map((image) => (
					<SwiperSlide key={image.id}>
						<div className="w-full h-[70vh]">
							{!imageLoaded && <Skeleton className="w-full h-[70vh] rounded-xl bg-neutral-900/5" />}
							<Image
								className={`object-cover rounded-xl ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
								src={image.url}
								alt={image.id}
								fill
								quality={100}
								onLoad={() => setImageLoaded(true)}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
