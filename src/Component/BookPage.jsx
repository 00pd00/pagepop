import React, { useContext } from "react";
import BookContext from "../utils/BookContext";

const BookPage = () => {
  // const data = {
  //   title: "Google Hacking for Penetration Testers",
  //   authors: ["Bill Gardner", "Johnny Long", "Justin Brown"],
  //   publisher: "Elsevier",
  //   publishedDate: "2011-04-18",
  //   description:
  //     "This book helps people find sensitive information on the Web. Google is one of the 5 most popular sites on the internet... (truncated for brevity)",
  //   imageLinks: {
  //     thumbnail:
  //       "http://books.google.com/books/content?id=bvB1-MmhEjQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  //   },
  //   averageRating: 3.5,
  //   ratingsCount: 10,
  //   pageCount: 561,
  //   language: "en",
  //   previewLink:
  //     "http://books.google.co.in/books?id=bvB1-MmhEjQC&pg=PA314&dq=intitle:&hl=&cd=1&source=gbs_api"
  // };

  const {current} = useContext(BookContext)

  // console.log(data)
  console.log(current)

  return (
    <div className="min-h-screen bg-gray-100  p-4 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-md  w-full mt-12 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={current.imageLinks?.thumbnail}
            alt="Book Cover"
            className="w-40 h-auto object-cover rounded"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{current.title}</h1>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Authors:</span>{" "}
              {current.authors?.join(", ") || "Unknown"}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Publisher:</span> {current.publisher}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Published:</span> {current.publishedDate}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Pages:</span> {current.pageCount}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Language:</span> {current.language.toUpperCase()}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Rating:</span>{" "}
              {current.averageRating} / 5 ({current.ratingsCount} reviews)
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

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-800 text-sm leading-relaxed">
  {current.description.length > 100
    ? current.description.slice(0, 300) + "..."
    : current.description}
</p>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
