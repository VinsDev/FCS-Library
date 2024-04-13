import React from 'react';
import AdminDashboardContent from '../components/admin/AdminDashboardContent';
import { useSelector } from 'react-redux';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminDashboard = () => {
  const selectedItem = useSelector((state) => state.selectedItem) || 'overview'; 

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-grow p-4 overflow-y-auto">
        <AdminDashboardContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default AdminDashboard;
