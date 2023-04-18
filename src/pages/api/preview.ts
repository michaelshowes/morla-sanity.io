import { clientFetch } from '@lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

export default async function preview(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (req.query.secret !== process.env.SANITY_API_READ_TOKEN) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// Fetch the headless CMS to check if the provided `slug` exists
	// getPostBySlug would implement the required fetching logic to the headless CMS

	const slug = req.query.slug;
	const getPagePreview = groq`
	*[_type == 'page' && slug.current == '${slug}'][0] 
	{ slug }
`;

	const page = await clientFetch(getPagePreview);

	// If the slug doesn't exist prevent preview mode from being enabled
	// if (!page) {
	// 	return res.status(401).json({ message: 'Invalid slug' });
	// }

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the path from the fetched post
	// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
	// console.log(page);
	res.redirect(
		page.slug.current === 'home' || page.slug.current === 'homepage'
			? '/'
			: `/${page.slug.current}`
	);
}
