import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 px-4">
      <h1 className="text-9xl font-extrabold text-amber-700">404</h1>
      <p className="text-2xl md:text-4xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mt-2 mb-6 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-amber-600 text-white rounded-md text-lg font-semibold hover:bg-amber-700 transition"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Errorpage;
