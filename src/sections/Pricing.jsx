import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  });
  return (
    <section
      id="pricing"
      className="w-full md:px-20 px-10 py-16 flex flex-col justify-center items-center gap-16 bg-gray-800 rounded-xl shadow-2xl"
    >
      <h1
        data-aos="zoom-in"
        className="text-5xl md:text-6xl font-bold text-white text-center tracking-wide mb-8"
      >
        Our Pricing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-[85%]">
        {[
          { name: "Regular Hair Cut", price: "₹100" },
          { name: "Beard Trim", price: "₹80" },
          { name: "Hair Color", price: "₹200" },
          { name: "Shampoo & Styling", price: "₹150" },
          { name: "Facial Treatment", price: "₹300" },
          { name: "Head Massage", price: "₹180" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-6 p-6 rounded-lg bg-gradient-to-tr from-gray-700 to-gray-800 shadow-lg hover:shadow-[0_10px_20px_0_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-b-4 border-cyan-500"
          >
            <h1 className="text-2xl md:text-3xl text-gray-200">{item.name}</h1>
            <h1 className="text-cyan-400 text-3xl md:text-4xl font-bold">
              {item.price}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
