import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import aboutImage from './assets/about.png'; // Add the correct image path
import popupImage from './assets/about2.png'; // Add the correct popup image path

const AboutUsPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  // State to manage the popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="m-0 p-0 bg-white overflow-hidden"> {/* Changed background to white */}
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row h-full space-y-8 md:space-y-0 p-8 md:p-12">
        {/* Left Section - Image with Scroll Animation */}
        <div 
          className="flex-1 md:w-1/2 flex items-center justify-center p-6"
          data-aos="zoom-in-up" // AOS animation for zooming effect when it enters the viewport
        >
          <div
            className="w-full h-72 md:w-full md:h-full max-w-md bg-cover bg-center border-8 border-[#16423C] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${aboutImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform', // Optimize for animation
            }}
          ></div>
        </div>

        {/* Right Section - Content */}
        <div 
          className="flex-1 p-8 flex flex-col justify-center bg-white rounded-xl shadow-2xl"
          data-aos="fade-left" // AOS animation for sliding in content from the left
        >
          <h1 className="text-6xl font-extrabold text-[#16423C] mb-8 text-center uppercase tracking-wide">
            About Us
          </h1>
          <p className="text-xl font-serif text-[#333] leading-relaxed mb-6">
            <b>Fasal 2 Bazar</b> has been excelling for two years, offering direct purchasing of crops from small and large farmers at competitive prices. We sell these crops through our own webstore and various third-party platforms, ensuring farmers get the best value. Our company is committed to providing the highest benefits to farmers, promoting a fair and sustainable agricultural marketplace.
          </p>
          <p className="text-xl font-serif text-[#333] mt-6 leading-relaxed mb-6">
            We aim to revolutionize the way agricultural products are traded and provide innovative solutions to enhance the efficiency and sustainability of the farming industry. Whether you're looking to buy or sell, <b>Fasal 2 Bazar</b> makes the process easy and convenient.
          </p>
          <div className="flex justify-center mt-8">
            <button 
              onClick={togglePopup}
              className="bg-[#16423C] text-white py-3 px-8 rounded-full hover:bg-[#0f2e26] shadow-lg transform transition duration-300"
            >
              More
            </button>
          </div>
        </div>
      </div>

      {/* Popup Section */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 scale-95 opacity-0 animate-popup">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <img
              src={popupImage}
              alt="Popup"
              className="w-full max-w-3xl h-auto rounded-lg"
              style={{ maxWidth: '600px', height: 'auto' }} // Control the image size
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsPage;