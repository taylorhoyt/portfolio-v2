import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taylor Hoyt | Portfolio</title>
        <meta name="description" content="Taylor Hoyt's Portfolio - Fullstack Software Engineer" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
