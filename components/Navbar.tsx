import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Determine if the background should be transparent or solid based on page
  const isTransparent = location.pathname === '/'; 
  
  const navLinks = [
    { name: 'About Us', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isTransparent ? 'bg-black/20 backdrop-blur-sm text-white' : 'bg-primary text-white shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase">
            Green Paradise Cafe
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-xs lg:text-sm font-semibold tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-accent transition-colors ${location.pathname === link.path ? 'border-b-2 border-white pb-1' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary absolute w-full left-0 top-20 shadow-xl border-t border-white/10">
          <div className="flex flex-col space-y-4 px-6 py-8 text-sm font-semibold tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-white/20">
              <Search className="w-5 h-5" />
              <Heart className="w-5 h-5" />
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};