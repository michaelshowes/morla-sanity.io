import { DocumentsIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'page',
	title: 'Pages',
	type: 'document',
	icon: DocumentsIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title'
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'homeHero',
			title: 'Hero',
			type: 'homeHero',
			hidden: ({ document }) =>
				document?.title !== 'Homepage' && document?.title !== 'Home'
		}),
		defineField({
			name: 'standardHero',
			title: 'Hero',
			type: 'standardHero',
			hidden: ({ document }) =>
				document?.title === 'Homepage' || document?.title === 'Home'
		}),
		defineField({
			name: 'blocks',
			title: 'Blocks',
			type: 'blocks'
		})
	]
});
