import React, {  useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { setCurrent } from "../utils/FavSlice";
import { useDispatch } from "react-redux";

const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC4mXNVekSV0maL9XW5AH4nlCatkVKGt5vQ&s";

const AdvanceForm = () => {
  const [displaydata, setdisplaydata] = useState([]);
  const [titleQuery, settitleQuery] = useState("");
  const [authorQuery, setauthorQuery] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const dispatch = useDispatch()


  const datafetch = async (e) => {
    e.preventDefault();
    if (!titleQuery.trim() && !authorQuery.trim()) {
      setError("Please enter at least a title or author.");
      return;
    }
    setError("");
    let data;
    if (authorQuery.length === 0) {
      data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}&maxResults=40&startIndex=0`
      );
    } else if (titleQuery.length === 0) {
      data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorQuery}&maxResults=40&startIndex=0`
      );
    } else {
      data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}+inauthor:${authorQuery}&maxResults=40&startIndex=0`
      );
    }
    const datajson = await data.json();
    const volumeInfo = datajson?.items?.map((item) => item?.volumeInfo) || [];
    setdisplaydata(volumeInfo);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(displaydata.length / itemsPerPage);
  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displaydata.slice(start, start + itemsPerPage);
  }, [displaydata, currentPage]);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <form
        onSubmit={datafetch}
        className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Advanced Book Search
        </h2>

        {error && (
          <p className="text-red-600 text-center mb-4 text-sm">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="title" className="block mb-1 text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={titleQuery}
              onChange={(e) => settitleQuery(e.target.value)}
              placeholder="Enter book title"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
            />
          </div>
          <div>
            <label htmlFor="Author" className="block mb-1 text-sm font-medium">
              Author
            </label>
            <input
              type="text"
              id="Author"
              value={authorQuery}
              onChange={(e) => setauthorQuery(e.target.value)}
              placeholder="Enter author name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
            />
          </div>
          <div>
            <label htmlFor="Genre" className="block mb-1 text-sm font-medium">
              Genre
            </label>
            <input
              type="text"
              id="Genre"
              placeholder="Genre (optional)"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedBooks.map((item, index) => (
          <Link
          to={"/bookpage"}
          onClick={() => dispatch(setCurrent(item))}
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center text-center h-full"
        >
          <img
            src={item?.imageLinks?.thumbnail || fallbackImage}
            alt="book"
            className="w-32 h-48 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-lg line-clamp-2 min-h-[3rem]">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {item.authors?.join(", ") || "Unknown Author"}
          </p>
          <button className="mt-auto bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
            Remove
          </button>
        </Link>
        
        ))}
      </div>

      {displaydata.length > 0 && (
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-3 py-1 text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvanceForm;
