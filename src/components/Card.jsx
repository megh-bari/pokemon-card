import React from "react";

const Card = ({
  name,
  src,
  height,
  weight,
  speed,
  type,
  info,
  experience,
  abilities,
}) => {
  return (
    <div className="group relative w-full max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Container with Smaller Height */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-300 p-4 h-40 flex items-center justify-center">
        <img
          src={src}
          alt={name}
          className="w-full h-full max-h-full object-contain transition-transform group-hover:scale-110 duration-300"
        />
      </div>

      {/* Content Section with Enhanced Padding and Background */}
      <div className="p-4 bg-white">
        <h3 className="text-xl text-center font-extrabold text-gray-900 mb-2 capitalize tracking-wide">
          {name}
        </h3>

        <div className="flex flex-col justify-center items-center space-y-2 mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            {type}
          </button>
        </div>

        <div className="grid grid-cols-3  gap-4 text-center">
          <div className="bg-blue-100 rounded-lg p-3 shadow-md hover:bg-blue-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Height</p>
            <p className="text-base font-bold text-blue-800">{height}</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 shadow-md hover:bg-green-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Weight</p>
            <p className="text-base font-bold text-green-800">{weight}</p>
          </div>
          <div className="bg-red-100 rounded-lg p-3 shadow-md hover:bg-red-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Speed</p>
            <p className="text-base font-bold text-red-800">{speed}</p>
          </div>

          <div className="bg-purple-100 rounded-lg p-3 shadow-md hover:bg-purple-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Experience</p>
            <p className="text-base font-bold text-purple-800">{experience}</p>
          </div>

          <div className="bg-indigo-100 rounded-lg p-3 shadow-md hover:bg-indigo-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Attack</p>
            <p className="text-base font-bold text-indigo-800">{info}</p>
          </div>

          <div className="bg-teal-100 rounded-lg p-3 shadow-md hover:bg-teal-200 transition duration-200">
            <p className="text-xs text-black font-medium uppercase">Abilities</p>
            <p className="text-base font-bold text-teal-800">{abilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
