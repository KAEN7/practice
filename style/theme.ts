import { css } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	white: "#ffffff",
	black: "#2c2c2c",
	gray: "#c9c9c9",
	point: "#ffd700",
	darkPoint: "#8a7b23",
};

// flex 디자인
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexCenterDir = css`
	${flexCenter}

	flex-direction: column;
`;

export const pageSetting = css`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	padding: 3rem;
	overflow-y: auto;

	::-webkit-scrollbar {
		display: none;
	}
`;

// 스크롤 숨김
export const overflowY = css`
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const fadeIn = css`
	animation: fade-in 3s;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

// 스크롤 디자인
export const scrollBar = css`
	padding: 0px 13px 0px 13px;
	overflow-y: scroll;
	height: 200px;
	box-sizing: border-box;
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
	margin-right: 50px;

	/* 스크롤바 설정*/
	&::-webkit-scrollbar {
		width: 6px;
	}

	/* 스크롤바 막대 설정*/
	&::-webkit-scrollbar-thumb {
		height: 17%;
		background-color: rgba(255, 255, 255, 1);
		/* 스크롤바 둥글게 설정    */
		border-radius: 10px;
	}

	/* 스크롤바 뒷 배경 설정*/
	&::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0);
	}
`;

// 페이지 기본 스타일
export const pageDefault = css`
	${flexCenter}

	margin-top: 6vh;
	height: 94vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: ${color.black};
	overflow-x: hidden;
`;

export default theme;