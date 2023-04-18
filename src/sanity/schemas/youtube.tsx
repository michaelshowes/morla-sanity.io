import { defineType, defineField } from 'sanity';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';
import SlugInput from '@sanity/components/SlugInput';

// Preview component
type Props = {
	renderDefault(props: Props): import('react').ReactNode;
	id: string;
	title: string;
};

const Preview = (props: Props) => {
	const { id, title, renderDefault } = props;
	return (
		<YoutubeEmbed>
			{renderDefault(props)}
			{!id ? (
				<div>Please provide a YouTube ID</div>
			) : (
				<YouTube
					videoId={id}
					title={title}
				/>
			)}
		</YoutubeEmbed>
	);
};

// Styling
const YoutubeEmbed = styled.div`
	position: relative;

	iframe {
		width: 100%;
	}
`;

// Schema
export default defineType({
	name: 'youtube',
	title: 'YouTube Embed',
	type: 'object',
	icon: FaYoutube,
	fields: [
		defineField({
			name: 'id',
			title: 'YouTube ID',
			type: 'string',
			components: {
				// @ts-expect-error
				input: SlugInput
			},
			options: {
				// @ts-expect-error
				prefix: 'https://www.youtube.com/watch?v='
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		})
	],
	preview: {
		select: {
			id: 'id',
			title: 'title'
		}
	},
	components: {
		// @ts-expect-error
		preview: Preview
	}
});
