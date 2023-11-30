'use client';

import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

type FormFields = {
	name: string;
	email: string;
	message: string;
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormFields>({
		mode: 'onChange',
	});
	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
				name: data.name,
				email: data.email,
				message: data.message,
			});

			if (response.status === 200) {
				toast.success('The message has been sent successfully.');
				reset();
			} else {
				toast.error('Something went wrong.');
			}
		} catch (error) {
			console.error('Error sending the message:', error);
		}
	};
	return (
		<div className="mt-6 pb-4 md:w-2/3 lg:w-1/3 ">
			<div className="text-2xl mt-10 mb-2">
				<p>Send us a message</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
				<label>Name</label>
				<Input
					register={register}
					formField="name"
					error={errors?.name?.message}
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
				<label>E-mail</label>
				<Input
					register={register}
					formField="email"
					error={errors?.email?.message}
					type="text"
					options={{
						required: {
							value: true,
							message: 'Email is required',
						},
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
							message: 'Enter a valid email address',
						},
					}}
				/>
				<label>Your question or message</label>
				<textarea
					{...register('message', {
						required: {
							value: true,
							message: 'Message is required',
						},
						minLength: {
							value: 10,
							message: 'Message is too short',
						},
					})}
					className="border border-neutral-500/30 rounded py-2 px-3"
				/>
				{errors?.message?.type === 'required' && (
					<span className="text-red-600">Message is required</span>
				)}
				{errors?.message?.type === 'minLength' && (
					<span className="text-red-600">Message is too short</span>
				)}
				<Button className="text-black border-black" type="submit">
					Send a message
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
