import PredefinedText from '@/sanity/components/input/PredefinedText';
import PrefixedInput from '@/sanity/components/input/PrefixedInput';
import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'fields',
	title: 'Fields',
	type: 'document',
	fields: [
		defineField({
			name: 'predefinedText',
			type: 'string',
			components: {
				// @ts-ignore
				field: PredefinedText,
				// @ts-ignore
				input: PredefinedText
			},
			options: {
				// @ts-ignore
				type: 'h1',
				// @ts-ignore
				text: 'Heading'
			}
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'string'
		}),
		defineField({
			name: 'textArea',
			title: 'Text Area',
			type: 'text',
			rows: 4
		}),
		defineField({
			name: 'number',
			title: 'Number',
			type: 'number'
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'email'
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url'
		}),
		defineField({
			name: 'select',
			title: 'Select',
			type: 'string',
			options: {
				list: [
					{ title: 'Option 1', value: 'option1' },
					{ title: 'Option 2', value: 'option2' },
					{ title: 'Option 3', value: 'option3' }
				]
			}
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'file',
			title: 'File',
			type: 'file'
		}),
		defineField({
			name: 'boolean',
			title: 'Boolean',
			type: 'boolean'
		}),
		defineField({
			name: 'twitterInput',
			title: 'Twitter',
			type: 'string',
			description: 'This is a custom input component',
			components: {
				// @ts-ignore
				input: PrefixedInput
			},
			options: {
				// @ts-ignore
				prefix: 'https://www.twitter.com/'
			}
		}),
		defineField({
			name: 'colorSwatch',
			title: 'Color Swatch',
			type: 'color'
		}),
		defineField({
			name: 'map',
			title: 'Map',
			type: 'geopoint'
		})
	],
	initialValue: {
		boolean: false
	}
});
