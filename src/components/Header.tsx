import React from 'react';
import { Link } from 'react-router-dom';

// NavItem component to handle individual navigation items
const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <li className='transform hover:scale-105 ease-in-out duration-200'>
    <Link
      to={to}
      className="bg-primary px-4 py-2 rounded-lg font-bold text-white hover:bg-white hover:text-primary  duration-200 shadow-md text-xl"
    >
      {label}
    </Link>
  </li>
);

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-secondary transition-colors duration-200">
            Home
          </Link>
        </div>
        <nav>
          <ul className="flex gap-4">
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/about" label="About" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
