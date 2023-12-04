'use client';

import { MutableRefObject, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, FreeMode, Zoom } from 'swiper/modules';

import { Product } from '@/types';
import { Skeleton } from '../ui/skeleton';
import PrevSlider from './components/prev-slider';
import NextSlider from './components/next-slider';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

type SliderProps = {
	data: Product;
};

const Slider = ({ data }: SliderProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
	const swiperRef: MutableRefObject<any> = useRef();

	return (
		<>
			<div className="block sm:hidden">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					zoom={true}
					modules={[Pagination, Zoom]}
					slidesPerView={1}
					spaceBetween={10}
				>
					{data.images.map((image) => (
						<SwiperSlide key={image.id}>
							<div className="swiper-zoom-container">
								<div className="block w-full h-[70vh]">
									{!imageLoaded && (
										<Skeleton className="w-full h-[70vh] rounded-xl bg-neutral-900/10" />
									)}
									<Image
										className={`object-cover rounded-xl ${
											imageLoaded ? 'opacity-100' : 'opacity-0'
										}`}
										src={image.url}
										alt={image.id}
										priority={true}
										fill
										onLoad={() => setImageLoaded(true)}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="px-20 relative hidden sm:block xl:px-36">
				<PrevSlider swiperRef={swiperRef} />
				<Swiper
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					thumbs={{ swiper: thumbsSwiper }}
					zoom={true}
					modules={[FreeMode, Navigation, Thumbs, Zoom]}
					slidesPerView={1}
				>
					{data.images.map((image) => (
						<SwiperSlide key={image.id}>
							<div className="swiper-zoom-container">
								<div className="block w-full h-[600px]">
									{!imageLoaded && (
										<Skeleton className="w-full h-[600px] rounded-xl bg-neutral-900/10" />
									)}

									<Image
										className={`object-cover rounded-xl ${
											imageLoaded ? 'opacity-100' : 'opacity-0'
										}`}
										src={image.url}
										alt={image.id}
										priority={true}
										fill
										sizes="(min-width: 640px) 80vw"
										quality={100}
										onLoad={() => setImageLoaded(true)}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<NextSlider swiperRef={swiperRef} />
			</div>
			<div className="px-10 py-5 hidden sm:block">
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={6}
					breakpoints={{
						768: {
							slidesPerView: 5,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 10,
						},
						1280: {
							slidesPerView: 7,
							spaceBetween: 10,
						},
					}}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
				>
					{data.images.map((image) => (
						<SwiperSlide key={image.id}>
							<div className="block w-[80px] h-[100px]">
								{!imageLoaded && (
									<Skeleton className="w-[80px] md:w-[75px] lg:w-[100px] h-[100px] rounded-xl bg-neutral-900/10" />
								)}
								<Image
									className={`object-cover rounded-xl ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
									src={image.url}
									alt={image.id}
									fill
									sizes="(min-width: 640px) 80px, (min-width: 768px) 75px, min-width: 1024px) 100px"
									quality={100}
									onLoad={() => setImageLoaded(true)}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Slider;
