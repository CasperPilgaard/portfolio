import About from "./components/About";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation/>
      
      <main className="flex flex-col px-6 max-w-2xl mx-auto">
        <section className="min-h-screen flex flex-col justify-center">
          <Intro />
        </section>

        <section className="py-24" id="about">
          <About />
        </section>
      </main>
    </>
  );
}
