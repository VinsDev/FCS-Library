import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardContent from '../components/dashboard/DashboardContent';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const selectedItem = useSelector((state) => state.selectedItem) || 'home'; 

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-4 overflow-y-auto">
        <DashboardContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Dashboard;
