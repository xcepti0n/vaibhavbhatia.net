import React, { useState, ReactNode } from 'react';
import { MdContentCopy } from 'react-icons/md'; // Adjust the import based on your setup

type CodeBlockProps = {
  children: ReactNode;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded font-mono">
        {children}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 bg-gray-600 hover:bg-gray-700 rounded"
        aria-label="Copy to clipboard"
      >
        
        <MdContentCopy className="w-4 h-4 text-white" />
        <span className="absolute top-full right-1/2 transform translate-x-1/2 mt-1 w-max bg-gray-700 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Copy to clipboard
        </span>
      </button>
      {copied && <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>}
    </div>
  );
};

export default CodeBlock;
