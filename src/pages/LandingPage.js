// LandingPage.js

import React, { useState } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Content from '../components/landing/Content';

const LandingPage = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} setSelectedCategory={setSelectedCategory} setSelectedBook={setSelectedBook} />
      <Content selectedItem={selectedItem} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      <Footer />
    </div>
  );
};

export default LandingPage;
