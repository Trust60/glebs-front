import { useEffect, useState } from 'react';

import CartItem from './cart-item';
import Summary from './summary';

interface CartModalProps {
	data: {
		items: any[];
	};
}

const CartModal: React.FC<CartModalProps> = ({ data }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<div className="px-4">
			<div className="text-2xl font-bold">
				<p>shopping-cart</p>
			</div>
			<div className="mt-6 gap-x-12">
				<div className="">
					{data.items.length === 0 && <p className="text-neutral-500">the-cart-is-empty</p>}
					<ul>
						{data.items.map((item) => (
							<CartItem key={item.id} data={item} />
						))}
					</ul>
					<Summary />
				</div>
			</div>
		</div>
	);
};

export default CartModal;
