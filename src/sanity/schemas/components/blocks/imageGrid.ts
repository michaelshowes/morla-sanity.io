import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'imageGrid',
	title: 'Image Grid',
	type: 'object',
	fields: [
		defineField({
			name: 'images',
			title: 'Images',
			type: 'imageArray'
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Image Grid'
			};
		}
	}
});
