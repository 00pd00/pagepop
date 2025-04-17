import React from "react";
import { Link } from "react-router-dom";
import { Heart, Info, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-blue-600">
          <h1>PagePop</h1>
        </Link>

        <nav className="flex space-x-6 items-center">
        <Link
            to="/search"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Search size={20} />
          </Link>
          <Link
            to="/favorites"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Heart size={20} />
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Info size={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
