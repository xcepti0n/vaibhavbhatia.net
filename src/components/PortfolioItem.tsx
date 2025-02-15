import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold hover:text-blue-500 transition-colors duration-200">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} className="text-blue-500 mt-4 inline-flex items-center space-x-1 hover:underline" aria-label={`View project: ${title}`}>
        <span>View Project</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default PortfolioItem;
