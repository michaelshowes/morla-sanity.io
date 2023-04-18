// PageContainer Component
import '@styles/main.scss';
import scss from './pageContainer.module.scss';

export function PageContainer({ children }: { children: React.ReactNode }) {
	return <div className={scss.pageContainer}>{children}</div>;
}
