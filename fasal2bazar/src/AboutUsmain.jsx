import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animation styles

const AboutUs = () => {
  const [modalContent, setModalContent] = useState(null); // State to manage modal content

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation once
    });
  }, []);

  // Function to close the modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5 sm:p-10 space-y-12 relative">
      {/* Big Heading with Animation */}
      <div
        className="text-center pt-10 sm:pt-20"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-[#16423C] animate-bounce">
          ABOUT US
        </h1>
      </div>

      {/* Subtopics Section with Side-by-Side Layout */}
      <div className="space-y-12 sm:space-y-20">
        {/* Subtopic 1 */}
        <div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-10"
          data-aos="fade-right"
        >
          <img
            src="./src/assets/about1.jpg"
            alt="Farmers working"
            className="rounded-lg shadow-lg w-full sm:w-[400px] h-[250px] object-cover"
          />
          <div className="text-center sm:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#16423C]">
              Empowering Farmers
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              At Fasal2Bazar, empowering farmers is at the heart of everything we do. We believe farmers are the backbone of our economy, yet they often face challenges such as unstable market prices, lack of resources, and limited access to buyers.
            </p>
            <button
              onClick={() =>
                setModalContent({
                  title: "Empowering Farmers",
                  content: (
                    <ul className="list-inside list-disc text-gray-700 space-y-2">
                      <li>
                        <strong>Fair Pricing:</strong> We ensure farmers get the best value for their crops by eliminating middlemen and providing fair market prices.
                      </li>
                      <li>
                        <strong>Sustainability Practices:</strong> We promote eco-friendly farming techniques to improve yields while protecting the environment.
                      </li>
                      <li>
                        <strong>Capacity Building:</strong> We provide training, webinars, and modern tools to empower farmers to enhance productivity.
                      </li>
                    </ul>
                  ),
                })
              }
              className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Subtopic 2 */}
        <div
          className="flex flex-col sm:flex-row-reverse items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-10"
          data-aos="fade-left"
        >
          <img
            src="./src/assets/about2.jpg"
            alt="Farmers working"
            className="rounded-lg shadow-lg w-full sm:w-[400px] h-[250px] object-cover"
          />
          <div className="text-center sm:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#16423C]">
              Bridging the Gap
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              At Fasal2Bazar, we are dedicated to closing the gap between farmers, industrial buyers, and consumers.
            </p>
            <button
              onClick={() =>
                setModalContent({
                  title: "Bridging the Gap",
                  content: (
                    <ul className="list-inside list-disc text-gray-700 space-y-2">
                      <li>
                        <strong>Direct Connections:</strong> We connect farmers directly with buyers, eliminating unnecessary intermediaries.
                      </li>
                      <li>
                        <strong>Seamless Transactions:</strong> Our platform simplifies the buying and selling process with efficient tools.
                      </li>
                      <li>
                        <strong>Real-Time Insights:</strong> We provide farmers with market data to help them make informed decisions.
                      </li>
                    </ul>
                  ),
                })
              }
              className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div
        className="flex flex-col items-center space-y-6 text-center"
        data-aos="fade-up"
      >
        <img
          src="./src/assets/about3.jpg"
          alt="Sustainability"
          className="rounded-lg shadow-lg w-full sm:w-[800px] h-[400px] object-cover"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#16423C]">
          Sustainability First
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-4xl">
          At Fasal2Bazar, sustainability isn’t just a goal; it’s a way of life.
        </p>
        <button
          onClick={() =>
            setModalContent({
              title: "Sustainability First",
              content: (
                <ul className="list-inside list-disc text-gray-700 space-y-2">
                  <li>
                    <strong>Eco-Friendly Practices:</strong> Organic farming, crop rotation, and reduced chemical usage.
                  </li>
                  <li>
                    <strong>Resource Management:</strong> Optimize water usage and conserve vital resources.
                  </li>
                  <li>
                    <strong>Renewable Energy:</strong> Encourage solar-powered irrigation and wind turbines.
                  </li>
                </ul>
              ),
            })
          }
          className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all"
        >
          Read More
        </button>
      </div>

      {/* Our Team Section */}
      <div className="pt-12" data-aos="fade-up">
        <h2 className="text-center text-4xl font-bold text-[#16423C] mb-12">
          OUR TEAM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col items-center space-y-4" data-aos="zoom-in">
            <img
              src="./src/assets/yash.jpg"
              alt="Yash Sharma"
              className="rounded-full shadow-lg w-36 sm:w-48 h-36 sm:h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-green-700">Yash Sharma</h3>
            <p className="text-gray-700 text-center">
              <strong>Backend Developer</strong>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4" data-aos="zoom-in">
            <img
              src="./src/assets/me.png"
              alt="Yogender Mishra"
              className="rounded-full shadow-lg w-36 sm:w-48 h-36 sm:h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-green-700">Yogender Mishra</h3>
            <p className="text-gray-700 text-center">
              <strong>Frontend Developer</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white rounded-lg shadow-2xl w-[90%] max-w-lg p-6 sm:p-8 relative animate-fadeIn overflow-y-auto max-h-[90vh]"
            data-aos="zoom-in"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">
              {modalContent.title}
            </h3>
            <div className="text-gray-700 space-y-4">{modalContent.content}</div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
