// Card.js
import React from "react";

export default function Card({
  id,
  name,
  image,
  company,
  processor,
  ram,
  storage,
  graphics,
  price,
}) {
  return (
    <div className="w-[280px] h-[420px] rounded verflow-hidden shadow-lg bg-white m-4 p-2.5 flex flex-col">
      <img className="w-full h-32 object-contain" src={image} alt={name} />
      <div className="flex-grow px-2 py-3">
        <div className="font-bold text-lg mb-1">{name}</div>
        <div className="text-gray-600 mb-1">
          Brand: <span className="font-semibold">{company}</span>
        </div>
        <div className="text-gray-600 mb-1">Specifications:</div>
        <ul className="list-disc list-inside text-gray-700 mb-2 text-sm">
          <li>Processor: {processor}</li>
          <li>RAM: {ram}</li>
          <li>Storage: {storage}</li>
          <li>Graphics: {graphics}</li>
        </ul>
        <span className="text-gray-900 font-bold text-lg">{price}</span>
      </div>
      <div className="px-2 py-2 flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-3 rounded text-sm">
          Add to Cart
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-gray-800 font-bold py-2 px-3 rounded text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}
