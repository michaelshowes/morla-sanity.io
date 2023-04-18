import { defineType, defineField } from 'sanity';
import { GrNavigate } from 'react-icons/gr';

export default defineType({
	name: 'navigation',
	title: 'Navigation',
	icon: GrNavigate,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'navId',
			title: 'Navigation ID',
			type: 'slug',
			options: {
				source: 'title'
			}
		}),
		defineField({
			name: 'items',
			title: 'Navigation Items',
			type: 'array',
			of: [
				{
					type: 'navigationItem'
				}
			]
		})
	]
});
