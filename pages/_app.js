import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>네이버 아님</title>
        <meta
          name="description"
          content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나자!"
        />

        <meta property="og:url" content="https://naver.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="네이버 아님" />
        <meta
          property="og:description"
          content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나자!"
        />
        <meta
          property="og:image"
          content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="naver.com" />
        <meta property="twitter:url" content="https://naver.com" />
        <meta name="twitter:title" content="네이버 아님" />
        <meta
          name="twitter:description"
          content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나자!"
        />
        <meta
          name="twitter:image"
          content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
        />
      </Head>
      <div>
        <h2>Navigation</h2>
        <div
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            router.push("/profile");
          }}
        >
          Profile
        </div>
      </div>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </div>
  );
}

export default MyApp;
