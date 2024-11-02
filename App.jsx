import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className={`p-4 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Services</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 bg-teal-600 text-white p-2 rounded z-50"
        onClick={toggleMenu}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Main Content */}
      <div className={`p-8 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <h1>Main Content</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default App;
