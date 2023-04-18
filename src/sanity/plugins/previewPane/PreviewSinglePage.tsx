'use client';

import { Suspense, memo, startTransition, useEffect, useState } from 'react';

type Props = {
	slug?: string;
};

export default function PreviewSinglePage(props: Props) {
	// Whenever the slug changes, wait 3 seconds for GROQ to reach eventual consistency.
	// This helps to prevent displaying "Invalid slug" or returning 404 errors while editing the slug manually.
	const [slug, setSlug] = useState(props.slug);
	useEffect(() => {
		const timeout = setTimeout(
			() => startTransition(() => setSlug(props.slug)),
			3000
		);
		return () => clearTimeout(timeout);
	}, [props.slug]);

	// if the document has no slug for the preview iframe
	if (!slug) {
		return <h1>Please add a slug!</h1>;
	}

	return (
		<Suspense fallback={null}>
			<Iframe slug={slug} />
		</Suspense>
	);
}

const Iframe = memo(function Iframe(
	props: Omit<Props, 'slug'> & Required<Pick<Props, 'slug'>>
) {
	const previewUrl =
		'/api/preview?secret=skPWXw0GTpIFeX8F3oMyyMKwO4OikFAwQ7Wsu8n0BbeJFMb1gmSUDPQaQdLAVlCTEahn1QTnbCTtSRnlemmTIHjJ5yV3UARLMijynsuYccJtDzlbzIgcnaRn30eYJUsk4JAT7502MuQHa58Wji3KrthRcnlX5VJYBzCtXNBVuygUY7wYuft8&slug=';

	const { slug } = props;
	const url = new URL(previewUrl, location.origin);
	url.searchParams.set('slug', slug);

	return (
		<iframe
			style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
			src={url.toString()}
		/>
	);
});
