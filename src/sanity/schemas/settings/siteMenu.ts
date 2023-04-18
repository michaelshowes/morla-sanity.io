import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'siteMenu',
	title: 'Site Menu',
	type: 'document',
	fields: [
		defineField({
			name: 'mainNav',
			title: 'Main Navigation',
			description: 'Select the pages you want to appear in the main navigation',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'page' }]
				}
			]
		})
	]
});
