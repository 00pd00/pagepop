import React, { useState } from "react";

const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC4mXNVekSV0maL9XW5AH4nlCatkVKGt5vQ&s";

const AdvanceForm = () => {
  const [displaydata, setdisplaydata] = useState([]);
  const [titleQuery, settitleQuery] = useState("");
  const [authorQuery, setauthorQuery] = useState("");
  const [error, setError] = useState("");

  const datafetch = async (e) => {
    e.preventDefault();
    if (!titleQuery.trim() && !authorQuery.trim()) {
      setError("Please enter at least a title or author.");
      return;
    }
    setError("");

    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}+inauthor:${authorQuery}&maxResults=5&startIndex=0`
    );
    const datajson = await data.json();
    const volumeInfo = datajson?.items?.map((item) => item?.volumeInfo) || [];
    setdisplaydata(volumeInfo);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4">
      <form onSubmit={datafetch} className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Advanced Book Search</h2>

        {error && (
          <p className="text-red-600 text-center mb-4 text-sm">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="title" className="block mb-1 text-sm font-medium">Title</label>
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
            <label htmlFor="Author" className="block mb-1 text-sm font-medium">Author</label>
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
            <label htmlFor="Genre" className="block mb-1 text-sm font-medium">Genre</label>
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
        {displaydata.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col items-center text-center"
          >
            <img
              src={item?.imageLinks?.thumbnail || fallbackImage}
              alt="book"
              className="w-32 h-48 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-500">
              {item.authors?.join(", ") || "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvanceForm;
