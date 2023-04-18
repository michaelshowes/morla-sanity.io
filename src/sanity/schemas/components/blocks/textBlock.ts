import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'textBlock',
	title: 'Text Block',
	type: 'object',
	fields: [
		defineField({
			name: 'hasHeader',
			title: 'Has Header?',
			type: 'boolean',
			initialValue: false
		}),
		defineField({
			name: 'header',
			title: 'Header',
			type: 'blockHeader',
			hidden: ({ parent }) => !parent.hasHeader
		}),
		defineField({
			name: 'wysiwyg',
			title: 'WYSIWYG',
			type: 'array',
			// validation: (Rule) => Rule.required(),
			of: [
				{
					type: 'block',
					lists: [
						{ title: 'Bullet', value: 'bullet' },
						{ title: 'Numbered', value: 'number' },
						{ title: 'Special', value: 'special' }
					]
				},
				{
					type: 'image',
					fields: [
						defineField({
							name: 'caption',
							title: 'Image Caption',
							type: 'string'
						})
					],
					options: {
						hotspot: true
					}
				},
				{
					type: 'youtube'
				}
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Text Block'
			};
		}
	}
});
