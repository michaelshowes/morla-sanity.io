'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import SauceDripOrnament from '@assets/svg/sauce-drip-ornament.svg';

export default function SauceDripAnimated() {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<motion.span
			transition={{ duration: 1 }}
			initial={{ scale: 0, translateY: -10, fill: '#ffb256' }}
			whileInView={{
				scale: 1,
				translateY: 11,
				fill: '#ef5322'
			}}
			viewport={{ margin: '-100px' }}
			ref={ref}
			aria-hidden='true'
			className='sauce-drip-ornament'
		>
			<SauceDripOrnament />
		</motion.span>
	);
}
