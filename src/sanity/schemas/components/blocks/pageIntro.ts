import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'pageIntro',
	title: 'Page Intro',
	type: 'object',
	fields: [
		defineField({
			name: 'text',
			title: 'Text',
			type: 'text'
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Page Intro'
			};
		}
	}
});
