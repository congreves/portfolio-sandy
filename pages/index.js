import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import faviconImg from "../public/assets/images/tab.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandy Congreve | Front-End Developer</title>
        <link rel="icon" href={faviconImg} />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
