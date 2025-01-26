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
    <div className="group relative w-full max-w-xs overflow-hidden rounded-lg transition-all duration-300 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 shadow-lg">
      {/* Image Container with Smaller Height */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-300 p-4 h-40 flex items-center justify-center">
        <img
          src={src}
          alt={name}
          className="w-full h-full max-h-full object-contain transition-transform group-hover:scale-110 duration-300"
        />
      </div>

      {/* Content Section with Enhanced Padding and Background */}
      <div className="p-4 bg-slate-900/70">
        <h3 className="text-xl text-center font-extrabold text-white mb-2 capitalize tracking-wide">
          {name}
        </h3>

        <div className="flex flex-col justify-center items-center space-y-2 mb-4">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium px-4 py-2 text-sm rounded-lg shadow-md  transition-all duration-300">
            {type}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-800 rounded-lg p-3 shadow-md hover:bg-blue-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">Height</p>
            <p className="text-base font-bold text-white">{height}</p>
          </div>
          <div className="bg-green-800 rounded-lg p-3 shadow-md hover:bg-green-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">Weight</p>
            <p className="text-base font-bold text-white">{weight}</p>
          </div>
          <div className="bg-red-800 rounded-lg p-3 shadow-md hover:bg-red-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">Speed</p>
            <p className="text-base font-bold text-white">{speed}</p>
          </div>

          <div className="bg-purple-800 rounded-lg p-3 shadow-md hover:bg-purple-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">
              Experience
            </p>
            <p className="text-base font-bold text-white">{experience}</p>
          </div>

          <div className="bg-indigo-800 rounded-lg p-3 shadow-md hover:bg-indigo-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">Attack</p>
            <p className="text-base font-bold text-white">{info}</p>
          </div>

          <div className="bg-teal-800 rounded-lg p-3 shadow-md hover:bg-teal-700 transition duration-200">
            <p className="text-xs text-white font-medium uppercase">
              Abilities
            </p>
            <p className="text-base font-bold text-white">{abilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
