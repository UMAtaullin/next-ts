import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";
import React from "react";


function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyNext</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>);
}

export default App;