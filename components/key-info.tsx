import { Keyinfo as KeyinfoType } from '@/types';
import Separator from './ui/separator';

interface KeyinfoProps {
	data: KeyinfoType;
}

const Keyinfo: React.FC<KeyinfoProps> = ({ data }) => {
	return (
		<>
			<div className="mt-6 p-4 -mx-4 rounded-lg bg-neutral-900/5">
				<div className="text-lg font-medium mb-2">
					<p>Key information</p>
				</div>
				<div className="flex justify-between py-2">
					<div>
						<p>Country of manufacture</p>
					</div>
					<div className="font-semibold">
						<p>{data.country}</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>Volume</p>
					</div>
					<div className="font-semibold">
						<p>{data.volume} L</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>{`Color's`}</p>
					</div>
					<div className="font-semibold flex flex-row gap-1">
						{data.colors.map((color, index) => {
							return (
								<div key={color.id}>
									<p>
										{color.name}
										{index < data.colors.length - 1 ? ',' : ''}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>Material</p>
					</div>
					<div className="font-semibold">
						<p>{data.material}</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>Weight</p>
					</div>
					<div className="font-semibold">
						<p>{data.weight} kg</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>By type of construction</p>
					</div>
					<div className="font-semibold">
						<p>{data.construction}</p>
					</div>
				</div>
				<Separator />
			</div>
			<div className="mt-6 mb-8 p-4 -mx-4 rounded-lg bg-neutral-900/5">
				<div className="text-lg font-medium mb-2">
					<p>Overall dimensions</p>
				</div>
				<div className="flex justify-between py-2">
					<div>
						<p>Length</p>
					</div>
					<div className="font-semibold">
						<p>{data.dimensions.length} cm</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>Width</p>
					</div>
					<div className="font-semibold">
						<p>{data.dimensions.width} cm</p>
					</div>
				</div>
				<Separator />
				<div className="flex justify-between py-2">
					<div>
						<p>Height</p>
					</div>
					<div className="font-semibold">
						<p>{data.dimensions.height} cm</p>
					</div>
				</div>
				<Separator />
			</div>
		</>
	);
};

export default Keyinfo;
