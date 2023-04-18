import page from './page';
import {
	homeHero,
	textBlock,
	blockHeader,
	blocks,
	standardHero,
	imageGrid,
	fiftyFifty,
	pageIntro,
	accordion
} from './components/blocks/_index';
import siteInfo from './settings/siteInfo';
import siteMenu from './settings/siteMenu';
import youtube from './youtube';
import imageArray from './components/imageArray';
import link from './components/link';
import testimonial from './components/blocks/testimonial';
import fields from './fields';

export const schemaTypes = [
	page,
	homeHero,
	textBlock,
	blockHeader,
	blocks,
	siteInfo,
	standardHero,
	siteMenu,
	youtube,
	fiftyFifty,
	imageArray,
	imageGrid,
	link,
	pageIntro,
	testimonial,
	accordion,
	fields
];
