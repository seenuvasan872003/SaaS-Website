import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/FramerLogo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-md bg-[#EAEEFE]">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <NavLink>
                <img src={logo} alt="Logo" />
            </NavLink>
            <NavLink to="/" className="text-2xl font-bold text-black">
              Framer
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex space-x-8">
            <NavLink to="/" className="text-gray-600 hover:text-black"  >
                About
            </NavLink>
            <NavLink to="/" className="text-gray-600 hover:text-black" >
                Features
            </NavLink>
            <NavLink to="/" className="text-gray-600 hover:text-black" >
                Customers 
            </NavLink>
            <NavLink to="/" className="text-gray-600 hover:text-black" >
                Updates
            </NavLink>
            <NavLink to="/" className="text-gray-600 hover:text-black" >
                Help
            </NavLink>
            <NavLink to="https://flowcv.me/seenuvasan" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-lg">Get for free</button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1">
              {['About', 'Features', 'Customers', 'Updates', 'Help'].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-gray-600 hover:text-blue-600 ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              )) }
                <NavLink to="/" className={({ isActive }) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} >
                    <button className="bg-black text-white px-4 py-2 my-5 rounded-lg">Get for free</button>
                </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
