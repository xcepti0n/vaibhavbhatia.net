import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <Link
        to={to}
        className={`relative px-1 py-1 text-sm font-medium tracking-wide transition-colors duration-200
          ${isActive ? 'text-secondary' : 'text-slate-300 hover:text-secondary'}`}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-px bg-secondary rounded-full" />
        )}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-glass'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-semibold text-lg tracking-tight hover:text-secondary transition-colors duration-200"
          style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
        >
          Vaibhav Bhatia
        </Link>
        <nav>
          <ul className="flex gap-8 list-none items-center">
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/about" label="About" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
