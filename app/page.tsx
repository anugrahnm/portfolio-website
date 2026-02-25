import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Spotlight } from "@/components/portfolio/spotlight";
import { Navbar } from "@/components/portfolio/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Spotlight />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
