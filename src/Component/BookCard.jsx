import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BookContext from "../utils/BookContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/FavSlice";
import { FaHeart } from "react-icons/fa";

const BookCard = ({ displaydata }) => {
  const { setCurrent } = useContext(BookContext);
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.cart.items);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const fallbackImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC4mXNVekSV0maL9XW5AH4nlCatkVKGt5vQ&s";

  const totalPages = Math.ceil(displaydata.length / itemsPerPage);

  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displaydata.slice(start, start + itemsPerPage);
  }, [displaydata, currentPage]);

  return favorites ? (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedBooks.map((item, index) => {
          const isFav = favorites?.some((fav) => fav?.title === item?.title);
          return (
            <div key={index} className="flex flex-col items-center relative">
              <Link
                to="/bookpage"
                onClick={() => setCurrent(item)}
                className="bg-white w-full h-80 rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center text-center justify-between"
              >
                <img
                  src={item?.imageLinks?.thumbnail || fallbackImage}
                  alt="book"
                  className="w-32 h-48 object-cover rounded mb-2"
                />
                <div>
                  <h3 className="font-semibold text-lg line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {item.authors?.join(", ") || "Unknown Author"}
                  </p>
                </div>
              </Link>
              <button
                onClick={() => !isFav && handleAdd(item)}
                className="absolute top-3 right-4 text-xl"
              >
                <FaHeart color={isFav ? "red" : "gray"} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1 text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div>Error Page</div>
  );
};

export default BookCard;
