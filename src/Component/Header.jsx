import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-blue-600">PagePop</h1>
        <nav className="hidden md:flex space-x-4">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition text-sm"
          >
            Home
          </a>
          <a
            href="/library"
            className="text-gray-700 hover:text-blue-600 transition text-sm"
          >
            Favorites
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition text-sm"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
