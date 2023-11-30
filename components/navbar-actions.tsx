'use client';

import { Fragment, useEffect, useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

import useCart from '@/hooks/use-cart';
import IconButton from '@/components/ui/icon-button';
import CartModal from './cart/cart-modal';

const NavbarActions = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const cart = useCart();

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	if (!isMounted) return null;
	return (
		<>
			<div onClick={onOpen} className="relative ml-auto flex items-center">
				<ShoppingCart color="white" />
				<span className="absolute flex justify-center items-center rounded-full bg-white left-full bottom-2/3 h-4 w-4  text-sm font-bold">
					{cart.items.length}
				</span>
			</div>
			<Transition appear show={open} as={Fragment}>
				<Dialog open={open} as="div" className="relative z-40" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-x-full"
							enterTo="opacity-100 translate-x-0"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-x-0"
							leaveTo="opacity-0 translate-x-full"
						>
							<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs md:max-w-sm 2xl:max-w-md flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
								<div className="flex items-center justify-end px-4">
									<IconButton icon={<X size={15} />} onClick={onClose} />
								</div>
								<CartModal data={cart} />
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default NavbarActions;
