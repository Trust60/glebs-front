import Image from 'next/image';

const Loading = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<Image
				src={'https://i.imgur.com/cntHkeJ.gif'}
				alt="Loading"
				width={150}
				height={150}
				className="rounded-full"
			/>
		</div>
	);
};

export default Loading;
