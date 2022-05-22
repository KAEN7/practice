import styled from "styled-components";
import { flexCenter } from "../style/theme";

import Countdown from "react-countdown";

const HomeSection = styled.section`
	${flexCenter}
`;

// https://www.npmjs.com/package/react-countdown

const index = () => {
	let startTime = Date.now();
	let setTime = 86400000;

	return (
		<HomeSection>
			<Countdown date={startTime + setTime}>
				<span>test</span>
			</Countdown>
		</HomeSection>
	);
};

export default index;
