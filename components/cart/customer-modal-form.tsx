import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import Button from '../ui/button';
import useCart from '@/hooks/use-cart';
import Input from '../ui/input';

type FormInputs = {
	firstName: string;
	phone: string;
	country: string;
	city: string;
	address: string;
};

const CustomerModalForm = () => {
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({
		defaultValues: {
			country: 'Ukraine',
			phone: '+380',
		},
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
			...data,
			productIds: items.map((item) => item.id),
		});

		if (response.status === 200) {
			toast.success('The order has been placed successfully.');
			removeAll();
		}

		if (response.status === 400) {
			toast.success('Something went wrong.');
		}
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<>
			<Button
				type="button"
				onClick={openModal}
				disabled={items.length === 0}
				className="w-full mt-6 bg-neutral-900"
			>
				Checkout
			</Button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-40" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 mb-5 text-gray-900"
									>
										Fill out the fields
									</Dialog.Title>
									<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
										<label>First Name</label>
										<Input
											register={register}
											formField="firstName"
											error={errors?.firstName?.message}
											placeholder="John"
											type="text"
											options={{
												required: {
													value: true,
													message: 'Name is required',
												},
												maxLength: {
													value: 20,
													message: 'Name is too long',
												},
												minLength: {
													value: 2,
													message: 'Name is too short',
												},
												pattern: {
													value: /^[A-Za-zА-Яа-яЁёІіЇїєЄ'']+$/,
													message: 'Name should only contain letters',
												},
											}}
										/>
										<label>Phone number</label>
										<Input
											register={register}
											formField="phone"
											error={errors?.phone?.message}
											options={{
												required: {
													value: true,
													message: 'Phone number is required',
												},
												pattern: {
													value: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
													message: 'Phone number is not valid',
												},
											}}
											type="text"
										/>
										<label>Country</label>
										<Input
											register={register}
											formField="country"
											error={errors?.country?.message}
											type="text"
											options={{
												required: {
													value: true,
													message: 'Country is required',
												},
												minLength: {
													value: 2,
													message: 'Value is too short',
												},
											}}
										/>
										<label>City</label>
										<Input
											register={register}
											formField="city"
											error={errors?.city?.message}
											placeholder="Kyiv"
											type="text"
											options={{
												required: {
													value: true,
													message: 'City is required',
												},
												minLength: {
													value: 2,
													message: 'Value is too short',
												},
											}}
										/>
										<label>Address</label>
										<Input
											register={register}
											formField="address"
											error={errors?.address?.message}
											placeholder="Street, building"
											type="text"
											options={{
												required: {
													value: true,
													message: 'Address is required',
												},
												minLength: {
													value: 2,
													message: 'Address is too short',
												},
											}}
										/>
										<Button className="border-black text-black mt-5" type="submit">
											Submit
										</Button>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
export default CustomerModalForm;
