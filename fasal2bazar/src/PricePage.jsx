import React, { useState } from "react";

const PricePage = () => {
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

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    setQuantity(0);
    setPrice(0);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
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
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-[#16423C] mb-6 text-center uppercase">
        Grain Price Calculator
      </h1>

      {/* Card Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
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
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-center text-[#16423C]">
                {card.name}
              </h3>
            </div>

            {/* Rate Card */}
            <div className="bg-[#F3F3F3] rounded-lg shadow-md border border-gray-300 p-4 mt-2 flex justify-center items-center h-24 md:h-28 lg:h-48">
              <p className="text-sm md:text-base lg:text-lg font-semibold text-center text-gray-800">
                Rate: ₹{card.rate} per quintal
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full">
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
                className="w-full bg-[#16423C] text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
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

export default PricePage;
