'use client';
import Logo from '../../assets/svg/footer-logo.svg';
import styled from 'styled-components';
import { useCurrentUser } from 'sanity';

type Props = {};

export default function Welcome({}: Props) {
	const user = useCurrentUser();

	console.log(user);

	return (
		<WelcomeScreen>
			<Logo />
			<div className='user'>
				<div className='avatar'>
					<img src={user?.profileImage} />
				</div>
				<div className='details'>
					<h1>Welcome {user?.name}</h1>
					<div>Role: {user?.role}</div>
					<div>Email: {user?.email}</div>
				</div>
			</div>
		</WelcomeScreen>
	);
}

const WelcomeScreen = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #1e1e1e;
	height: 100%;

	svg {
		width: 100%;
		max-width: 200px;
		margin: 100px 0;
	}

	.user {
		display: flex;
		align-items: center;

		.avatar {
			margin-right: 50px;

			img {
				border: 5px solid #ff9d42;
				border-radius: 50%;
				width: 160px;
			}
		}

		.details {
			h1 {
				margin-top: 0;
				text-transform: uppercase;
			}

			div {
				font-size: 20px;
				font-weight: 600;
			}
		}
	}
`;
