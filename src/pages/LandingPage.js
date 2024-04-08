// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Library App</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is the landing page of our library application.
      </p>
      <Link to="/login">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
