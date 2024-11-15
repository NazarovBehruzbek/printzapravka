import React, { useState } from 'react';

export default function CardAdvantages({ title, text, images, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="relative h-[250px] cursor-pointer" data-aos="fade-up" data-aos-duration="1000"
    data-aos-offset="50">
      <div className="relative h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <img
          src={images}
          alt="Card image"
          className="w-full h-[220px] object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-[50px] left-4 right-4">
          <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm text-white mb-2">{text}</p>
        </div>
        <button
          onClick={handleToggleExpand}
          className="absolute bottom-4 right-4 py-2 px-4 text-white font-semibold border-2 border-gray-700 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 focus:outline-none"
        >
          Подробнее
        </button>

        <div
          className={`absolute inset-0 bg-[#1B2838] bg-opacity-95 flex items-center justify-center p-4 rounded-lg shadow-lg transition-transform duration-300 ${
            isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          {isExpanded && (
            <div className="relative w-full max-w-md p-6  rounded-lg shadow-lg">

              <h4 className="text-lg font-semibold text-white mb-2">Детали</h4>
              <p className="text-white">{description}</p>
            </div>
          )}
           <button
                onClick={handleToggleExpand}
                className="absolute !w-[40px] flex justify-center items-center !h-[40px] top-4 right-4 p-2 text-white text-lg font-semibold bg-[#1B2838] rounded-full hover:scale-105 transition-all duration-200 focus:outline-none"
              >
                ✕
              </button>
        </div>
      </div>
    </div>
  );
}
