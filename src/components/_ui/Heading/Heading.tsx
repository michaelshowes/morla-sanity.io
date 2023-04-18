// Heading Component

import scss from './heading.module.scss';

type HeadingProps = {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	styleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	text: string;
};

export function Heading({ tag, styleAs, text }: HeadingProps) {
	return (
		<>
			{/* H1 */}
			{tag === 'h1' && (
				<h1
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h1>
			)}

			{/* H2 */}
			{tag === 'h2' && (
				<h2
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h2>
			)}

			{/* H3 */}
			{tag === 'h3' && (
				<h3
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h3>
			)}

			{/* H4 */}
			{tag === 'h4' && (
				<h4
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h4>
			)}

			{/* H5 */}
			{tag === 'h5' && (
				<h5
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h5>
			)}

			{/* H6 */}
			{tag === 'h6' && (
				<h6
					className={`${scss.heading} ${styleAs ? scss[styleAs] : scss[tag]}`}
				>
					{text}
				</h6>
			)}
		</>
	);
}
