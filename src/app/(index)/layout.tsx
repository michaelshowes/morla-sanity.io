import '@styles/normalize.scss';
import '@styles/main.scss';
import { Inter } from 'next/font/google';
import { previewData } from 'next/headers';
import PreviewAlertBanner from '@components/_helpers/PreviewAlertBanner';
import Header from '@blocks/Header/Header';
import { MainContent } from '@components/_layout/MainContent/MainContent';
import { PageContainer } from '@components/_layout/PageContainer/PageContainer';
import { Footer } from '@components/_blocks/Footer/Footer';
import { getMetadata } from '@lib/sanity.queries';
import { clientFetch } from '@lib/sanity.client';

const inter = Inter({ subsets: ['latin'] });

type MetadataProps = {
	title: string;
	description: string;
};

export async function generateMetadata(): Promise<MetadataProps> {
	const { siteName, siteDescription } = await clientFetch(getMetadata);

	return {
		title: `${siteName}`,
		description: `${siteDescription}`
	};
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body>
				{previewData() && <PreviewAlertBanner />}
				<PageContainer>
					{/* @ts-expect-error Server Component */}
					<Header />
					<MainContent>{children}</MainContent>
					<Footer />
				</PageContainer>
			</body>
		</html>
	);
}
