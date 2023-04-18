// Eyebrow Component

import scss from './eyebrow.module.scss';

import Squiggle from '@assets/svg/squiggle.svg';

type EyebrowProps = {
	text: string;
};

export function Eyebrow({ text = 'Eyebrow' }: EyebrowProps) {
	return (
		<div className={scss.eyebrow}>
			<span>{text}</span>
			<Squiggle />
		</div>
	);
}
