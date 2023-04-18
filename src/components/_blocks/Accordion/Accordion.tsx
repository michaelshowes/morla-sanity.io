// Accordion Component
'use client';

import './accordion.scss';
import { HiOutlinePlus } from 'react-icons/hi';
import { useState, useRef } from 'react';
import { Heading } from '@components/_ui/Heading/Heading';
import classNames from 'classnames';
import { RichTextComponents } from '@components/_helpers/RichTextComponents';
import { PortableText } from '@portabletext/react';

type AccordionProps = {
	data: {
		title: string;
		multiOpen: boolean;
		items: {
			_key: string;
			heading: string;
			content: [];
		}[];
	};
};

export default function Accordion({ data }: AccordionProps) {
	const { title, multiOpen, items } = data;
	const [clicked, setClicked] = useState('-1');

	function handleToggle(key: string) {
		clicked === key ? setClicked('-1') : setClicked(key);
	}

	return (
		<section className='accordion'>
			<Heading
				tag='h2'
				text={title}
			/>
			<ul>
				{items.map((item) => (
					<AccordionItem
						key={item._key}
						// @ts-ignore
						data={item}
						onToggle={() => handleToggle(item._key)}
						active={clicked === item._key}
						multiOpen={multiOpen}
					/>
				))}
			</ul>
		</section>
	);
}

type AccordionItemProps = AccordionProps & {
	multiOpen: boolean;
	data: {
		_key: string;
		heading: string;
		content: [];
	};
	onToggle: () => void;
	active: boolean;
};

const AccordionItem = ({
	data,
	onToggle,
	active,
	multiOpen
}: AccordionItemProps) => {
	const [clicked, setClicked] = useState(false);
	const ref = useRef<any>();
	const { heading, content } = data;

	const handleToggle = () => {
		setClicked((prev) => !prev);
	};

	return (
		<li
			className={classNames('item', {
				active: multiOpen ? clicked : active
			})}
		>
			<button onClick={multiOpen ? handleToggle : onToggle}>
				<div className='icon'>
					<HiOutlinePlus size={18} />
				</div>
				<Heading
					tag='h3'
					text={heading}
				/>
			</button>
			<div
				ref={ref}
				className='content'
				style={{
					height: active || clicked ? ref.current.scrollHeight : 0
				}}
			>
				<PortableText
					value={content}
					components={RichTextComponents}
				/>
			</div>
		</li>
	);
};
