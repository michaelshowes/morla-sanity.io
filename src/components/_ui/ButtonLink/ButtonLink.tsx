// ButtonLink Component
'use client';

import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

import scss from './buttonLink.module.scss';

type DefaultButtonProps = {
	label: string;
	arrow?: boolean;
	disabled?: boolean;
};

type LinkProps = DefaultButtonProps & {
	link?: boolean;
	href?: string;
};

type ButtonProps = DefaultButtonProps & {
	label: string;
	arrow?: boolean;
	link?: never;
	href?: never;
};

type ButtonLinkProps = ButtonProps | LinkProps;

export function ButtonLink({
	label = 'Button',
	arrow,
	href = '#',
	link = false,
	disabled
}: ButtonLinkProps) {
	function handleClick() {
		alert('Yup, the button works!');
	}

	return (
		<>
			{!link ? (
				<button
					className={scss.button}
					onClick={handleClick}
					disabled={disabled}
				>
					<span>{label}</span>
					{arrow && <BiRightArrowAlt />}
				</button>
			) : (
				<Link
					href={href}
					className={scss.link}
				>
					<span>{label}</span>
					{arrow && <BiRightArrowAlt />}
				</Link>
			)}
		</>
	);
}
