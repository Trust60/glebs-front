import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const NextSlider = ({ swiperRef, classname }: any) => {
	return (
		<button
			onClick={() => swiperRef.current?.slideNext()}
			className={cn('absolute top-1/2 right-0 xl:right-20 -translate-y-1/2', classname)}
		>
			<ChevronRight className="w-10 h-10" />
		</button>
	);
};

export default NextSlider;
