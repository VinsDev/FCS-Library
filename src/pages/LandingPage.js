// LandingPage.js

import React, { useState } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import Content from '../components/landing/Content';

const LandingPage = () => {
  // Define selectedItem state using useState
  const [selectedItem, setSelectedItem] = useState('home');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
      <Footer />
    </div>
  );
};

export default LandingPage;
