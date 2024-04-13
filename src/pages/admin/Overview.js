import React from 'react';
import Header from '../../components/admin/Header';

const Overview = () => {
  // Static data for demonstration
  const totalUsers = 100;
  const totalBooks = 500;
  const categories = [
    { id: 1, name: 'Fiction', count: 150 },
    { id: 2, name: 'Non-fiction', count: 200 },
    { id: 3, name: 'Science Fiction', count: 100 },
    { id: 4, name: 'Fantasy', count: 50 },
  ];

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Total Books</h2>
          <p className="text-3xl font-bold">{totalBooks}</p>
        </div>
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <p className="text-3xl font-bold">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
