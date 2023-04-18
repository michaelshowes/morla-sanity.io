'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '@lib/sanity.client';

function onPublicAccessOnly() {
	throw new Error("Unable to load preview as you're not signed in.");
}

if (!projectId || !dataset) {
	throw new Error(
		'Missing projectId and/or dataset. Make sure you have specified them in `sanity.json` or .env.'
	);
}

export const usePreview = definePreview({
	projectId,
	dataset,
	onPublicAccessOnly
});
