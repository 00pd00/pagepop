import React from "react";
import { Link } from "react-router-dom";

const BookNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Book Not Found</h1>
      <p className="text-gray-600 mb-6 text-sm md:text-base">
        Sorry, the book you're looking for isn't available right now.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default BookNotFound;
