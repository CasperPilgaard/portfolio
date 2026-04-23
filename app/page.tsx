import About from "./sections/About";
import Footer from "./sections/footer";
import Intro from "./sections/Intro";
import Navigation from "./sections/Navigation";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

export default function Home() {
  return (
    <>
      <Navigation/>
      
      <main className="flex flex-col px-6 max-w-2xl mx-auto gap-35 sm:gap-80 relative z-10 sm:max-w-7xl">
        <section id="intro" className="flex flex-col justify-center" style={{ minHeight: 'calc(100vh - 64px)'}}>
          <Intro />
        </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
          <Projects />
        </section>

          <section id="experience">
            <Experience/>
          </section>

        


      </main>
      <footer className="relative z-10">
        <Footer />
      </footer>
    </>
  );
}
