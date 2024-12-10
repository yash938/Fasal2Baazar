import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For link styling if needed, though we're using state navigation here
import AOS from "aos";
import "aos/dist/aos.css";

const SignupPage = ({ setCurrentPage }) => {
  const [aadhaarImage, setAadhaarImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    aadhaar: "",
    pan: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAadhaarImage(file);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!/^\d{12}$/.test(formData.aadhaar)) {
      newErrors.aadhaar = "Aadhaar number must be exactly 12 digits.";
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      newErrors.pan = "PAN card number must be exactly 10 characters (e.g., ABCDE1234F).";
    }
    if (!aadhaarImage) newErrors.aadhaarImage = "Aadhaar image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", { ...formData, aadhaarImage });
      alert("Form submitted successfully!");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      aadhaar: "",
      pan: "",
    });
    setAadhaarImage(null);
    setErrors({});
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('./src/assets/login.jpg')",
        backgroundAttachment: "fixed",
        marginBottom: 0, // Remove any margin at the bottom
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div
        className="relative bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-3xl z-10 mt-20 sm:mt-24 mb-0" // Remove margin-bottom from the card
        data-aos="zoom-in"
      >
        <div className="flex justify-center">
          <img
            src="./src/assets/f2b.png"
            alt="Logo"
            className="w-24 h-24 rounded-full border-4 border-[#16423C] mb-4"
          />
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#16423C]">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mt-2">Join us and start your journey</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-medium text-sm">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              />
              {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
            </div>

            {/* Email ID */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium text-sm">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Aadhaar Card Number */}
            <div>
              <label htmlFor="aadhaar" className="block text-gray-700 font-medium text-sm">
                Aadhaar Card Number
              </label>
              <input
                type="text"
                id="aadhaar"
                placeholder="Enter your Aadhaar number"
                value={formData.aadhaar}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              />
              {errors.aadhaar && <p className="text-red-500 text-xs">{errors.aadhaar}</p>}
            </div>

            {/* PAN Card Number */}
            <div>
              <label htmlFor="pan" className="block text-gray-700 font-medium text-sm">
                PAN Card Number
              </label>
              <input
                type="text"
                id="pan"
                placeholder="Enter your PAN card number"
                value={formData.pan}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              />
              {errors.pan && <p className="text-red-500 text-xs">{errors.pan}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium text-sm">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent"
              rows="3"
            ></textarea>
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>

          {/* Submit and Reset Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-[#16423C] text-white font-semibold rounded-md hover:bg-[#146240] focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:ring-opacity-50"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setCurrentPage("login")}
              className="text-[#16423C] font-semibold hover:text-[#146240]"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
