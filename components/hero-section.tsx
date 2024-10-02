"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import img1 from "@/images/1_1.png";
import img2 from "@/images/1_2.png";
import img3 from "@/images/1_3.png";
import img4 from "@/images/2_1.png";
import img5 from "@/images/2_2.png";
import img6 from "@/images/2_2.png";
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
          <div className="w-full 2xl:h-[80vh] relative">
            <Image
              src={img1}
              fill
              className="object-cover object-top"
              priority={true}
              alt="banner-image"
            />
            <div className="absolute z-20 bottom-6 right-3/4">
				      <Link href={`/category`}>
 				        <Button className="text-base xl:text-2xl px-5 py-2 bg-white text-green-800">{t('pridbati')}</Button>
 				      </Link>
 			      </div>
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
        <SwiperSlide>
          <div className="w-full 2xl:h-[80vh]">
            <Image
              src={img2}
              fill
              className="object-cover object-top"
              priority={true}
              alt="banner-image"
            />
            <div className="absolute z-20 bottom-6 left-3/4">
				      <Link href={`/category`}>
 				        <Button className="text-base xl:text-2xl px-5 py-2 bg-white text-green-800">{t('pridbati')}</Button>
 				      </Link>
 			      </div>
          </div>
          <div className="w-full h-[70vh] xl:hidden">
            <Image
              src={img5}
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
              src={img3}
              fill
              className="object-cover object-top"
              priority={true}
              alt="banner-image"
            />
            <div className="absolute z-20 bottom-6 left-3/4">
				      <Link href={`/category`}>
 				        <Button className="text-base xl:text-2xl px-5 py-2 bg-white text-green-800">{t('pridbati')}</Button>
 				      </Link>
 			      </div>
          </div>
          <div className="w-full h-[70vh] xl:hidden">
            <Image
              src={img6}
              fill
              className="object-cover"
              priority={true}
              alt="banner-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
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
