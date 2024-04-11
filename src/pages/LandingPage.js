// LandingPage.js

import {React, useState} from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Header />
      <FeaturedContent />
      <Categories />
      <LibraryServices />
      <Reviews />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default LandingPage;

const Header = () => {
  const [activeItem, setActiveItem] = useState('#featured');

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    const yOffset = -100; // Adjust the padding as needed
    const element = document.getElementById(itemId.slice(1));
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    // Update URL without page reload
    window.history.pushState(null, null, itemId);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-blue-600">
          FCS Library
        </a>
        {/* Navigation Menu */}
        <nav className="space-x-4 hidden md:block">
          <span className={`text-gray-600 hover:text-gray-800 ${activeItem === '#featured' ? 'text-blue-600' : ''} cursor-pointer`} onClick={() => handleItemClick('#featured')}>
            Featured
          </span>
          <span className={`text-gray-600 hover:text-gray-800 ${activeItem === '#categories' ? 'text-blue-600' : ''} cursor-pointer`} onClick={() => handleItemClick('#categories')}>
            Categories
          </span>
          <span className={`text-gray-600 hover:text-gray-800 ${activeItem === '#services' ? 'text-blue-600' : ''} cursor-pointer`} onClick={() => handleItemClick('#services')}>
            Services
          </span>
          <span className={`text-gray-600 hover:text-gray-800 ${activeItem === '#reviews' ? 'text-blue-600' : ''} cursor-pointer`} onClick={() => handleItemClick('#reviews')}>
            Reviews
          </span>
          <span className={`text-gray-600 hover:text-gray-800 ${activeItem === '#about-us' ? 'text-blue-600' : ''} cursor-pointer`} onClick={() => handleItemClick('#about-us')}>
            About Us
          </span>
        </nav>
        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-full py-2 px-4">
            Search
          </button>
        </div>
        {/* Sign-up and Login Buttons */}
        <div className="space-x-4">
          <a href="#signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Sign Up
          </a>
          <a href="#login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

const FeaturedContent = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Featured Book 1',
      description: 'Content of book 1 will show here',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Featured Book 2',
      description: 'Content of book 2 will show here',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Featured Book 3',
      description: 'Content of book 3 will show here',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section id='featured' className="container mx-auto pt-20 mt-6"> {/* Add top padding here */}
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
    <section id='categories' className="container mx-auto py-8">
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
    { id: 2, title: 'Digital Resources', icon: '💻', description: 'Access e-books, audiobooks, and online databases from anywhere.' },
    { id: 3, title: 'Events & Workshops', icon: '🎉', description: 'Participate in book clubs, author talks, and educational workshops.' },
    { id: 4, title: 'Research Assistance', icon: '🔍', description: 'Get help with research projects and finding resources.' },
  ];

  return (
    <section id='services' className="container mx-auto py-8">
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
    <section id='reviews' className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
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

const AboutUs = () => {
  return (
    <section id='about-us' className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">About FCS eLibrary</h2>
      <p className="text-lg text-gray-700 mb-4">
        FCS eLibrary is an online platform dedicated to providing access to a wide range of digital books, audiobooks, and educational resources. Our mission is to promote literacy, learning, and personal development by making high-quality reading materials accessible to everyone, anytime, and anywhere.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        At FCS eLibrary, we believe in the power of knowledge and the transformative impact it can have on individuals and communities. Whether you're a student, a professional, or simply an avid reader, our vast collection of materials caters to diverse interests and preferences.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our team is committed to continuously expanding our library, enhancing user experience, and fostering a supportive online community of learners and enthusiasts. We strive to innovate, collaborate, and inspire lifelong learning journeys for all our users.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Thank you for choosing FCS eLibrary as your digital reading destination. Join us in the pursuit of knowledge, exploration, and enrichment!
      </p>
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