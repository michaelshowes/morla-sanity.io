// Takes a string, removes any hypens, and returns the string in Title Case. Useful for convertng URI slugs to proper titles.

export function toTitleCase(str: string) {
	return str
		.toLowerCase()
		.replace('-', ' ')
		.split(' ')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}
