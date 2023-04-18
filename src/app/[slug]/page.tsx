import { previewData } from 'next/headers';
import PreviewSuspense from '@components/_helpers/PreviewSuspense';
import { clientFetch } from '@lib/sanity.client';
import { getAllSlugs, getPage } from '@lib/sanity.queries';
import SinglePage from '@components/SinglePage/SinglePage';
import PreviewSinglePage from '@components/SinglePage/PreviewSinglePage';

type Props = {
	params: {
		slug: string;
	};
};

export default async function Page({ params: { slug } }: Props) {
	const page = await clientFetch(getPage, { slug });

	return (
		<>
			{previewData() ? (
				<PreviewSuspense fallback='Loading...'>
					<PreviewSinglePage
						query={getPage}
						slug={slug}
					/>
				</PreviewSuspense>
			) : (
				<SinglePage page={page} />
			)}
		</>
	);
}

export const revalidate = 60; // revalidate this page every 60 seconds

// Generates the paths for the pages
export async function generateStaticParams() {
	const slugs = await clientFetch(getAllSlugs);

	const slugRoutes = slugs.map((slug: Slug) => slug.slug.current);

	return slugRoutes.map((slug: String) => ({
		slug
	}));
}
