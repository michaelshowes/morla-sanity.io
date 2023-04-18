import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'accordion',
	title: 'Accordion',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'multiOpen',
			title: 'Multi Open?',
			type: 'boolean',
			description: 'Allow multiple items to be open at once?'
		}),
		defineField({
			name: 'items',
			title: 'Items',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'heading',
							title: 'Heading',
							type: 'string'
						}),
						defineField({
							name: 'content',
							title: 'Content',
							type: 'array',
							of: [
								{
									type: 'block',
									styles: [
										{ title: 'Normal', value: 'normal' },
										{ title: 'H3', value: 'h3' },
										{ title: 'H4', value: 'h4' },
										{ title: 'H5', value: 'h5' },
										{ title: 'H6', value: 'h6' },
										{ title: 'Quote', value: 'blockquote' }
									],
									lists: [
										{ title: 'Bullet', value: 'bullet' },
										{ title: 'Number', value: 'number' }
									],
									marks: {
										decorators: [
											{ title: 'Strong', value: 'strong' },
											{ title: 'Emphasis', value: 'em' },
											{ title: 'Underline', value: 'underline' }
										],
										annotations: [
											{
												name: 'link',
												type: 'object',
												title: 'URL',
												fields: [
													{
														name: 'href',
														type: 'url',
														title: 'URL'
													}
												]
											}
										]
									}
								}
							]
						})
					]
				}
			]
		})
	],
	initialValue: {
		multiOpen: false
	},
	preview: {
		prepare() {
			return {
				title: 'Accordion'
			};
		}
	}
});
