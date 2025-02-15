import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <div 
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transformduration-300 ease-in-out hover:scale-105 cursor-pointer"
      onClick={() => window.location.href = link}>
      <img src={image} alt={title} className="w-full h-24 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-text mb-4">{description}</p>
      </div>
    </div>
  );
}

export { ProjectCard };