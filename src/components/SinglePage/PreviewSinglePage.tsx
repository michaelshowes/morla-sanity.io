'use client';

import { usePreview } from '@lib/sanity.preview';
import SinglePage from './SinglePage';

type Props = {
	query: string;
	slug: string;
};
export default function PreviewSinglePage({ query, slug }: Props) {
	const page = usePreview(null, query, { slug });

	return (
		<>
			<SinglePage page={page} />
		</>
	);
}
