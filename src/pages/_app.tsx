import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Taylor Hoyt | Portfolio</title>
        <meta
          name="description"
          content="Fullstack software engineer specializing in React, Next.js, and Spring Boot. View my projects and experience."
        />
        <link rel="canonical" href="https://www.taylorhoyt.com" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Taylor Hoyt | Fullstack Software Engineer"
        />
        <meta
          property="og:description"
          content="Fullstack software engineer specializing in React, Next.js, and Spring Boot. View my projects and experience."
        />
        <meta
          property="og:image"
          content="https://www.taylorhoyt.com/og-image.png"
        />
        <meta property="og:url" content="https://www.taylorhoyt.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taylor Hoyt | Fullstack Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Fullstack software engineer specializing in React, Next.js, and Spring Boot."
        />
        <meta
          name="twitter:image"
          content="https://www.taylorhoyt.com/og-image.png"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taylor Hoyt",
              jobTitle: "Fullstack Software Engineer",
              url: "https://www.taylorhoyt.com",
              email: "me@taylorhoyt.com",
              sameAs: [
                "https://www.linkedin.com/in/taylorchoyt",
                "https://github.com/taylorhoyt",
              ],
            }),
          }}
        />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}
