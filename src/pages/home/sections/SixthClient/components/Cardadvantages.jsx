import React, { useState } from 'react';

export default function CardAdvantages({ title, text, images, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="relative w-full  p768:w-[70%] p992:w-full mx-auto h-[250px]">
      <div className="relative h-full group">
        {/* Основная карточка */}
        <div className="rounded-3xl h-full overflow-hidden bg-[#EFEFEF] shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3">
          <img
            src={images}
            alt="Remont komputerov"
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-300">{text}</h3>
            <h4 className="text-lg font-medium mb-4 transform group-hover:scale-105 transition-all duration-300">{title}</h4>
            <button
              onClick={handleToggleExpand}
              className="py-2 px-6 text-white font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
            >
              Подробнее
            </button>
          </div>
        </div>

        {/* Всплывающая карточка */}
        <div
          className={`absolute inset-0 p-4 bg-[#1B2838] bg-opacity-95 rounded-3xl shadow-lg transition-all duration-500 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          }`}
        >
          <button
            onClick={handleToggleExpand}
            className="absolute top-2 right-2 p-2 text-white text-xl font-semibold  rounded-full transition-all duration-200 focus:outline-none"
          >
            ✕
          </button>
          <h3 className=" text-sm p480:text-xl p992:text-2xl w-[50%] font-bold text-white mb-2">{title}</h3>
          <p className="text-white  text-sm   p480:text-xl p992:text-sm mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
