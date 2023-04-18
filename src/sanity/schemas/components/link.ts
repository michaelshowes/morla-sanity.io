import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'link',
	title: 'Link',
	type: 'object',
	fields: [
		defineField({
			name: 'extLink',
			title: 'External Link?',
			type: 'boolean'
		}),
		defineField({
			name: 'label',
			title: 'Label',
			type: 'string'
		}),
		defineField({
			name: 'intUrl',
			title: 'Internal URL',
			type: 'reference',
			to: [{ type: 'page' }],
			hidden: ({ parent, value }) => !value && parent?.extLink === true
		}),
		defineField({
			name: 'extUrl',
			title: 'External URL',
			type: 'url',
			hidden: ({ parent, value }) => !value && parent?.extLink === false
		})
	],
	initialValue: {
		extLink: false
	}
});
