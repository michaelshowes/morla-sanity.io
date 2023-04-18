import Link from 'next/link';
import Logo from '@assets/svg/logo.svg';
import { clientFetch } from '@lib/sanity.client';
import { getMainNav } from '@lib/sanity.queries';
import scss from './header.module.scss';

export default async function Header() {
	const mainNav = await clientFetch(getMainNav);
	const navItems = mainNav?.mainNav;

	return (
		<header className={scss.header}>
			<div className={scss.inner}>
				<Link
					className={scss.logo}
					href='/'
					aria-label='Secret Sauce | Interactive Strategies'
				>
					<Logo />
				</Link>

				<nav aria-label='Main Site Navigation'>
					<ul>
						{navItems.map((item: Nav) => (
							<li
								key={item._id}
								className={scss.item}
							>
								<Link href={`/${item.slug}`}>{item.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
