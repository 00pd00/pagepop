import React, { useContext } from "react";
import BookContext from "../utils/BookContext";

const BookPage = () => {
  const { current } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-md w-full  mt-12 p-4 md:p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={current.imageLinks?.thumbnail}
            alt="Book Cover"
            className="w-40 h-auto object-cover rounded self-center"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{current.title}</h1>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Authors:</span>{" "}
              {current.authors?.join(", ") || "Unknown"}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Publisher:</span>{" "}
              {current.publisher}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Published:</span>{" "}
              {current.publishedDate}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Pages:</span>{" "}
              {current.pageCount}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Language:</span>{" "}
              {current.language?.toUpperCase()}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Rating:</span>{" "}
              {current.averageRating || "N/A"} / 5 ({current.ratingsCount || 0} reviews)
            </p>
            <a
              href={current.previewLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Preview Book
            </a>
          </div>
        </div>

        <div className="mt-6 max-h-64 overflow-auto pr-2">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
            {current.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
