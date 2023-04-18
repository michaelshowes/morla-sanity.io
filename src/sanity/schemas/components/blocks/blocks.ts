import { defineType } from 'sanity';

export default defineType({
	name: 'blocks',
	title: 'Blocks',
	type: 'array',
	of: [
		{ type: 'textBlock' },
		{ type: 'imageGrid' },
		{ type: 'fiftyFifty' },
		{ type: 'pageIntro' },
		{ type: 'testimonial' },
		{ type: 'accordion' }
	],
	options: {
		modal: {
			width: 2
		}
	}
});
