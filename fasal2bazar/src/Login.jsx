import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000, easing: "ease-out-quint", once: true, offset: 100 });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('./src/assets/login.jpg')",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div
        className="relative bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md z-10 transition-transform transform hover:scale-105"
        data-aos="zoom-in"
      >
        <div className="flex justify-center">
          <img
            src="./src/assets/f2b.png"
            alt="Logo"
            className="w-24 h-24 rounded-full border-4 border-[#16423C] mb-4"
            style={{ transition: "transform 0.5s ease" }}
          />
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#16423C]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mt-2">Please login to your account</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#16423C] text-white py-2 rounded-md hover:bg-green-700 transition-all"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mt-3 hover:bg-gray-400 transition-all"
          >
            Reset
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              className="text-green-700 font-medium hover:underline"
              onClick={() => setCurrentPage("signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
