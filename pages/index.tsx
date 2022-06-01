// ! 중요한 개념 4가지
// camera : 카메라 시점
// scene : three.js로 생성한 material을 담아내는 그릇, 결과물
// mesh : polygon mesh 폴리곤 모델링
// material : 실제 mesh에 담기는 모델링 된 물체

// Canvas는 제작한 mesh 올리는 배경
// frame는 three.js로 제작한 material에 애니메이션 효과를 부여하며 frame을 정의할 수 있음
import styled from "styled-components";
import { flexCenter } from "../style/theme";
// import { orbitControls} from '@react-three/drei'
import Meshes from "./Meshes";
import Link from "next/link";
import Article from "./Article";

const HomeSection = styled.section`
	${flexCenter}
`;

const index = () => {
	return (
		<HomeSection>
			<Link href="/meshes">
				<a>meshes</a>
			</Link>
			<Link href="/article">
				<a>Article</a>
			</Link>

			{/* <BrowserRouter>
				<Route exact path="/" component={<Article></Article>} />
				<Route exact path="/" component={<Meshes></Meshes>} />
			</BrowserRouter> */}
		</HomeSection>
	);
};

export default index;
