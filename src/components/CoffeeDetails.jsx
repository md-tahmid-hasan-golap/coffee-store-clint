import React from "react";
import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const { data: coffee } = useLoaderData();
  const {
    name,
    price,
    quantity,
    photo,
    email,
    details,
    taste,
    supplier,
    likedBy,
  } = coffee || {};

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
        {/* Image Section */}
        <div className="h-56 overflow-hidden">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details Section */}
        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-bold text-amber-700">{name}</h2>
          <p className="text-sm text-gray-600">{details}</p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-amber-50 rounded-md p-2 text-center">
              <p className="text-gray-500">Price</p>
              <p className="font-semibold text-amber-700">${price}</p>
            </div>
            <div className="bg-amber-50 rounded-md p-2 text-center">
              <p className="text-gray-500">Quantity</p>
              <p className="font-semibold text-amber-700">{quantity}</p>
            </div>
            <div className="bg-amber-50 rounded-md p-2 text-center">
              <p className="text-gray-500">Taste</p>
              <p className="font-semibold text-amber-700">{taste}</p>
            </div>
            <div className="bg-amber-50 rounded-md p-2 text-center">
              <p className="text-gray-500">Supplier</p>
              <p className="font-semibold text-amber-700">{supplier}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {" "}
            {email && (
              <div className="text-xs text-gray-500 mt-2">
                <span className="font-medium text-gray-700">Email:</span>{" "}
                {email}
              </div>
            )}
            <span>Liked : {likedBy.length}</span>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-md hover:bg-amber-700 transition-colors">
                Order Now
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors">
                Liked
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
