import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../state/actions';

const AdminSidebarItems = [
  { label: 'Overview', path: '/admin/overview' },
  { label: 'Users', path: '/admin/users' },
  { label: 'Books', path: '/admin/books' }
];

const AdminSidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item));
  };

  return (
    <div className="bg-white text-gray-800 w-64 flex-shrink-0 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">FCS Library Admin</h2>
        <ul>
          {AdminSidebarItems.map((item, index) => (
            <li key={index} className={`mb-2 ${location.pathname === item.path ? 'bg-blue-100' : ''} rounded-lg`}>
              <Link
                to={item.path}
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => handleItemClick(item.label.toLocaleLowerCase())}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
