import React from 'react';
import { Link } from 'react-router-dom';

const BookPreviewPage = ({ book, setSelectedBook }) => {
  const {
    name,
    author,
    description,
    genre,
    publicationDate,
    isbnNumber,
    size,
    bookFormat,
    image,
  } = book;

  const handleDownload = () => {
    // Add logic for downloading the book
    console.log("Downloading the book...");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-start gap-10">
        <div onClick={() => setSelectedBook(null)} className="text-gray-700 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7 7-7" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 12h16" />
          </svg>
        </div>
        <img src={image} alt={name} className="w-64 h-64 object-cover" />
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <h2 className="text-3xl font-semibold">{name}</h2>
        </div>
        <p className="text-lg text-gray-600 mt-2">by {author}</p>
        <p className="text-lg mt-4">{description}</p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Book Information</h3>
          <ul className="list-disc list-inside mt-4">
            <li><span className="font-semibold">Genre:</span> {genre}</li>
            <li><span className="font-semibold">Publication Date:</span> {publicationDate}</li>
            <li><span className="font-semibold">ISBN Number:</span> {isbnNumber}</li>
            <li><span className="font-semibold">Size:</span> {size}</li>
            <li><span className="font-semibold">Format:</span> {bookFormat}</li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPreviewPage;
