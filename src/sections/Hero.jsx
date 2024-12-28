import { useEffect } from "react";
import heroimg from "../assets/images/hero.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import scissor from "../assets/images/scissor.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import womenhair from "../assets/images/womenhair.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });
  return (
    <>
      <section
        id="hero"
        className="w-full md:px-[120px] px-10 flex flex-col md:flex-row justify-center items-center gap-20 relative overflow-hidden bg-gradient-to-br from-black to-[#1a1a1a] py-20"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10 z-10 relative 
    transform transition-all duration-500 hover:translate-x-2 
    hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] 
    rounded-xl p-4"
        >
          <h1
            data-aos="zoom-in"
            className="text-2xl text-yellow-400 font-semibold 
      relative before:content-[''] before:absolute before:-bottom-2 before:left-0 
      before:w-20 before:h-1 before:bg-yellow-500"
          >
            WELCOME TO
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-bold 
      bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 
      drop-shadow-lg"
          >
            Barbershops
            <br />
            in Lucknow
            <br />
            Uttar Pradesh
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="space-y-4 relative 
      before:content-[''] before:absolute before:-left-10 before:top-0 
      before:w-1 before:h-full before:bg-yellow-500 before:opacity-50"
          >
            {[
              {
                Icon: FaLocationDot,
                text: "Hazratganj Lucknow , UP",
              },
              {
                Icon: MdOutlineAndroid,
                text: "+91 7393907097",
              },
              {
                Icon: MdEmail,
                text: "dg739390@gmail.com",
              },
              {
                Icon: FaHeadphones,
                text: "customer@gmail.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="icon-box flex justify-start items-center gap-4 
          group transition-all duration-300 
          hover:translate-x-2 hover:text-yellow-500"
              >
                <item.Icon
                  className="text-yellow-400 text-2xl group-hover:rotate-12 
            transition-transform duration-300"
                />
                <p className="text-xl text-gray-300 font-semibold group-hover:pl-2 transition-all">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <Button
            data-aos="zoom-in"
            className="px-10 py-4 rounded-xl border-2 border-yellow-500 text-white 
      font-semibold-lg hover:bg-yellow-500 hover:text-black 
      relative overflow-hidden group
      transition-all duration-500 ease-in-out
      before:content-[''] before:absolute before:inset-0 
      before:bg-yellow-400 before:translate-x-full before:transition-transform 
      before:duration-500 before:z-[-1]
      hover:before:translate-x-0"
          >
            <span className="relative z-10">BOOK ONLINE</span>
          </Button>
        </div>

        <div
          data-aos="zoom-in"
          id="image-box"
          className="md:w-[50%] w-full relative group"
        >
          <div
            className="absolute -inset-4 bg-yellow-500 rounded-2xl opacity-30 
      blur-xl group-hover:opacity-40 transition-all duration-500 
      animate-pulse"
          ></div>
          <div className="relative">
            <div
              className="absolute -inset-2 bg-gradient-to-br from-yellow-400/50 to-transparent 
      rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"
            ></div>
            <img
              src={heroimg}
              alt="Barbershop Hero Image"
              className="rounded-2xl w-full md:h-[700px] h-[500px] object-cover 
        relative z-10 
        border-4 border-yellow-500/30
        shadow-2xl shadow-yellow-500/50
        transform transition-all duration-500 
        group-hover:scale-105 
        group-hover:rotate-2
        group-hover:brightness-110
        group-hover:contrast-125"
            />
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-1/2 h-full 
    bg-gradient-to-bl from-yellow-500/10 to-transparent 
    -z-10 transform skew-x-[-15deg] origin-top-right"
        ></div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col jsutify-center items-center gap-4"
        >
          <img
            src={scissor}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black hover: text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col jsutify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-2xl text-black font-semibold">MENS CUT</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black hover: text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col jsutify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black hover: text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col jsutify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt=""
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black hover: text-black cursor-pointer">
            MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
