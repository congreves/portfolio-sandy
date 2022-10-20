import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth dark">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="../public/assets/images/tab.png"></link>
        
        <meta
          name="google-site-verification"
          content="eolCQ6AO02xOfbEXNzqJ5v9Te-gDOclWxUmXr1CX_QI"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
