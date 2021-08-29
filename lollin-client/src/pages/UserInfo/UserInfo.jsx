import React, { useState } from 'react';
import UserInfoMatching from '../../component/UserInfoMatching/UserInfoMatching.jsx';
import UserInfoHistory from '../../component/UserInfoHistory/UserInfoHistory.jsx';
import {
	Container,
	BackImg,
	Wrapper,
	UserTitle,
	UserContent,
} from './UserInfoStyled.jsx';
import UserInfoBgi from '../../Images/userinfobgi.jpeg';

const UserInfo = ({ summonerName }) => {
	let [defaultPlayer, setDefaultPlayer] = useState(null);

	function handlePlayer(player) {
		if (summonerName.length > 0) {
			// setDefaultPlayer(summonerName);
		} else {
			setDefaultPlayer(player);
		}
	}
	return (
		<Container>
			<BackImg className="userinfobgi" src={`${UserInfoBgi}`} alt="nodata" />
			<Wrapper>
				<UserTitle>User Info</UserTitle>
				<UserContent>
					<UserInfoMatching
						summonerName={summonerName}
						setDefaultPlayer={handlePlayer}
					/>

					<UserInfoHistory
						summonerName={summonerName}
						defaultPlayer={defaultPlayer}
					/>
				</UserContent>
			</Wrapper>
		</Container>
	);
};

export default UserInfo;
