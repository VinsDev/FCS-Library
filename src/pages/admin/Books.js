import React, { useState } from 'react';
import Header from '../../components/admin/Header';
import { Button } from '@mui/material';
import UploadBookModal from '../../components/admin/UploadBookModal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description of Book 1', image: 'book1.jpg', featured: true },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description of Book 2', image: 'book2.jpg', featured: false },
    // Add more books as needed
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const toggleFeatured = (bookId) => {
    setBooks(books.map(book =>
      book.id === bookId ? { ...book, featured: !book.featured } : book
    ));
  };

  const handleDropdownClick = (bookId) => {
    setSelectedBookId(bookId);
    setShowDropdown(!showDropdown);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const uploadBook = (formData) => {
    // Handle book upload logic here
    console.log(formData);
    closeModal();
  };

  return (
    <div>
      <Header />
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-8 z-10">
        <Button onClick={openModal} variant="contained" color="primary">
          Upload Book
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Manage Books</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.filter(book => book.featured).map(book => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg relative overflow-hidden">
              {book.featured && <span className="bg-yellow-400 text-xs font-semibold px-2 py-1 rounded absolute top-2 left-2">Featured</span>}
              <img src={`/images/${book.image}`} alt={book.title} className="w-full h-64 object-cover" />
              <div className="absolute top-0 right-0 m-2 z-10">
                <button className="text-gray-700 font-semibold rounded-full p-2 focus:outline-none" onClick={() => handleDropdownClick(book.id)}>
                  <BsThreeDotsVertical size={20} />
                </button>
                {showDropdown && selectedBookId === book.id && (
                  <ul className="dropdown-menu absolute text-gray-700 pt-1 bg-white rounded-lg shadow-lg right-0 top-10">
                    <li><button className="py-2 px-4 block whitespace-no-wrap hover:bg-gray-100" onClick={() => toggleFeatured(book.id)}>
                      {book.featured ? <span><AiFillStar className="inline-block" size={18} /> Remove from Featured</span> : <span><AiFillStar className="inline-block" size={18} /> Add to Featured</span>}
                    </button></li>
                    <li><button className="py-2 px-4 block whitespace-no-wrap hover:bg-gray-100" onClick={() => deleteBook(book.id)}><RiDeleteBin6Line className="inline-block" size={18} /> Delete</button></li>
                  </ul>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-700 mt-2">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">All Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map(book => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg relative overflow-hidden">
              <img src={`/images/${book.image}`} alt={book.title} className="w-full h-64 object-cover" />
              <div className="absolute top-0 right-0 m-2 z-10">
                <button className="text-gray-700 font-semibold rounded-full p-2 focus:outline-none" onClick={() => handleDropdownClick(book.id)}>
                  <BsThreeDotsVertical size={20} />
                </button>
                {showDropdown && selectedBookId === book.id && (
                  <ul className="dropdown-menu absolute text-gray-700 pt-1 bg-white rounded-lg shadow-lg right-0 top-10">
                    <li><button className="py-2 px-4 block whitespace-no-wrap hover:bg-gray-100" onClick={() => toggleFeatured(book.id)}>
                      {book.featured ? <span><AiFillStar className="inline-block" size={18} /> Remove from Featured</span> : <span><AiFillStar className="inline-block" size={18} /> Add to Featured</span>}
                    </button></li>
                    <li><button className="py-2 px-4 block whitespace-no-wrap hover:bg-gray-100" onClick={() => deleteBook(book.id)}><RiDeleteBin6Line className="inline-block" size={18} /> Delete</button></li>
                  </ul>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-700 mt-2">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  - - - - */}
      <UploadBookModal isOpen={isModalOpen} closeModal={closeModal} uploadBook={uploadBook} />
    </div>
  );
};

export default Books;
