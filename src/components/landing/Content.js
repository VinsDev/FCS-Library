import React, { useState } from 'react';
import Home from '../../pages/landing/Home';
import Categories from '../../pages/landing/Categories';
import AboutUs from '../../pages/landing/About';
import LibraryServices from '../../pages/landing/Services';
import SelectedCategoryContent from './SelectedCategoryContent';

const Content = ({ selectedItem }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className='mt-20 py-6'>
      {selectedItem === 'home' && <Home />}
      {selectedItem === 'categories' && !selectedCategory && <Categories setSelectedCategory={setSelectedCategory}/>}
      {selectedCategory && selectedItem === 'categories' && <SelectedCategoryContent category={selectedCategory} setSelectedCategory={setSelectedCategory} />}
      {selectedItem === 'services' && <LibraryServices />}
      {selectedItem === 'about-us' && <AboutUs />}
    </div>
  );
};

export default Content;
