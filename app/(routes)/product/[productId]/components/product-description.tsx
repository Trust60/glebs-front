'use client';

import { useState } from 'react';

const ProductDescription = ({ data }: { data: string }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div>
			{data.length > 200 ? (
				<p>
					{isExpanded ? data : `${data.slice(0, 200)}...`}
					<span className="text-lime-600 font-semibold cursor-pointer" onClick={handleClick}>
						{isExpanded ? 'show-less' : 'show-more'}
					</span>
				</p>
			) : (
				<p>{data}</p>
			)}
		</div>
	);
};

export default ProductDescription;
