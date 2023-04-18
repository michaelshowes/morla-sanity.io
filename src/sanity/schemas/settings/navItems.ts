import { defineType, defineField } from 'sanity';
import { GrNavigate } from 'react-icons/gr';

export default defineType({
	name: 'navigationItem',
	title: 'Navigation Item',
	icon: GrNavigate,
	type: 'object',
	fields: [
		defineField({
			name: 'text',
			title: 'Navigation Text',
			type: 'string'
		}),
		defineField({
			name: 'navigationItemUrl',
			title: 'Navigation Item URL',
			type: 'url'
		})
	]
});
