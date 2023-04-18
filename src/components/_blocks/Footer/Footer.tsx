// Footer Component
import ISLogo from '@assets/svg/is-logo.svg';
import FooterLogo from '@assets/svg/footer-logo.svg';
import scss from './footer.module.scss';
import Link from 'next/link';

export function Footer() {
	return (
		<footer className={scss.footer}>
			<div className={scss.inner}>
				<div className={scss.cols}>
					<div className={scss.left}>
						<Link
							href='https://interactivestrategies.com'
							target='_blank'
						>
							<ISLogo />
						</Link>
					</div>
					<div className={scss.center}>
						<Link href='/'>
							<FooterLogo />
						</Link>
					</div>
					<div className={scss.right}>
						<p>&copy; {new Date().getFullYear()} Interactive Strategies</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
