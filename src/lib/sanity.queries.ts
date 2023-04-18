import { groq } from 'next-sanity';
import { images, intUrl } from './sanity.fragments';

export const getMainNav = groq`
	*[_type == 'siteMenu'][0] {
		mainNav[]-> {
			_id,
			title,
			'slug': slug.current
		}
}
`;

export const getMetadata = groq`
	*[_type == 'siteInfo'][0] {
		siteName,
		siteDescription,
		siteLogo {
			${images}
		}
	}
`;

export const getAllPages = groq`
	*[_type == 'page'] {
		...,
	} | order(_createdAt desc)
`;

export const getAllSlugs = groq`
	*[_type == 'page'] { slug }`;

export const getHomePage = groq`
	*[_type == 'siteInfo'][0] {
		homepage-> {
			...,
			homeHero {
				...,
				${intUrl},
				${images}
			},
			blocks[] {
				...,
				${images}
			}
		}
	}
`;

export const getPage = groq`
	*[_type == 'page' && slug.current == $slug][0] 
	{
		...,
		blocks[] {
			...,
			${images}
		}
	}
`;
