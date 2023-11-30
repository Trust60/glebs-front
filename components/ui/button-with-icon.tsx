import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactElement;
}

const ButtonWithIcon = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, icon, disabled, type = 'button', ...props }, ref) => {
		return (
			<button
				type={type}
				className={cn(
					`
        w-auto 
        rounded-lg 
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
        flex
        gap-2
        items-center
        justify-center
      `,
					disabled && 'opacity-75 cursor-not-allowed',
					className,
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			>
				<div>{icon}</div>
				<div>{children}</div>
			</button>
		);
	},
);

ButtonWithIcon.displayName = 'Button';

export default ButtonWithIcon;
