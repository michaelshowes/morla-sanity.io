// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import { DefaultDocumentNodeResolver } from 'sanity/desk';
import PreviewSinglePage from './PreviewSinglePage';
import JsonPreview from '@sanity/components/JsonPreview';

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
	return (S, { schemaType }) => {
		switch (schemaType) {
			case 'page':
				return S.document().views([
					S.view.form(),
					S.view
						.component(({ document }) => (
							<PreviewSinglePage slug={document.displayed.slug?.current} />
						))
						.title('Preview'),
					S.view.component(JsonPreview).title('JSON')
				]);

			default:
				return null;
		}
	};
};
function resolveProductionUrl(doc: any) {
	throw new Error('Function not implemented.');
}
