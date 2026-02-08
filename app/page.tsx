import Border from "./components/Border";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation/>
      <div className="flex items-center">
        <Intro/>
        <Border/>
      </div>
    </>
  );
}
