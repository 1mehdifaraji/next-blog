import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="آزمایشگاه ژنتیک مندل" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="آزمایشگاه ژنتیک مندل" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/icons/favicon-96x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
