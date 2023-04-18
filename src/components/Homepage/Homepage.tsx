import HomeHero from '@blocks/HomeHero/HomeHero';
import Component from '@components/_helpers/ComponentRenderer';

type Props = {
	page: Page & {
		blocks: TextBlock[];
	};
};

export default function Homepage({ page }: Props) {
	return (
		<>
			{/* @ts-ignore */}
			<HomeHero block={page.homeHero} />
			{!page.blocks && <div>There are no components</div>}
			{page.blocks?.map((block, key) => (
				<Component
					key={key}
					block={block}
				/>
			))}
		</>
	);
}
