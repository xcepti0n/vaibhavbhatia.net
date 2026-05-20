import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p
            className="font-semibold text-slate-200 text-base"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
          >
            Vaibhav Bhatia
          </p>
          <p className="text-slate-500 text-sm mt-1">Software Development Engineer</p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://www.github.com/xcepti0n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-secondary transition-colors duration-200"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhavbhatia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-secondary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-600 text-sm">© 2026 Vaibhav Bhatia</p>
      </div>
    </footer>
  );
};

export default Footer;
