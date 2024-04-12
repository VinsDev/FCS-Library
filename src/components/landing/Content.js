import React from 'react';
import Home from '../../pages/landing/Home';
import Categories from '../../pages/landing/Categories';
import AboutUs from '../../pages/landing/About';
import LibraryServices from '../../pages/landing/Services';
import SelectedCategoryContent from '../../pages/landing/SelectedCategoryContent';
import BookPreviewPage from '../../pages/landing/BookPreviewPage';

const Content = ({ selectedItem, selectedCategory, setSelectedCategory, selectedBook, setSelectedBook }) => {

  return (
    <div className='mt-20 py-6'>
      {selectedItem === 'home' && !selectedBook && <Home setSelectedBook={setSelectedBook} />}
      {selectedItem === 'categories' && !selectedCategory && !selectedBook && <Categories setSelectedCategory={setSelectedCategory} />}

      {selectedCategory && selectedItem === 'categories' && !selectedBook && <SelectedCategoryContent category={selectedCategory} setSelectedCategory={setSelectedCategory} setSelectedBook={setSelectedBook} />}
      {selectedBook && (selectedCategory || selectedItem === 'home') && <BookPreviewPage book={selectedBook} setSelectedBook={setSelectedBook} />}

      {selectedItem === 'services' && <LibraryServices />}
      {selectedItem === 'about-us' && <AboutUs />}
    </div>
  );
};

export default Content;
