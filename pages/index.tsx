import styled from "styled-components";
import { flexCenter } from "../style/theme";
import { Canvas, useFrame } from "@react-three/fiber";
// import { orbitControls} from '@react-three/drei'
import Meshes from "../components/Meshes";

const HomeSection = styled.section`
	${flexCenter}
`;

const index = () => {
	return (
		<HomeSection>
			<Canvas>
				<Meshes />
			</Canvas>
		</HomeSection>
	);
};

export default index;
