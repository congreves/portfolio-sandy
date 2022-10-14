import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandy Congreve | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />

       
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
