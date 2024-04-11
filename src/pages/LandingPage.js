// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Header />
      <FeaturedContent />
      <Categories />
      <LibraryServices />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          FCS Library
        </Link>
        {/* Navigation Menu */}
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/catalog" className="text-gray-600 hover:text-gray-800">
            Catalog
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About Us
          </Link>
        </nav>
        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r py-2 px-4">
            Search
          </button>
        </div>
        {/* Login Button */}
        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Login
        </Link>
      </div>
    </header>
  );
};

const FeaturedContent = () => {
  // Sample array of featured content (replace with actual data)
  const featuredItems = [
    {
      id: 1,
      title: 'Featured Book 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Featured Book 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Featured Book 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="container mx-auto pt-20 mt-6"> {/* Add top padding here */}
      <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Map through the featuredItems array to display each item */}
        {featuredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md">
            <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <Link to={`/books/${item.id}`} className="mt-2 inline-block text-blue-500 hover:text-blue-700">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  // Sample array of categories (replace with actual data)
  const categories = [
    { id: 1, title: 'Fiction', icon: '📚' },
    { id: 2, title: 'Science Fiction', icon: '🚀' },
    { id: 3, title: 'Fantasy', icon: '🧙‍♂️' },
    { id: 4, title: 'Mystery', icon: '🔍' },
    { id: 5, title: 'Romance', icon: '💖' },
    { id: 6, title: 'Thriller', icon: '🔫' },
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
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
    </section>
  );
};

const LibraryServices = () => {
  // Sample array of library services (replace with actual data)
  const services = [
    { id: 1, title: 'Book Borrowing', icon: '📚', description: 'Borrow books from our extensive collection for free.' },
    { id: 2, title: 'Digital Resources', icon: '💻', description: 'Access e-books, audiobooks, and online databases from anywhere.' },
    { id: 3, title: 'Events & Workshops', icon: '🎉', description: 'Participate in book clubs, author talks, and educational workshops.' },
    { id: 4, title: 'Research Assistance', icon: '🔍', description: 'Get help with research projects and finding resources.' },
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Library Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the services array to display each service */}
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-md">
            <div className="p-4 flex items-center justify-center">
              <span className="text-4xl">{service.icon}</span>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  // Sample array of reviews (replace with actual data)
  const reviews = [
    { id: 1, name: 'John Doe', comment: 'Great selection of books! Highly recommended.', rating: 5 },
    { id: 2, name: 'Jane Smith', comment: 'The library staff is very helpful. Always a pleasant experience.', rating: 4 },
    { id: 3, name: 'Alice Johnson', comment: 'Love attending the events organized by the library. Fun and informative.', rating: 5 },
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map through the reviews array to display each review */}
        {reviews.map(review => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <div className="text-xl font-semibold mr-2">{'\u2605'.repeat(review.rating)}</div>
              <div>{review.name}</div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FCS Library. All rights reserved.</p>
        {/* Add your footer links here */}
      </div>
    </footer>
  );
};