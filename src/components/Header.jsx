import { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 sticky top-0 z-30 
    border-[8px] border-yellow-700/50 
    shadow-lg shadow-yellow-500/20
    backdrop-blur-sm bg-opacity-90
    transition-all duration-300 
    hover:shadow-yellow-500/40"
    >
      <div id="logo" className="group">
        <h1
          className="text-white font-bold text-5xl 
        transition-all duration-300 
        group-hover:text-yellow-400 
        group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
        >
          Barber{" "}
          <span
            className="italic text-yellow-500 
          group-hover:text-yellow-300
          transition-colors duration-300"
          >
            Shop
          </span>
        </h1>
      </div>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer 
          p-3 rounded-lg 
          relative 
          overflow-hidden
          before:content-[''] 
          before:absolute 
          before:bottom-0 
          before:left-0 
          before:w-full 
          before:h-1 
          before:bg-yellow-500 
          before:transform 
          before:scale-x-0 
          before:origin-right 
          before:transition-transform 
          before:duration-300
          hover:before:scale-x-100 
          hover:before:origin-left
          hover:text-yellow-400
          transition-colors 
          duration-300"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark
            className="text-yellow-500 text-2xl cursor-pointer 
          animate-pulse 
          hover:rotate-180 
          transition-all 
          duration-300"
          />
        ) : (
          <FaBars
            className="text-yellow-500 text-2xl cursor-pointer 
          hover:rotate-90 
          transition-all 
          duration-300"
          />
        )}
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-black/90 p-4 absolute top-[80px] left-0 
      border-b-4 border-yellow-500 
      backdrop-blur-sm`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer 
            p-3 rounded-lg 
            hover:bg-yellow-500 
            hover:text-black 
            w-full text-center
            relative 
            overflow-hidden
            transition-all 
            duration-300
            group"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className="relative z-10 group-hover:text-black 
              transition-colors duration-300"
              >
                {link}
              </span>
              <span
                className="absolute inset-0 bg-yellow-500 
              transform -translate-x-full 
              group-hover:translate-x-0 
              transition-transform 
              duration-300 
              z-0"
              ></span>
            </Link>
          ))}
        </ul>
      </div>

      <button
  className="bg-yellow-500 
      px-8 py-3 
      rounded-full 
      text-black 
      font-bold 
      mt-3 
      hidden 
      lg:flex 
      transform 
      hover:scale-110 
      hover:bg-yellow-400 
      transition-all 
      duration-300 
      cursor-pointer
      group
      relative
      overflow-hidden
      shadow-lg 
      hover:shadow-yellow-500/50"
>
  <RouterLink to="/appointment" className="relative z-10 group-hover:text-black transition-colors duration-300">
    BOOK NOW
  </RouterLink>
  <span
    className="absolute inset-0 bg-white 
      transform -translate-x-full 
      group-hover:translate-x-0 
      transition-transform 
      duration-300 
      z-0"
  ></span>
</button>
    </nav>
  );
};

export default Header;
