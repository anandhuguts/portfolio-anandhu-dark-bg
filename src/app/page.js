import Home from "../app/_components/Home";
import Footer from "./_components/Footer";
import Myspace from "./_components/Myspace";
import Overview from "./_components/Overview";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Page() {
  return (
    <main>
      <Home />
      <Overview />
      <Skills />
      <Projects />
      <Myspace />
    </main>
  );
}
