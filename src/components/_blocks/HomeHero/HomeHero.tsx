import urlFor from '@lib/sanity.image';
import Image from 'next/image';
import scss from './homeHero.module.scss';
import OrnamentBolt from '@assets/svg/ornament-bolt.svg';
import { Eyebrow } from '@components/_ui/Eyebrow/Eyebrow';
import { ButtonLink } from '@components/_ui/ButtonLink/ButtonLink';
import { Heading } from '@components/_ui/Heading/Heading';

type Props = {
	block: any;
};

export default function HomeHero({ block }: Props) {
	return (
		<section className={scss.homeHero}>
			<span
				className={scss.ornamentBolt}
				aria-hidden='true'
			>
				<OrnamentBolt />
			</span>
			<div className={scss.inner}>
				<div className={scss.image}>
					<Image
						src={urlFor(block.image).url()}
						alt={block.image.alt}
						width={block.image.width}
						height={block.image.height}
					/>
				</div>
				<header>
					{block.eyebrow && <Eyebrow text={block.eyebrow} />}
					<Heading
						tag='h1'
						text={block.title}
					/>
					{block.hasButton && (
						<ButtonLink
							label={block.link.label}
							href={`/${block.link.intUrl}`}
						/>
					)}
				</header>
			</div>
		</section>
	);
}
