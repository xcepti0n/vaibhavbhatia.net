import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    title: 'Exploring the Future of AI',
    summary: 'An in-depth look at the latest advancements in artificial intelligence.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/ai-future',
    date: '2025-01-01',
    author: 'John Doe',
  },
  {
    title: 'The Rise of Quantum Computing',
    summary: 'A summary of the rise and potential of quantum computing.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/quantum-computing',
    date: '2025-02-01',
  },
  {
    title: 'Understanding Blockchain Technology',
    summary: 'A beginner\'s guide to blockchain technology and its applications.',
    image: 'https://via.placeholder.com/150',
    link: '/blog/blockchain-guide',
    date: '2025-03-01',
  }
  // Add more blog posts here...
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background text-text min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Blog</h1>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={index}
                title={post.title}
                summary={post.summary}
                image={post.image}
                link={post.link}
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