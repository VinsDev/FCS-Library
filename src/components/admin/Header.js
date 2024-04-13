const Header = () => {
    return (
      <div className="bg-white sticky top-0 z-10 py-4 px-6 shadow-md flex justify-between items-center">
        <div></div>
        <div className="flex items-center space-x-4">
  
          {/* User Profile Image */}
          <img src="user-profile-image-url" alt="User" className="w-10 h-10 rounded-full" />
          {/* User Name */}
          <span className="text-gray-700 font-semibold">Vincent Dominic</span>
          {/* Dropdown Button */}
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  export default Header;