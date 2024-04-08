import React from 'react';
import Home from '../../pages/dashboard/Home';
import Books from '../../pages/dashboard/Books';
import Authors from '../../pages/dashboard/Authors';

const DashboardContent = ({ selectedItem }) => {
  return (
    <> 
    {selectedItem === 'Home' && <Home />}
    {selectedItem === 'Books' && <Books />}
    {selectedItem === 'Authors' && <Authors />}
    </>
  );
};

export default DashboardContent;
