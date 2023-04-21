import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'wysiwyg',
	title: 'WYSIWYG',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'simpleWizzy',
			title: 'Simple WYSIWYG',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
					marks: {
						decorators: [
							{ title: 'Bold', value: 'strong' },
							{ title: 'Italics', value: 'em' },
							{ title: 'Underline', value: 'underline' }
						],
						annotations: [
							{
								title: 'URL',
								name: 'link',
								type: 'object',
								fields: [
									{
										title: 'URL',
										name: 'href',
										type: 'url'
									}
								]
							}
						]
					}
				}
			]
		}),
		defineField({
			name: 'advancedWizzy',
			title: 'Advanced WYSIWYG',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'H6', value: 'h6' },
						{ title: 'Quote', value: 'blockquote' },
						{ title: 'Eyebrow', value: 'eyebrow' }
					],
					lists: [
						{ title: 'Bullet', value: 'bullet' },
						{ title: 'Number', value: 'number' }
					],
					marks: {
						decorators: [
							{ title: 'Bold', value: 'strong' },
							{ title: 'Italics', value: 'em' }
						],
						annotations: [
							{
								title: 'URL',
								name: 'link',
								type: 'object',
								fields: [
									{
										title: 'URL',
										name: 'href',
										type: 'url'
									}
								]
							}
						]
					}
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
	]
});
