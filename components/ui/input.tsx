'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { cn } from '@/lib/utils';

type PropsField = {
	formField: string;
	className?: string | undefined;
	placeholder?: string;
	register: UseFormRegister<any>;
	error?: string | undefined;
	options?: {
		required?:
			| string
			| {
					value: boolean;
					message: string;
			  };
		pattern?: {
			value: RegExp;
			message: string;
		};
		maxLength?: {
			value: number;
			message: string;
		};
		minLength?: {
			value: number;
			message: string;
		};
		max?: {
			value: number;
			message: string;
		};
		min?: {
			value: number;
			message: string;
		};
		validate?: any;
	};
	type: string;
};

const Input: React.FC<PropsField> = ({
	register,
	formField,
	className,
	placeholder,
	error,
	options,
	...rest
}) => {
	return (
		<div className="flex flex-col gap-1">
			<input
				{...rest}
				placeholder={placeholder}
				{...register(formField, options)}
				className={cn(
					'border border-neutral-500/30 rounded py-2 px-3',
					className,
					error && 'border-red-600',
				)}
			/>
			{error && <div className="text-sm text-red-600">{error}</div>}
		</div>
	);
};

export default Input;
