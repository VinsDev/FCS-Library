import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* Content */}
      <div className="flex-grow bg-gray-200 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 gap-6">
          <RecommendedBooks />
          <Categories />
          <TrendingBooks />
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;

const Categories = () => {
  // Sample array of categories (replace with actual data)
  const categories = [
    { id: 1, title: 'Religion', icon: '⛪️' },
    { id: 2, title: 'Lifestyle', icon: '🌿' },
    { id: 3, title: 'Motivation', icon: '💪' },
    { id: 4, title: 'Education', icon: '📚' },
    { id: 5, title: 'Inspirational', icon: '✨' },
    { id: 6, title: 'Audiobooks', icon: '🎧' },
    { id: 7, title: 'Documentaries', icon: '🎥' },
    { id: 8, title: 'Relationships', icon: '💑' },
    { id: 9, title: 'Fiction', icon: '📖' },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Map through the categories array to display each category */}
        {categories.map(category => (
          <Link key={category.id} to={`/category/${category.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="p-4 flex items-center justify-center">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-lg font-semibold ml-2">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-10 py-4 px-6 shadow-md flex justify-between items-center">
      {/* Search Bar */}
      <input type="text" placeholder="Search your favourite books" className="p-2 border border-gray-300 rounded-lg focus:outline-none" />
      {/* Header Right Content */}
      <div className="flex items-center space-x-4">

        {/* User Profile Image */}
        <img src="user-profile-image-url" alt="User" className="w-10 h-10 rounded-full" />
        {/* User Name */}
        <span className="text-gray-700 font-semibold">Vincent Dominic</span>
        {/* Dropdown Button */}
        <button className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const RecommendedBooks = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Recommended Books</h2>
        {/* See All Button */}
        <button className="text-blue-500 bg-blue-100 px-4 py-2 rounded-lg">See all</button>
      </div>
      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Book Card 1 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 2 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 3 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 4 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>
        {/* Add more book cards as needed */}
      </div>
    </div>
  );
};

const TrendingBooks = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Trending Books</h2>
        {/* See All Button */}
        <button className="text-blue-500 bg-blue-100 px-4 py-2 rounded-lg">See all</button>
      </div>
      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Book Card 1 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 2 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 3 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Book Card 4 */}
        <div className="bg-gray-200 rounded-lg p-4 shadow-md">
          {/* Book Image */}
          <img src="book-image-url" alt="Book" className="w-full h-40 object-cover rounded-lg mb-2" />
          {/* Book Name */}
          <h3 className="text-lg font-semibold mb-1">Book Name</h3>
          {/* Book Author */}
          <p className="text-gray-500">Author Name</p>
        </div>
        {/* Add more book cards as needed */}
      </div>
    </div>
  );
};