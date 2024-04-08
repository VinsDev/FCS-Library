import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="bg-white sticky top-0 z-10 py-4 px-6 shadow-md flex justify-between items-center">
       {/* Search Bar */}
          <input type="text" placeholder="Search your favourite books" className="p-2 border border-gray-300 rounded-lg focus:outline-none" />
           {/* Header Right Content */}
        <div className="flex items-center space-x-4">
           {/* Notification Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 20a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2V9a7 7 0 0 1 0-14h8a7 7 0 0 1 0 14v9a2 2 0 0 1-2 2zM9 18a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2zM6.33 6.53A4 4 0 0 1 12 4v-.5A3.5 3.5 0 0 0 8.5 0h-1A3.5 3.5 0 0 0 4 3.5V4a4 4 0 0 1 2.33 2.53zM10 15a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" />
          </svg>
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
      {/* Content */}
      <div className="flex-grow bg-gray-200 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Recommended Books */}
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
     
    
          {/* Categories */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            {/* Add categories content */}
            <div>
              {/* Content item 1 */}
            </div>
            <div>
              {/* Content item 2 */}
            </div>
            {/* Add more content items as needed */}
          </div>
          {/* Trending */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Trending</h2>
            {/* Add trending content */}
            <div>
              {/* Content item 1 */}
            </div>
            <div>
              {/* Content item 2 */}
            </div>
            {/* Add more content items as needed */}
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
