import SauceDripAnimated from '@components/animated/SauceDripAnimated';
import './pageIntro.scss';

type Props = {
	data: any;
};
export default function PageIntro({ data }: Props) {
	return (
		<section className='pageIntro'>
			<SauceDripAnimated />
			<div className='inner'>{data.text}</div>
		</section>
	);
}
