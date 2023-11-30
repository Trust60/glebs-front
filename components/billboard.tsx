import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
	data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	return (
		<div className="relative p-4 rounded-lg">
			<div
				className="rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover"
				style={{ backgroundImage: `url(${data?.imagePath})` }}
			>
				<div className="w-full h-full flex flex-col justify-center items-center text-center pb-7">
					<div className="font-bold text-4xl max-w-xl">{data.label}</div>
				</div>
			</div>
		</div>
	);
};

export default Billboard;
