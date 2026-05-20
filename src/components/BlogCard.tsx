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
  const urlPath = '/blog/' + link;
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  return (
    <Link to={urlPath} className="group block h-full">
      <div className="glass glass-hover rounded-xl overflow-hidden h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-3">{formatted}</p>
          <h3
            className="text-base font-semibold text-slate-100 mb-2 leading-snug group-hover:text-secondary transition-colors duration-200 pt-0"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
          >
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1">{summary}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500">{author}</span>
            <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
