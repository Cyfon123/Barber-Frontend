import { useEffect } from "react";
import gal1 from "../assets/images/gal1.jpg";
import gal2 from "../assets/images/gal2.jpg";
import gal3 from "../assets/images/gal3.jpg";
import gal4 from "../assets/images/gal4.jpg";
import gal5 from "../assets/images/gal5.jpg";
import gal6 from "../assets/images/gal6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });

  return (
    <>
   <section className="w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900 -mb-[200px]">
        <h1 className="text-6xl text-white font-bold text-center">
          Experience The Best Haircut &<br /> Shaving Services
        </h1>
      </section>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 gap-10">
          {[gal1, gal2, gal3, gal4, gal5, gal6].map((img, index) => (
            <img
              key={index}
              data-aos="zoom-out"
              data-aos-delay={`${200 + index * 100}`}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-xl w-full h-[350px] object-cover 
              border-2 border-white 
              shadow-lg shadow-gray-600 
              hover:shadow-xl hover:shadow-gray-500 
              transition-all duration-300 
              transform hover:-translate-y-2"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
