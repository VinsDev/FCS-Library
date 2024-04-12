import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardContent from '../components/dashboard/DashboardContent';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const selectedItem = useSelector((state) => state.selectedItem) || 'Home'; 

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <DashboardContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Dashboard;
