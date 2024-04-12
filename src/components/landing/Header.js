import React from "react";

const Header = ({ selectedItem, setSelectedItem }) => {
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-600">
          FCS Library
        </a>
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-4">
          <NavItem selectedItem={selectedItem} handleItemClick={handleItemClick} item="home">Home</NavItem>
          <NavItem selectedItem={selectedItem} handleItemClick={handleItemClick} item="categories">Categories</NavItem>
          <NavItem selectedItem={selectedItem} handleItemClick={handleItemClick} item="services">Services</NavItem>
          <NavItem selectedItem={selectedItem} handleItemClick={handleItemClick} item="about-us">About Us</NavItem>
        </nav>
        {/* Search Bar */}
        <div className="hidden md:flex items-center">
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
        <div className="hidden md:flex space-x-4">
          <a href="signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Sign Up
          </a>
          <a href="login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Login
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ selectedItem, handleItemClick, item, children }) => {
  return (
    <span
      className={`cursor-pointer ${selectedItem === item ? "text-blue-600" : "text-gray-600 hover:text-gray-800"}`}
      onClick={() => handleItemClick(item)}
    >
      {children}
    </span>
  );
};

export default Header;
