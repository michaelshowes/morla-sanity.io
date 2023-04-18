import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'homeHero',
	title: 'Home Hero',
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
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string'
		}),
		defineField({
			name: 'hasButton',
			title: 'Button?',
			description: 'Add a button to the hero',
			type: 'boolean',
			initialValue: false
		}),
		defineField({
			name: 'link',
			title: 'Button',
			type: 'link',
			hidden: ({ parent }) => !parent.hasButton
		}),
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
	]
});
