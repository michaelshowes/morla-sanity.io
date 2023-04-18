import { previewData } from 'next/headers';
import PreviewSuspense from '@components/_helpers/PreviewSuspense';
import { clientFetch } from '@lib/sanity.client';
import { getHomePage } from '@lib/sanity.queries';
import Homepage from '@components/Homepage/Homepage';
import PreviewHomePage from '@components/Homepage/PreviewHomePage';

export default async function Home() {
	const page = await clientFetch(getHomePage);

	return (
		<>
			{previewData() ? (
				<PreviewSuspense fallback='Loading...'>
					<PreviewHomePage query={getHomePage} />
				</PreviewSuspense>
			) : (
				// @ts-ignore - Server Component
				<Homepage page={page.homepage} />
			)}
		</>
	);
}
