type Props = {
	document: {
		displayed: {
			title: string;
		};
	};
};

export default function JsonPreview({ document }: Props) {
	return (
		<>
			<h1>JSON Data for {document.displayed.title}</h1>

			{/* Stringifying a JSON representation of the displayed data */}
			<pre>{JSON.stringify(document.displayed, null, 2)}</pre>
		</>
	);
}
