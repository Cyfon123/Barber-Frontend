import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center gap-6 border-[20px] border-themeyellow">
        <h1 className="text-black font-bold text-5xl">
          Barber <span className="italic text-themeyellow">Shop</span>
        </h1>
        <p className="text-lg text-center font-semibold text-slate-600">
          Whether you are looking for a classic cut or a trendy new style, we use
          the best tools and techniques to ensure you leave looking and feeling
          your best. At [Your Barber Shop Name], its all about you. Step in,
          relax, and let us take care of the rest. Would you like to add
          anything specific, like your years of experience, unique services, or
          any special offers? Is this conversation helpful so far?
        </p>
        <div id="icons" className="flex justify-center items-center gap-4">
          {[
            { icon: <FaFacebook />, color: "bg-[#a39444]" },
            { icon: <FaYoutube />, color: "bg-[#a39444]" },
            { icon: <FaInstagram />, color: "bg-[#a39444]" },
            { icon: <FaTwitter />, color: "bg-[#a39444]" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </section>

      <div
        data-aos="slide-right"
        data-aos-delay="200"
        className="bg-themeyellow p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="text-2xl" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
