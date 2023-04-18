import scss from './blockHeader.module.scss';

type Props = {
	data: BlockHeader;
};

export default function BlockHeader({ data }: Props) {
	return (
		<div className={scss.blockHeader}>
			<div className={scss.inner}>
				<div className={scss.eyebrow}>{data.eyebrow}</div>
				<h2>{data.title}</h2>
				<p>{data.text}</p>
			</div>
		</div>
	);
}
