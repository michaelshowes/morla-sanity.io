// FiftyFifty Component
'use client';

import './fiftyFifty.scss';
import Image from 'next/image';
import { Heading } from '@components/_ui/Heading/Heading';
import { Eyebrow } from '@components/_ui/Eyebrow/Eyebrow';
import { ButtonLink } from '@components/_ui/ButtonLink/ButtonLink';
import urlFor from '@lib/sanity.image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@components/_helpers/RichTextComponents';

type FiftyFiftyProps = {
	data: {
		imagePosition: string;
		eyebrow: string;
		heading: string;
		wysiwyg: {
			content: string;
		};
		link: {
			label: string;
			intUrl: string;
		};
		image: {
			alt: string;
			width: number;
			height: number;
		};
		textContent: [];
	};
};

export default function FiftyFifty({ data }: FiftyFiftyProps) {
	const { imagePosition } = data;

	return (
		<section className='fiftyFifty'>
			<div className={`inner ${imagePosition == 'right' && 'imageRight'}`}>
				<ImageCol data={data} />
				<div className='spacer'></div>
				<ContentCol data={data} />
			</div>
		</section>
	);
}

function ContentCol({ data }: FiftyFiftyProps) {
	const { eyebrow, heading, link, textContent } = data;

	return (
		<div className='contentCol'>
			<Eyebrow text={eyebrow} />
			<Heading
				tag='h2'
				styleAs='h3'
				text={heading}
			/>
			<PortableText
				value={textContent}
				components={RichTextComponents}
			/>
			<ButtonLink
				label={link.label}
				href={link.intUrl}
			/>
		</div>
	);
}

function ImageCol({ data }: FiftyFiftyProps) {
	const { image } = data;

	return (
		<div className='imageCol'>
			<Image
				src={urlFor(image).url()}
				width={image.width}
				height={image.height}
				alt={image.alt}
			/>
		</div>
	);
}
