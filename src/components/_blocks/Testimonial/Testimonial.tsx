import './testimonial.scss';

import QuoteOrnament from '@assets/svg/quote-ornament.svg';

type Props = {
	data: any;
};

export default function Testimonial({ data }: Props) {
	return (
		<section className='testimonial'>
			<div className='inner'>
				<div className='border-frame'>
					<span className='use-quote-ornament'>
						<QuoteOrnament />
					</span>
					{/* {{ macros.useQuoteOrnament() }} */}

					<div
						className='constrain'
						data-animation='custom'
					>
						{/* {{ macros.useBeamOrnament(['left']) }} */}

						<blockquote className='blockquote'>
							{/* <p className="text">&ldquo;{{ data.text }}&rdquo;</p> */}

							<cite className='attribution'>
								{/* <span className="name">{{ data.attribution_name }}</span> */}

								{/* <span className="runout">{{ data.attribution_runout }}</span> */}
							</cite>
						</blockquote>

						{/* {{ macros.useBeamOrnament(['right']) }} */}
					</div>
				</div>
			</div>
		</section>
	);
}
