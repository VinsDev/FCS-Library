import React from 'react';
import Home from '../../pages/dashboard/Home';
import Bookmarks from '../../pages/dashboard/Bookmarks';
import History from '../../pages/dashboard/History';

const DashboardContent = ({ selectedItem }) => {
  return (
    <> 
    {selectedItem === 'home' && <Home />}
    {selectedItem === 'bookmarks' && <Bookmarks />}
    {selectedItem === 'History' && <History />}
    </>
  );
};

export default DashboardContent;
