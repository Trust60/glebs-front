"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import img1 from "@/images/1_1.jpg";
import img2 from "@/images/1_2.png";
import img3 from "@/images/2_1.png";
import img4 from "@/images/2_2.png";
import Button from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

import "swiper/css";

export default function App() {
	const t = useTranslations();
  return (
    <div className="mx-2 2xl:mx-40 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full 2xl:h-[80vh]">
            <Image
              src={img1}
              fill
              className="object-cover"
              priority={true}
              alt="banner-image"
            />
          </div>
          <div className="w-full h-[70vh] xl:hidden">
            <Image
              src={img3}
              fill
              className="object-cover"
              priority={true}
              alt="banner-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full 2xl:h-[80vh]">
            <Image
              src={img2}
              fill
              className="object-cover"
              priority={true}
              alt="banner-image"
            />
          </div>
          <div className="w-full h-[70vh] xl:hidden">
            <Image
              src={img4}
              fill
              className="object-cover"
              priority={true}
              alt="banner-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
	  <div className="bg-gradient-to-r from-transparent to-black absolute top-0 z-10 w-full h-full" />
 			<div className="absolute z-20 w-1/2 top-1/4 right-0 flex justify-center items-center flex-col gap-1 xl:gap-4">
 				<div className="text-lg text-center xl:text-3xl text-white font-bold mb-2 xl:mb-10">{t('ryukzaki-dlya-droniv')}</div>
 				<div className="hidden xl:block text-center text-white text-base xl:text-lg mx-2 xl:mx-10">
 					{t('mi-z-gordistyu-predstavlyayemo-sebe-yak-virobnika-yakii-ne-tilki-stvoryuye-a-i-vtilyuye-v-zhittya-ideyi-ta-innovaciyi-dlya-tikh-khto-zanuryuyetsya-u-svit-droniv')}	</div>
 				<div className="xl:hidden text-center text-white text-base xl:text-lg mx-2 xl:mx-10">
				 {t('we-are-proud-to-introduce-ourselves-as-a-manufacturer-of-drone-backpacks')}	</div>
				<Link href={`/category`}>
 				<Button className="text-base xl:text-xl border-2 border-white mt-10">{t('pridbati')}</Button>
 				</Link>
 			</div>
    </div>
  );
}

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import img1 from '@/images/1_1.jpg';
// import img2 from '@/images/1_2.png';
// import img3 from '@/images/2_1.png';
// import img4 from '@/images/2_2.png';
// import img5 from '@/images/2_3.png';
// import Button from './ui/button';
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';

// const HeroSection = () => {
// 	const t = useTranslations();
// 	return (
// 		<div className="mx-40 relative">
// 			<Swiper slidesPerView={1} spaceBetween={10} autoplay>
// 				<SwiperSlide>
// 					<div className="w-full 2xl:h-[80vh]">
// 						<Image src={img1} fill className="object-cover" priority={true} alt="banner-image" />
// 					</div>
// 					<div className="w-full h-[70vh] xl:hidden">
// 						<Image src={img3} fill className="object-cover" priority={true} alt="banner-image" />
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="w-full 2xl:h-[80vh]">
// 						<Image src={img2} fill className="object-cover" priority={true} alt="banner-image" />
// 					</div>
// 					<div className="w-full h-[70vh] xl:hidden">
// 						<Image src={img4} fill className="object-cover" priority={true} alt="banner-image" />
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="w-full h-[70vh] xl:hidden">
// 						<Image src={img5} fill className="object-cover" priority={true} alt="banner-image" />
// 					</div>
// 				</SwiperSlide>
// 			</Swiper>
// 			<div className="bg-gradient-to-r from-transparent to-black absolute top-0 z-10 w-full h-full" />
// 			<div className="absolute z-20 w-1/2 top-1/4 right-0 flex justify-center items-center flex-col gap-4">
// 				<div className="text-3xl text-white font-bold mb-10">{t('ryukzaki-dlya-droniv')}</div>
// 				<div className="text-center text-white text-lg mx-10">
// 					{t('mi-z-gordistyu-predstavlyayemo-sebe-yak-virobnika-yakii-ne-tilki-stvoryuye-a-i-vtilyuye-v-zhittya-ideyi-ta-innovaciyi-dlya-tikh-khto-zanuryuyetsya-u-svit-droniv')}	</div>
// 				<Link href={`/category`}>
// 				<Button className="text-xl border-2 border-white mt-10">{t('pridbati')}</Button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default HeroSection;
