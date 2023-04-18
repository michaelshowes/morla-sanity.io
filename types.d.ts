declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test';
			NEXT_PUBLIC_SITE_URL: string;
			NEXT_PUBLIC_SANITY_PROJECT_ID: string;
			NEXT_PUBLIC_SANITY_DATASET: string;
			NEXT_PUBLIC_SANITY_API_VERSION: string;
			SANITY_API_AUTH_TOKEN: string;
			SANITY_API_READ_TOKEN: string;
			SANITY_API_WRITE_TOKEN: string;
			SANITY_API_PREVIEW_URL: string;
		}
	}

	type Base = {
		_id: string;
		_type: string;
		_createdAt: string;
		_updatedAt: string;
		_rev: string;
	};

	type Page = Base & {
		title: string;
		slug: {
			current: string;
		};
		blocks: Block[];
	};

	type HomeHero = Base & {
		title: string;
		subtitle: string;
	};

	type Image = Base & {
		_type: 'image';
		asset: Reference;
	};

	type Reference = Base & {
		_ref: string;
		_type: 'reference';
	};

	type Slug = Base & {
		_type: 'slug';
		current: string;
		slug: {
			current: string;
		};
	};

	export type Settings = Base & {
		title?: string;
		description?: any[];
		ogImage?: {
			title?: string;
		};
	};

	type BlockHeader = Base & {
		eyebrow?: string;
		title: string;
		text?: string;
	};

	type TextBlock = Base & {
		hasHeader?: boolean;
		header: BlockHeader;
		wysiwyg: any[];
	};

	type HomeHero = Base & {
		title: string;
		subtitle: string;
		image: Image;
	};

	type Block = Base & {
		homeHero: HomeHero;
		textBlock: TextBlock;
	};

	type Nav = {
		_id: string;
		title: string;
		slug: string;
	};
}

export {};
