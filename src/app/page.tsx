import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Project from "./projects/page";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
   </div>
  );
}
