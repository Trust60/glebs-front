'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

type SliderProps = {
	data: {
		id: number;
		name: string;
		imagePath: string;
		slug?: string;
	}[];
};

const Slider = ({ data }: SliderProps) => {
	return (
		<>
			<Swiper slidesPerView={1} spaceBetween={10}>
				{data?.map((slide) => (
					<SwiperSlide key={slide.id}>
						{slide?.slug ? (
							<Link href={slide.slug}>
								<div className="w-full h-[50vh]">
									<Image
										className="object-cover"
										src={slide.imagePath}
										alt={slide.name}
										fill
										quality={100}
									/>
								</div>
							</Link>
						) : (
							<div className="w-full h-[70vh]">
								<Image
									className="object-cover rounded-xl"
									src={slide.imagePath}
									alt={slide.name}
									fill
									quality={100}
								/>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
