import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Bottles', href: '/bottles' },
    { name: 'Preforms', href: '/preforms' },
    { name: 'Jars & Packaging Solutions', href: '/jars' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
        {/* Logo */}
        <Link 
  to="/" 
  className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
>
  <img
    src={logo}
    alt="Amar Industries"
    className="h-16 sm:h-20 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
  />
</Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-blue-600 underline decoration-2 underline-offset-4'
                    : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-all duration-300"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden flex flex-col items-center justify-center space-y-6`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 text-gray-600 hover:text-blue-600 transition-all"
        >
          <X className="h-8 w-8" />
        </button>

        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
