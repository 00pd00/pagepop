import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookContext from "../utils/BookContext";

const BookCard = ({ displaydata }) => {
  
    const {setCurrent, current} = useContext(BookContext)


  const fallbackImage =
    "https://t3.ftcdn.net/jpg/00/28/90/20/360_F_28902059_Kv9y7FKcnkZY6ho7tfSq4YxPm1oq0U4B.jpg";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {displaydata.map((item, index) => (
        <Link
          to="/bookpage"
          key={index}
          onClick={()=> setCurrent(item) }
          className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center text-center"
        >
          <img
            src={item?.imageLinks?.thumbnail || fallbackImage}
            alt="book"
            className="w-32 h-48 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-500">
            {item.authors?.join(", ") || "Unknown Author"}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BookCard;
