import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Body = () => {
  const [displaydata, setdisplaydata] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  const datafetch = async () => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery + "&maxResults=30"}`
    );
    const datajson = await data.json();
    const volumeInfo = datajson?.items.map(item => item?.volumeInfo) || [];

    setdisplaydata(volumeInfo);
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col items-center mb-6">
        <div className="w-full flex flex-col sm:flex-row items-center gap-2">
          <input
            onChange={e => setsearchQuery(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            type="text"
            placeholder="Enter book title..."
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
            onClick={datafetch}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <BookCard displaydata={displaydata} />
      </div>
    </div>
  );
};

export default Body;
