import { About } from "./components/about";
import Hero from "./components/hero";
import Process from "./components/process";
import Connect from "./components/connect";
import { Text } from "./components/hover-text";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Text />
      <Projects />
      <Connect />
    </div>
  );
}
