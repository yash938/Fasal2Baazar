import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animation styles

const Services = () => {
  const cards = [
    { id: 1, name: "Wheat", image: "./src/assets/wheat.png", rate: 4000 },
    { id: 2, name: "Rice", image: "./src/assets/rice.png", rate: 3380 },
    { id: 3, name: "Maize", image: "./src/assets/maize.png", rate: 1380 },
    { id: 4, name: "Millets", image: "./src/assets/millets.png", rate: 2800 },
    { id: 5, name: "Mustard", image: "./src/assets/musturd.png", rate: 5500 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    setQuantity(0);
    setPrice(0);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const calculatePrice = () => {
    if (quantity > 0 && selectedCard) {
      setPrice(quantity * selectedCard.rate);
    }
  };

  const resetFields = () => {
    setQuantity(0);
    setPrice(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4">
      {/* Heading Section */}
      <div className="text-center mb-10 pt-24 sm:pt-32" data-aos="fade-down" data-aos-duration="1500">
        <h1
          className="text-5xl sm:text-6xl font-bold text-[#16423C] uppercase"
          style={{ letterSpacing: "1px" }}
        >
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          Helping farmers get the best value for their crops.
        </p>
      </div>

      {/* Service Card - Grain Selling */}
      <div
        className="bg-white shadow-md rounded-lg max-w-sm w-full p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold text-[#16423C] text-center">
          Want to sell grain?
        </h2>
        <p className="text-gray-600 text-center mt-4">
          Partner with us to sell your crops at the best prices. We connect farmers directly to buyers through our web store and other platforms.
        </p>
      </div>

      {/* Grain Price Calculator Section */}
      <h1
        className="text-4xl font-bold text-[#16423C] mb-8 text-center uppercase"
        data-aos="fade-down"
      >
        Grain Price Calculator
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl mx-auto" data-aos="fade-up">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col">
            {/* Grain Card */}
            <div
              onClick={() => handleCardClick(card)}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105 p-4 cursor-pointer"
            >
              <div className="w-full h-36 md:h-44 lg:h-72 overflow-hidden rounded-md mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-[#16423C]">
                {card.name}
              </h3>
            </div>

            {/* Rate Card */}
            <div className="bg-gray-200 rounded-lg shadow-md p-4 mt-2 flex justify-center items-center h-20">
              <p className="text-sm font-semibold text-center text-gray-800">
                Rate: ₹{card.rate} per quintal
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            data-aos="zoom-in"
          >
            <h2 className="text-lg font-semibold text-[#16423C] mb-4 text-center">
              {selectedCard.name} Calculator
            </h2>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="quantity">
                Enter Quantity (in quintals)
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                min="0"
              />
            </div>
            <div className="mb-4">
              <button
                onClick={calculatePrice}
                className="w-full bg-[#16423C] text-white p-2 rounded-lg hover:bg-green-600"
              >
                Calculate Price
              </button>
            </div>
            {price > 0 && (
              <div className="mb-4">
                <h3 className="text-base font-semibold text-[#16423C] text-center">
                  Total Price: ₹{price}
                </h3>
              </div>
            )}
            <div className="flex justify-between">
              <button
                onClick={resetFields}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                Reset
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
