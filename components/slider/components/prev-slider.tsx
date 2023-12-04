import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

const PrevSlider = ({ swiperRef, classname }: any) => {
	return (
		<button
			onClick={() => swiperRef.current?.slidePrev()}
			className={cn('absolute top-1/2 left-0 xl:left-20 -translate-y-1/2', classname)}
		>
			<ChevronLeft className="w-10 h-10" />
		</button>
	);
};

export default PrevSlider;
