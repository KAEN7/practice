import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const AppSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
`;

function PRACTICE({ Component, pageProps }: AppProps) {
	return (
		<AppSection>
			<Head>
				<title>PRACTICE |</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultSeo
				title="PRACTICE"
				description="연습용 description"
				canonical="https://lostgold.vercel.app/"
				openGraph={{
					type: "website",
					url: "https://lostgold.vercel.app/",
					title: "연습용 배포 사이트, PRACTICE",
					description: "연습용 description",
					images: [{ url: "https://lostgold.vercel.app/images/seo_bg.png" }],
					site_name: "PRACTICE",
				}}
			/>
			<Component {...pageProps} />
		</AppSection>
	);
}

export default PRACTICE;
