import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navigation/>
      
      <main className="flex flex-col px-6 max-w-2xl mx-auto gap-60">
        <section className="flex flex-col justify-center" style={{ minHeight: 'calc(100vh - 64px)'}}>
          <Intro />
        </section>

        <section className="" id="about">
          <About />
        </section>

        <section id="projects">
          <Projects/>
        </section>

        <section className="" id="contact">
          <Contact/>
        </section>

      </main>
    </>
  );
}
