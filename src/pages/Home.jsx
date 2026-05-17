import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Process from "../components/Process.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}

