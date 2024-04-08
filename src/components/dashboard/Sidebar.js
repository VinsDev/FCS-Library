import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../../state/actions';

const sidebarItems = [
  { label: 'Home', path: '/dashboard/home' },
  { label: 'Books', path: '/dashboard/books' },
  { label: 'Authors', path: '/dashboard/authors' }
  // Add more sidebar items as needed
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item));
  };

  return (
    <div className="bg-white text-gray-800 w-64 flex-shrink-0 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">FCS Library</h2>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className={`mb-2 ${location.pathname === item.path ? 'bg-blue-100' : ''} rounded-lg`}>
              <Link
                to={item.path}
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => handleItemClick(item.label)}
              >
                {item.label} {/* Render the label */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
