import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from './GradeStyled.jsx';
import Excellent from '../../../Images/gradeIcons/EXCELLENT.png';
import VeryGood from '../../../Images/gradeIcons/VERYGOOD.png';
import Good from '../../../Images/gradeIcons/GOOD.png';
import Bad from '../../../Images/gradeIcons/BAD.png';
import VeryBad from '../../../Images/gradeIcons/VERYBAD.png';
import None from '../../../Images/gradeIcons/NONE.png';
import Loading from '../../../Images/gradeIcons/Loading.png';
const server = process.env.REACT_APP_SERVER_URL;
const UserInfoGrade = ({ participant }) => {
	const [userGrade, setUserGrade] = useState(null);
	const [isVeryBad, setIsVeryBad] = useState(false);
	const [intGrade, setIntGrade] = useState(0);
	const [strGrade, setStrGrade] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://lollinserver.link/members/score?nickname=${participant.summonerName}`,
			)
			.then((res) => {
				console.log(res.data);
				setUserGrade(res.data.score);
				setIntGrade(res.data.score);
				setStrGrade(res.data.grade);
			})
			.catch((err) => {
				alert('인식 실패');
			});
	}, [participant]);

	// 렌더링부분 수도코드
	// 각 participant의 점수에 따른 등급이미지와 gradetext, point를 불러온다.
	// 각 점수에따라 이미지와 text, point가 나타나게한다.
	// verybad의 점수보다 높으면(초과) className="gradeText", 아니면 className="gradeText VERYBAD"

	const GradeIcon = ({ score }) => {
		if (score === null) {
			return Loading;
		}
		if (typeof score === 'string') {
			return None;
		}
		// 각각 몇점부터 몇점이면 해당이미지 리턴하는 식으로(위에 import 처리되어있음)
		else if (score > 0.6 && score <= 1) {
			return Excellent;
		} else if (score > 0.2 && score <= 0.6) {
			return VeryGood;
		} else if (score > -0.2 && score <= 0.2) {
			return Good;
		} else if (score > -0.6 && score <= -0.2) {
			return Bad;
		} else if (score > -1 && score <= -0.6) {
			return VeryBad;
		}
	};

	const GradeText = ({ score, result }) => {
		// 점수 불러와서 범위마다 어떤 텍스트를 리턴할지.
		// verybad의 점수보다 높으면(초과) className="gradeText", 아니면 className="gradeText VERYBAD"
		if (score === null) {
			result = '로딩중...';
		}
		if (score > 0.6 && score <= 1) {
			result = 'EXCELLENT';
		} else if (score > 0.2 && score <= 0.6) {
			result = 'VERY GOOD';
		} else if (score > -0.2 && score <= 0.2) {
			result = 'GOOD';
		} else if (score > -0.6 && score <= -0.2) {
			result = 'BAD';
		} else {
			result = '평가 기록이 없습니다';
		}
	};

	return (
		<Container>
			<section className="gradeWrap">
				<div className="gradeIconWrap">
					<img
						src={GradeIcon({ score: userGrade })}
						alt=""
						className="gardeIconImg"
					/>
				</div>
				{!isVeryBad ? (
					<div className="gradeText">{GradeText}</div>
				) : (
					<div className="gradeText VERYBAD">VERY BAD</div>
				)}
				{!intGrade ? (
					<div className="point">Loading...</div>
				) : (
					<div className="point">{`${userGrade}`}</div>
				)}
			</section>
		</Container>
	);
};

export default UserInfoGrade;
