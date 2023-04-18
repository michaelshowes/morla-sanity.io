import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
	name: 'siteInfo',
	title: 'Site Information',
	type: 'document',
	fields: [
		defineField({
			name: 'siteName',
			title: 'Site Name',
			type: 'string'
		}),
		defineField({
			name: 'siteDescription',
			title: 'Site Description',
			type: 'text'
		}),
		defineField({
			name: 'siteLogo',
			title: 'Site Logo',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'homepage',
			type: 'reference',
			description: 'Select the page you want to use as the homepage',
			to: [{ type: 'page' }]
		})
	]
});
