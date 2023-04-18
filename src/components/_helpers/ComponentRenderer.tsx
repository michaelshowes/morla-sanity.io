import dynamic from 'next/dynamic';

const TextBlock = dynamic(() => import('@blocks/TextBlock/TextBlock'));
const FiftyFifty = dynamic(() => import('@blocks/FiftyFifty/FiftyFifty'));
const PageIntro = dynamic(() => import('@blocks/PageIntro/PageIntro'));
const Testimonial = dynamic(() => import('@blocks/Testimonial/Testimonial'));
const Accordion = dynamic(() => import('@blocks/Accordion/Accordion'));

export default function Component({ block }: any) {
	const type = block._type;

	switch (type) {
		case 'textBlock':
			return <TextBlock data={block} />;
		case 'fiftyFifty':
			return <FiftyFifty data={block} />;
		case 'pageIntro':
			return <PageIntro data={block} />;
		case 'testimonial':
			return <Testimonial data={block} />;
		case 'accordion':
			return <Accordion data={block} />;
		default:
			return null;
	}
}
