'use client';

import BlockHeader from '@blocks/BlockHeader/BlockHeader';
import { RichTextComponents } from '@components/_helpers/RichTextComponents';
import { PortableText } from '@portabletext/react';
import './textBlock.scss';

type Props = {
	data: TextBlock;
};

export default function TextBlock({ data }: Props) {
	return (
		<section className='textBlock'>
			{data.hasHeader ? <BlockHeader data={data.header} /> : null}
			<div className='inner'>
				<PortableText
					value={data.wysiwyg}
					components={RichTextComponents}
				/>
			</div>
		</section>
	);
}
