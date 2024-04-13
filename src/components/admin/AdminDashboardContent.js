import React from 'react';
import Home from '../../pages/admin/Home';
import Bookmarks from '../../pages/admin/Bookmarks';
import History from '../../pages/admin/History';

const AdminDashboardContent = ({ selectedItem }) => {
  return (
    <> 
    {selectedItem === 'home' && <Home />}
    {selectedItem === 'bookmarks' && <Bookmarks />}
    {selectedItem === 'History' && <History />}
    </>
  );
};

export default AdminDashboardContent;
