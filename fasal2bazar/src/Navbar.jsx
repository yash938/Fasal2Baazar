import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ setCurrentPage }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full h-16 z-10 flex items-center px-4 ${
        scrolled ? "bg-[#6A9C89] shadow-lg" : "bg-[#A8DBB1]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <button
          className="flex items-center"
          onClick={() => setCurrentPage("default")}
        >
          <img
            src="/src/assets/f2b.png" // Replace with the actual logo path
            alt="Logo"
            className="w-10 h-10 rounded-full mr-2"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-[#16423C]">FASAL</span>{" "}
            <span className="text-[#526E48]">2</span>{" "}
            <span className="text-[#16423C]">BAZAR</span>
          </h1>
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex ml-auto space-x-4">
        {[
          { text: "About Us", page: "aboutus" },
          { text: "Services", page: "services" },
          { text: "Contact Us", page: "contactus" },
          { text: "Login", page: "login" },
        ].map(({ text, page }, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentPage(page)}
              className="p-3 hover:bg-[#87B49F] rounded-md cursor-pointer duration-300 text-[#16423C] hover:text-white"
            >
              {text}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="ml-auto block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation */}
      {/* Background Blur effect for mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#16423C] text-white flex flex-col items-center justify-center transition-transform duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Blur effect div */}
        {nav && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-0"></div>
        )}

        {[{ text: "About Us", page: "aboutus" },
          { text: "Services", page: "services" },
          { text: "Contact Us", page: "contactus" },
          { text: "Login", page: "login" },
        ].map(({ text, page }, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
              setNav(false);
            }}
            className="text-xl mb-4 hover:underline z-10"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
