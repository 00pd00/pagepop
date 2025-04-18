import React, { useEffect, useMemo, useState } from "react";
import LandingComponent from "./LandingComponent";
import Footer from "./HeadnFoot/Footer";
import BookCard from "./BookCard";

const Body = () => {
  const [displaydata, setdisplaydata] = useState([]);
  const [titleQuery, settitleQuery] = useState("");
  const [errors, setError] = useState(null);

  
  const datafetch = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}&maxResults=20&startIndex=0`
      );
      const datajson = await data.json();
      const volumeInfo = datajson?.items.map(item => item?.volumeInfo) || [];

      setdisplaydata(volumeInfo);

      console.log(datajson)
    } catch (error) {
      setError(error);
    }
  }; // add this to a api folder for managament later 


  useEffect(() => {
    datafetch();
  }, []); // If possible add caching with retry on http.client

  return (
    <div>
      <LandingComponent />
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
        <div className="w-full max-w-xl flex flex-col items-center mb-6">
          <div className="w-full flex flex-col sm:flex-row items-center gap-2">
            <input
              onChange={e => settitleQuery(e.target.value)} // maintain coding standard use react standard naming conventions
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
            {/* make a generic search component out of this. */}
          </div>
        </div>
        <div>
          {errors ? "not found" : <BookCard displaydata={displaydata} />} 
          {/* If the component is called bookCard then why is multiple books data presented in the props increases tree structure  */}
          {/* err handler in http.Client as well as in erro page  */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
