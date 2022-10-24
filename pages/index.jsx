import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="w-auto">
      <Head>
        <title>Sandy Congreve | Front-End Developer</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
