import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'blockHeader',
	title: 'Block Header',
	type: 'object',
	fields: [
		defineField({
			name: 'eyebrow',
			title: 'Eyebrow',
			type: 'string'
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'text',
			rows: 6
		})
	]
});
