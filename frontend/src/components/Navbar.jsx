import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Libro</span>
          <span className="text-indigo-500">Esfera</span>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-8 text-lg font-medium">
          <Link
            to="/"
            onClick={() => setActiveLink('home')}
            className={`hover:text-indigo-500 transition duration-200 ease-in-out ${
              activeLink === 'home' ? 'border-b-2 border-indigo-500' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setActiveLink('about')}
            className={`hover:text-indigo-500 transition duration-200 ease-in-out ${
              activeLink === 'about' ? 'border-b-2 border-indigo-500' : ''
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;