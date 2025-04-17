import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-2">Oops! Page not found</p>
      <p className="text-gray-500 text-sm mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
