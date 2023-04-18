'use client';

import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@lib/sanity.image';
import '@styles/type/_rich-text.scss';
import YouTube from 'react-youtube';

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<figure className='rt'>
					<Image
						src={urlFor(value).url()}
						alt={value.alt ? value.alt : 'image'}
						width={1920}
						height={1275}
					/>
					<figcaption>{value.caption}</figcaption>
				</figure>
			);
		},
		youtube: ({ value }: { value: { id: string; title: string } }) => {
			const { id, title } = value;
			return (
				<div className='youtube-embed-rt'>
					<iframe
						width='560'
						height='315'
						src={`https://www.youtube.com/embed/${id}`}
						title={title}
						// @ts-ignore
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
				</div>
			);
		}
	},
	list: {
		bullet: ({ children }: any) => <ul className='rt'>{children}</ul>,
		number: ({ children }: any) => <ol className='rt'>{children}</ol>
	},
	block: {
		h1: ({ children }: any) => <h1 className='rt'>{children}</h1>,
		h2: ({ children }: any) => <h2 className='rt'>{children}</h2>,
		h3: ({ children }: any) => <h3 className='rt'>{children}</h3>,
		h4: ({ children }: any) => <h4 className='rt'>{children}</h4>,
		h5: ({ children }: any) => <h5 className='rt'>{children}</h5>,
		h6: ({ children }: any) => <h6 className='rt'>{children}</h6>,

		blockquote: ({ children }: any) => (
			<blockquote className='rt'>{children}</blockquote>
		),

		normal: ({ children }: any) => <p className='rt'>{children}</p>
	},
	marks: {
		link: ({ children, value }: any) => {
			// const rel = !value.href.startsWith('/')
			// 	? 'noopener noreferrer'
			// 	: undefined;

			return (
				<Link
					href={value.href}
					// rel={rel}
					className='rt'
				>
					{children}
				</Link>
			);
		}
	}
};
