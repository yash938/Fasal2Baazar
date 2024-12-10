import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#16423C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
        {/* Left Section: Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold uppercase">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Our Services
              </a>
            </li>
            
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section: Logo */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="./src/assets/f2b.png"
            alt="Logo"
            className="w-24 h-24 rounded-full bg-white p-2 shadow-md"
          />
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Fasal2Bazar. All rights reserved.
          </p>
        </div>

        {/* Right Section: Contact Details */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold uppercase">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-green-400" />
              <span>fasal2bazar@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-green-400" />
              <span>+91 63893 24266</span>
             
            </li>
            <li className="flex items-center">
              <FaFacebook className="mr-2 text-blue-500" />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2 text-blue-400" />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center">
              <FaInstagram className="mr-2 text-pink-500" />
              <a
                href="https://linktr.ee/fasal2bazar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
