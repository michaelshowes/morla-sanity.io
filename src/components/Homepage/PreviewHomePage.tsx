'use client';

import { usePreview } from '@lib/sanity.preview';
import Homepage from './Homepage';

type Props = {
	query: string;
};

export default function PreviewHomePage({ query }: Props) {
	const page = usePreview(null, query);
	// @ts-ignore - Server Component
	return <Homepage page={page.homepage} />;
}
