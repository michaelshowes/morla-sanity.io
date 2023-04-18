type Props = {
	schemaType: {
		options: {
			type: string;
			text: string;
		};
	};
};

export default function PredefinedText({ schemaType }: Props) {
	const text = schemaType.options?.text;
	const type = schemaType.options?.type;

	return (
		<>
			{type === 'h1' ? (
				<h1>{text}</h1>
			) : type === 'h2' ? (
				<h2>{text}</h2>
			) : type === 'h3' ? (
				<h3>{text}</h3>
			) : type === 'h4' ? (
				<h4>{text}</h4>
			) : type === 'h5' ? (
				<h5>{text}</h5>
			) : type === 'h6' ? (
				<h6>{text}</h6>
			) : (
				<p style={{ fontSize: '14px', lineHeight: '1.6' }}>{text}</p>
			)}
		</>
	);
}
