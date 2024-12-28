import { useEffect } from "react";
import servicesimg from "../assets/images/servicimg.jpg";
import service1 from "../assets/images/ser1.png";
import service2 from "../assets/images/ser2.png";
import service3 from "../assets/images/ser3.png";
import service4 from "../assets/images/ser4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });

  return (
    <section
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Barbershop Services
        </h1>
        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">
          Barber shop services include haircuts, beard grooming, hair styling,
          treatments like hair spa and coloring, facials, eyebrow shaping, head
          massages, and combo packages for a complete grooming experience.
        </p>
        <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-start gap-6">
          <img
            src={servicesimg}
            alt="Barbershop Services"
            className="w-full md:w-1/2 h-[450px] object-cover rounded-xl mb-6 md:mb-0"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
            >
              <img
                src={service1}
                alt="Service 1"
                className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-black text-[25px] font-bold">Hair Cut</h1>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
            >
              <img
                src={service2}
                alt="Service 2"
                className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-black text-[25px] font-bold">Beard Trim</h1>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
            >
              <img
                src={service3}
                alt="Service 3"
                className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-black text-[25px] font-bold">Hair Style</h1>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
            >
              <img
                src={service4}
                alt="Service 4"
                className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-black text-[25px] font-bold">Coloring</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
