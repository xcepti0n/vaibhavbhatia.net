import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts, getFilteredPosts } from '../data/posts';


const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = getFilteredPosts(blogPosts, searchTerm);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-text min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-text mb-6">Blog</h1>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <p className="text-center text-secondary mt-4">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;