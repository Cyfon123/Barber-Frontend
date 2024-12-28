import { useEffect } from "react";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import { BiSolidQuoteLeft } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  {
    image: client1,
    title: "Ashutosh Kumar",
    para: "Had an amazing experience at [Salon Name]! The team was welcoming, the service exceptional, and the results perfect. I left feeling confident and refreshed—highly recommend!",
  },
  {
    image: client2,
    title: "Ashutosh Kumar",
    para: "Had an amazing experience at [Salon Name]! The team was welcoming, the service exceptional, and the results perfect. I left feeling confident and refreshed—highly recommend!",
  },

  {
    image: client3,
    title: "Ashutosh Kumar",
    para: "Had an amazing experience at [Salon Name]! The team was welcoming, the service exceptional, and the results perfect. I left feeling confident and refreshed—highly recommend!",
  },
];
const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });
  return (
    <section
      id="testimonial"
      className="w-full md;px-20 md:h-165vh] h-fit px-10 py-20 flex flex-col justify-center items-center gap-6 bg-themeyellow"
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl text-white font-bold text-center"
      >
        Testimonials
      </h1>
      <p
        data-aos="zoom-in"
        className="text-xl text-white font-semibold text-center"
      >
        Here is what our happy clients say about us! At [Salon Name], we take
        pride in delivering exceptional services that leave our customers
        looking and feeling their best. Check out their experiences below!
      </p>
      <div
        id="clients"
        className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6"
      >
        {clients.map((item, index) => (
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            id="main-box"
            key={index}
            className="w-full bg-white p-14 flex flex-col justify-between items-center gap-6 rounded-3xl shadow-lg"
          >
            <div
              id="top"
              className="flex justify-between items-center gap-8 w-full"
            >
              <div className="flex justify-center items-center gap-4 relative">
                <BiSolidQuoteLeft className="text-4xl text-[#1caf7e] absolute left-[-20px] opacity-20" />
                <h1 className="text-2xl text-black font-bold">{item.title}</h1>
              </div>
              <img
                src={item.image}
                alt=""
                className="w-[100px] hb-[100px] transfom hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
            <div id="bottom" className="w-full">
              <p className="text-end tex-lg text-gray-600 font-medium">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
