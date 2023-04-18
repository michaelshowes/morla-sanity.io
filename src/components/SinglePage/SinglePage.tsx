import Component from '@components/_helpers/ComponentRenderer';

type Props = {
	page: Page;
};

export default function SinglePage({ page }: Props) {
	return (
		<>
			{page.blocks?.map((block, key) => (
				<Component
					key={key}
					block={block}
				/>
			))}
		</>
	);
}
