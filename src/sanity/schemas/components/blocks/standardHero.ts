import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'standardHero',
	title: 'Hero',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string'
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		})
	]
});
