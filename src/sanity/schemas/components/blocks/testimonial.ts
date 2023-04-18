import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'testimonial',
	title: 'Testimonial',
	type: 'object',
	fields: [
		defineField({
			name: 'quote',
			title: 'Quote',
			type: 'text',
			rows: 3
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string'
		}),
		defineField({
			name: 'company',
			title: 'Company Name',
			type: 'string'
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Testimonial'
			};
		}
	}
});
