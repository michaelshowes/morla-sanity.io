// MainContent Component

import scss from './mainContent.module.scss';

export function MainContent({ children }: { children: React.ReactNode }) {
	return (
		<main className={scss.mainContent}>
			<article className={scss.gridContainer}>{children}</article>
		</main>
	);
}
