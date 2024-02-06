import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';

type CartStore = {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
};

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: Product) => {
				const currentItems = get().items;
				const existingItem = currentItems.find((item) => item.id === data.id);

				if (existingItem) {
					const updatedItems = currentItems.map((item) =>
						item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item,
					);
					set({ items: updatedItems });
					return toast.success('Item quantity increased in cart.');
				}

				set({ items: [...currentItems, { ...data, quantity: 1 }] });
				toast.success('Item added to cart.');
			},
			removeItem: (id: string) => {
				set({ items: [...get().items.filter((item) => item.id !== id)] });
				toast.success('Item removed from cart.');
			},
			removeAll: () => set({ items: [] }),
			increaseQuantity: (id: string) => {
				const updatedItems = get().items.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
				);
				set({ items: updatedItems });
				toast.success('Item quantity increased in cart.');
			},
			decreaseQuantity: (id: string) => {
				const currentItems = get().items;
				const updatedItems = currentItems.map((item) =>
					item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
				);

				if (JSON.stringify(currentItems) !== JSON.stringify(updatedItems)) {
					set({ items: updatedItems });
					toast.success('Item quantity decreased in cart.');
				} else {
					toast.error('Cannot decrease quantity further.');
				}
			},
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useCart;
