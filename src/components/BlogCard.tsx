import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  link: string;
  date: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, image, link, date, author }) => {
  const urlPath = "/blog/" + link
  return (
    <Link to={urlPath}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-secondary mb-2">By {author} on {date}</p>
          <p className="text-text mb-4">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;