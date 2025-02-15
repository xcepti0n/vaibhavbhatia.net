import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

interface PortfolioItemType {
  title: string;
  description: string;
  link: string;
}

const portfolioItems: PortfolioItemType[] = [
  { title: 'Project One', description: 'Description for project one', link: 'https://example.com/project-one' },
  { title: 'Project Two', description: 'Description for project two', link: 'https://example.com/project-two' },
  { title: 'Project Three', description: 'Description for project three', link: 'https://example.com/project-three' },
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <PortfolioItem 
            key={index} 
            title={item.title} 
            description={item.description} 
            link={item.link} 
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
