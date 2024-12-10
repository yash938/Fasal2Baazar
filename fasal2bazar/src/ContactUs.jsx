import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [pageInView, setPageInView] = useState(false);

  const contactDetailsRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactDetailsRef.current) {
      observer.observe(contactDetailsRef.current);
    }

    return () => {
      if (contactDetailsRef.current) {
        observer.unobserve(contactDetailsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setPageInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center py-10 px-4 overflow-hidden" // Added overflow-hidden
      initial={{ opacity: 0 }}
      animate={pageInView ? { opacity: 1, transition: { duration: 1.5 } } : {}}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#16423C] mb-6 uppercase text-center">
        Contact Us
      </h1>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8">
        {/* Contact Form and Contact Details in One Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg"
            initial={{ opacity: 0 }}
            animate={pageInView ? { opacity: 1, transition: { duration: 1 } } : {}}
            style={{ willChange: 'opacity' }} // Optimize for animation
          >
            <h2 className="text-2xl font-semibold text-[#16423C] mb-4">
              Get in Touch
            </h2>
            {isSubmitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
                Thank you! Your query has been submitted.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#16423C] text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            ref={contactDetailsRef}
            className="bg-white shadow-lg p-6 rounded-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            style={{ willChange: 'opacity' }} // Optimize for animation
          >
            <div className="text-center mb-6">
              <img
                src="./src/assets/f2b.png"
                alt="Logo"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#16423C] mb-4">
              Our Details
            </h2>
            <div>
              <h3 className="font-medium text-lg text-[#16423C] flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[#16423C]" />
                Address
              </h3>
              <p className="text-gray-700">
                SAGE University, Bhopal, Madhya Pradesh, India - 462036
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg text-[#16423C] flex items-center">
                <FaEnvelope className="mr-2 text-[#16423C]" />
                Email
              </h3>
              <p className="text-gray-700">Fasal2bazar@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-lg text-[#16423C] flex items-center">
                <FaPhoneAlt className="mr-2 text-[#16423C]" />
                Phone
              </h3>
              <p className="text-gray-700">+91 63893 24366</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-6xl mt-8">
        <h2 className="text-2xl font-semibold text-[#16423C] mb-4 text-center">
          Find Us Here
        </h2>
        <motion.div
          className="w-full h-72 sm:h-96"
          initial={{ opacity: 0 }}
          animate={pageInView ? { opacity: 1, transition: { duration: 1 } } : {}}
          style={{ willChange: 'opacity' }} // Optimize for animation
        >
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7328.601767153113!2d77.3530716514791!3d23.304839598775942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733057859547!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;