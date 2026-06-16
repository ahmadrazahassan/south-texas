import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import ServicesSlider from "@/components/ServicesSlider";
import Materials from "@/components/Materials";
import MidCta from "@/components/MidCta";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Projects />
        <WhyUs />
        <ServicesSlider />
        <Materials />
        <MidCta />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
