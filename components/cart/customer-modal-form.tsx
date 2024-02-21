import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import Button from '../ui/button';
import useCart from '@/hooks/use-cart';
import Input from '../ui/input';
import { useTranslations } from 'next-intl';

type FormInputs = {
	firstName: string;
	phone: string;
	country: string;
	city: string;
	address: string;
};

const CustomerModalForm = () => {
	const t = useTranslations();

	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	const [isOpen, setIsOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({
		defaultValues: {
			country: t('ukraine'),
			phone: '+380',
		},
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		try {
			const responseArray = await Promise.all([
				axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
					...data,
					productIds: items.map((item) => item.id),
				}),
				axios.post('https://hook.eu2.make.com/pyw6iqkuorywlfedmm6fj2yum1ysgxby', {
					...data,
					productIds: items.map((item) => item.id),
				}),
			]);

			const allRequestsSuccessful = responseArray.every((response) => response.status === 200);

			if (allRequestsSuccessful) {
				toast.success(t('the-order-has-been-placed-successfully'));
				removeAll();
			}
		} catch (error) {
			toast.success(t('something-went-wrong'));
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
				{t('checkout')}
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
										{t('fill-out-the-fields')}{' '}
									</Dialog.Title>
									<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
										<label>{t('first-name')}</label>
										<Input
											register={register}
											formField="firstName"
											error={errors?.firstName?.message}
											placeholder={t('john')}
											type="text"
											options={{
												required: {
													value: true,
													message: t('name-is-required'),
												},
												maxLength: {
													value: 20,
													message: t('name-is-too-long'),
												},
												minLength: {
													value: 2,
													message: t('name-is-too-short'),
												},
												pattern: {
													value: /^[A-Za-zА-Яа-яЁёІіЇїєЄ'']+$/,
													message: t('name-should-only-contain-letters'),
												},
											}}
										/>
										<label>{t('phone-number')}</label>
										<Input
											register={register}
											formField="phone"
											error={errors?.phone?.message}
											options={{
												required: {
													value: true,
													message: t('phone-number-is-required'),
												},
												pattern: {
													value: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
													message: t('phone-number-is-not-valid'),
												},
											}}
											type="text"
										/>
										<label>{t('country')}</label>
										<Input
											register={register}
											formField="country"
											error={errors?.country?.message}
											type="text"
											options={{
												required: {
													value: true,
													message: t('country-is-required'),
												},
												minLength: {
													value: 2,
													message: t('value-is-too-short'),
												},
											}}
										/>
										<label>{t('city')}</label>
										<Input
											register={register}
											formField="city"
											error={errors?.city?.message}
											placeholder={t('kyiv')}
											type="text"
											options={{
												required: {
													value: true,
													message: t('city-is-required'),
												},
												minLength: {
													value: 2,
													message: t('value-is-too-short'),
												},
											}}
										/>
										<label>{t('address')}</label>
										<Input
											register={register}
											formField="address"
											error={errors?.address?.message}
											placeholder={t('street-building')}
											type="text"
											options={{
												required: {
													value: true,
													message: t('address-is-required'),
												},
												minLength: {
													value: 2,
													message: t('address-is-too-short'),
												},
											}}
										/>
										<Button className="border-black text-black mt-5" type="submit">
											{t('submit')}{' '}
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
