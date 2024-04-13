import React from 'react';
import Home from '../../pages/admin/Overview';
import Users from '../../pages/admin/Users';
import Books from '../../pages/admin/Books';

const AdminDashboardContent = ({ selectedItem }) => {
  return (
    <> 
    {selectedItem === 'overview' && <Home />}
    {selectedItem === 'users' && <Users />}
    {selectedItem === 'books' && <Books />}
    </>
  );
};

export default AdminDashboardContent;
