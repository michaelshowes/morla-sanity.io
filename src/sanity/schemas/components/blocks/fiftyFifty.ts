import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'fiftyFifty',
	title: '50/50',
	type: 'object',
	fields: [
		defineField({
			name: 'eyebrow',
			title: 'Eyebrow',
			type: 'string'
		}),
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string'
		}),
		defineField({
			name: 'textContent',
			title: 'Text Content',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' }
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
			name: 'link',
			title: 'Button',
			type: 'link'
		}),
		defineField({
			name: 'imagePosition',
			title: 'Image Position',
			type: 'string',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Right', value: 'right' }
				]
			}
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
	],
	initialValue: {
		imagePosition: 'left'
	},
	preview: {
		prepare() {
			return {
				title: '50/50'
			};
		}
	}
});
