import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@sanity/schemas';
import { media } from 'sanity-plugin-media';
import { structure } from '@sanity/structure/structure';
import { previewDocumentNode } from '@sanity/plugins/previewPane';
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array';
import { pexelsImageAsset } from 'sanity-plugin-asset-source-pexels';
import { colorInput } from '@sanity/color-input';
import { googleMapsInput } from '@sanity/google-maps-input';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
	basePath: '/admin',
	name: 'morla-sanity',
	title: 'Morla',

	projectId,
	dataset,

	plugins: [
		deskTool({
			defaultDocumentNode: previewDocumentNode(),
			// @ts-ignore
			structure
		}),
		visionTool(),
		media(),
		imageHotspotArrayPlugin(),
		pexelsImageAsset({
			API_KEY: `${process.env.SANITY_PEXELS_API_KEY}`
		}),
		unsplashImageAsset(),
		googleMapsInput({
			apiKey: 'AIzaSyDz-ol-9ZF4ILnPdF9mmHZWtJp127fT_BY'
		}),
		colorInput()
	],

	schema: {
		types: schemaTypes
	}
});
