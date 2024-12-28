import { useEffect } from "react";
import whyimg from "../assets/images/why3.webp";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });
  return (
    <section
      id="about"
      className="wifull md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-center"
      style={{ backgroundImage: `url(${whyimg})` }}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full"
      >
        <h1 className="text-themeyellow text-4xl font-bold">WORKING HOURS</h1>
        <div className="flex-col justify-center items-center gap-4">
          <p className="text-xl text-black font-lg">SUNDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">MONDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">TUESDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">WEDNESDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">THURSDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">FRIDAY 10AM - 8PM</p>
          <p className="text-xl text-black font-lg">SATURDAY 10AM - 8PM</p>
        </div>
        <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6">
          BOOK ONLINE
        </button>
      </div>
      <div
        data-aos="slide-up"
        data-aos-dalay="200"
        className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit"
      >
        <h1 className="text-6xl text-white font-bold text-center">
          Why Choose Us
        </h1>
        <p className="text-2xl font-semibold text-white md:text-start text-center">
          At [Salon Name], we offer personalized care, expert stylists, and
          premium products to ensure you look and feel your best. From trendy
          cuts to relaxing spa treatments, our welcoming atmosphere and
          commitment to hygiene make us the perfect choice for your beauty
          needs.
        </p>
        <div
          id="icon-list"
          className="flex flex-col justify-center items-start gap-4"
        >
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Always Welcoming Enviroment
            </h1>
          </div>

          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Personalized Services
            </h1>
          </div>

          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Comprehensive Offerings
            </h1>
          </div>

          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Commitment to Hygiene and Customer Satisfaction
            </h1>
          </div>

          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Ambience and Experience
            </h1>
          </div>
          <button className="text-black px-10 py-4 bg-white hover:bg-themeyellow hover:text-black rounded-xl font-semibold">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
