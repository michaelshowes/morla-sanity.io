import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'imageArray',
	title: 'Image Array',
	type: 'array',
	of: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt',
					type: 'string'
				})
			]
		})
	],
	options: {
		layout: 'grid'
	}
});
