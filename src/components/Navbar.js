import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full fixed top-0 left-0">
      <div className="text-black text-lg font-semibold">
        hava havai
      </div>
      <div className="flex items-center">
        <img
          src="images/profile.jpg"
          alt="User"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
