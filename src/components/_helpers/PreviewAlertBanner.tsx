'use client';

import styled from 'styled-components';

type Props = {};
export default function PreviewAlertBanner({}: Props) {
	return (
		<PreviewAlertBannerStyles>
			<div>
				<a href='http://localhost:3000/api/exit-preview'>Click here</a> to exit
				Preview Mode.
			</div>
		</PreviewAlertBannerStyles>
	);
}

const PreviewAlertBannerStyles = styled.div`
	background: orange;
	padding: 8px 0;
	text-align: center;
`;
