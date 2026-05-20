import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts, getFilteredPosts } from '../data/posts';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = getFilteredPosts(blogPosts, searchTerm);

  return (
    <div className="min-h-screen">
      {/* Page header with glow */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[400px] rounded-full bg-glow-teal opacity-80" />
          <div className="absolute top-[-30%] right-[-5%] w-[400px] h-[350px] rounded-full bg-glow-purple opacity-70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <h1
            className="text-4xl font-bold text-white pt-0"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
          >
            Blog
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Notes on engineering, infrastructure, and things I'm learning.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Search */}
        <div className="relative max-w-md mb-10">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 glass rounded-lg text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/30"
          />
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <BlogCard
                key={post.key}
                title={post.title}
                summary={post.summary}
                image={post.image}
                link={post.key}
                date={post.date}
                author={post.author || 'Vaibhav Bhatia'}
              />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 mt-4">No posts found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
