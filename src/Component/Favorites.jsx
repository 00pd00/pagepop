import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/FavSlice";
import { Link } from "react-router-dom";
import BookContext from "../utils/BookContext";

const Favorites = () => {
  const fallbackImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC4mXNVekSV0maL9XW5AH4nlCatkVKGt5vQ&s";

  const dummyBooks = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const HandleClear = () => {
    dispatch(clearCart());
  };

  const handleRemove = (book) => {
    dispatch(removeItem(book)); 
  };

  const { setCurrent } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-20">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Your Favorite Books
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dummyBooks?.map((book, index) => (
          <div key={index} className="bg-white p-3 rounded-xl shadow text-center">
            <Link
              to={"/bookpage"}
              onClick={() => setCurrent(book)}
              className="block"
            >
              <img
                src={book?.imageLinks?.thumbnail || fallbackImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-sm font-medium text-gray-800">
                {book.title}
              </h3>
            </Link>
            <button
              onClick={() => handleRemove(book)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto mt-4"
        onClick={HandleClear}
      >
        Clear All
      </button>
    </div>
  );
};

export default Favorites;
