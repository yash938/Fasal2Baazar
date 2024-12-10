import React from 'react';
import { useInView } from 'react-intersection-observer';
import homeImage from './assets/home.jpg'; // Adjust the path as necessary
import rotatingImage from './assets/f2b.png'; // Image for rotation, change as necessary

const HomePage = () => {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-between bg-cover bg-center animate-pageLoad"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        {/* Welcome Text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-smoothSlideIn ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          ref={sectionRef}
        >
          <span className="text-white"> Welcome to </span>
        </h1>

        {/* FASAL2BAZAR Text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-smoothSlideIn ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[#C2FFC7]">FASAL</span>
          <span> </span>
          <span className="text-[#526E48]">2</span>
          <span> </span>
          <span className="text-[#C2FFC7]">BAZAR</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl animate-fadeIn ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Your One-Stop Solution for all Agricultural Needs
        </p>

        {/* Rotating Circular Image */}
        <div
          className="relative mt-10 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden"
          style={{ animation: 'spin 10s linear infinite' }}
        >
          <img
            src={rotatingImage}
            alt="Rotating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Inline Keyframes for Additional Animations */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes smoothSlideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              transform: translateX(30%);
              opacity: 0.7;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes pageLoad {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-pageLoad {
            animation: pageLoad 1.5s ease-in-out forwards;
          }

          .animate-smoothSlideIn {
            animation: smoothSlideIn 3s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 2s ease-out forwards;
          }

          .opacity-0 {
            opacity: 0;
          }

          .opacity-100 {
            opacity: 1;
          }

          .transition-opacity {
            transition: opacity 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
