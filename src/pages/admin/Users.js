import React, { useState } from 'react';
import Header from '../../components/admin/Header';

const Users = () => {
  // Dummy user data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', registeredDate: '2023-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', registeredDate: '2023-02-15' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com', registeredDate: '2023-02-15' },
    { id: 4, name: 'Jane Smith', email: 'jane@example.com', registeredDate: '2023-02-15' },
    // Add more users as needed
  ]);

  // Function to delete a user by ID
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <p className="mb-4">Number of Users: {users.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-2">Registered Date: {user.registeredDate}</p>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
