import React from 'react';
import { SiFacebook, SiInstagram, SiGithub } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <SiFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <SiInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <SiGithub className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400">© 2025 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
