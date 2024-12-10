import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animation styles

const ContactUs = () => {
  // State for controlling the thank you message popup
  const [showThankYou, setShowThankYou] = useState(false);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation once
    });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10 space-y-12">
      {/* Big Heading with Animation */}
      <div className="text-center pt-20" data-aos="fade-down" data-aos-duration="1500">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#16423C] animate-bounce">CONTACT US</h1>

      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xs mx-auto">
            <h2 className="text-xl font-semibold text-green-800">Thank you for submitting your query!</h2>
            <p className="text-gray-600 mt-4">We will get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Contact Card Section (Our Details) */}
      <div className="flex justify-center items-center space-x-10 mb-12 flex-col md:flex-row">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center space-x-0 md:space-x-8" data-aos="fade-up">
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src="./src/assets/f2b.png" // Replace with your logo image
              alt="Company Logo"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </div>

          {/* Contact Details */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-semibold text-green-800">Our Address</h2>
            <p className="text-gray-700">SAGE University, Bhopal, Madhya Pradesh, India</p>

            <div className="text-gray-700">
              <p className="font-medium text-green-600">Phone: +91 63893 24266</p>
              <p className="font-medium text-green-600">Email: fasal2bazar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-center space-x-12 my-8" data-aos="fade-up">
        <a href="https://wa.me/+916389324266" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp text-5xl sm:text-6xl text-green-600 hover:text-green-800 transform hover:scale-125 transition-all"></i>
        </a>
        <a href="https://linktr.ee/fasal2bazar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-5xl sm:text-6xl text-pink-600 hover:text-pink-800 transform hover:scale-125 transition-all"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x text-5xl sm:text-6xl text-black hover:text-gray-700 transform hover:scale-125 transition-all"></i>
        </a>
      </div>

      {/* Query Form Section */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center text-[#16423C] mb-6">Send Us a Query</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              className="p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium">Your Message</label>
            <textarea
              id="message"
              className="p-3 mt-2 border border-gray-300 rounded-lg"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 mt-8" data-aos="fade-up">
        <iframe
          title="Location Map"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7328.601767153113!2d77.3530716514791!3d23.304839598775942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733057859547!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
