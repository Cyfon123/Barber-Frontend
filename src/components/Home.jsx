import Footer from "./Footer";
import Header from "./Header";
import Contact from "../sections/Contact";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Services from "../sections/Services";
import Testimonial from "../sections/Testimonial";
import WhyChoose from "../sections/WhyChoose";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
export default Home