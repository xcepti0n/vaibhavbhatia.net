import React from 'react';
import { useParams } from 'react-router-dom';
import ExampleBlogPost from './blogs/ExampleBlogPost';

const blogPosts: { [key: string]: { title: string; content: React.ReactNode; date: string; author: string | undefined; image: string } } = {
  'first-post': {
    title: 'My First Blog Post',
    content: 'This is the full content of my first blog post.',
    date: '2025-01-01',
    author: 'John Doe',
    image: 'https://via.placeholder.com/150',
  },
  'second-post': {
    title: 'Another Interesting Post',
    content: 'Here is the full content of another interesting post.',
    date: '2025-02-01',
    author: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
  },
  'blockchain-guide': {
    title: 'Understanding Blockchain Technology',
    content: <ExampleBlogPost />,
    date: '2025-03-01',
    author: 'Vaibhav Bhatia',
    image: 'https://via.placeholder.com/150',
  }
};

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId || !blogPosts[postId]) {
    return <div>Post not found</div>;
  }

  const post = blogPosts[postId];

  return (
    <div className="bg-background text-text min-h-screen p-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
          <p className="text-secondary mb-4">By {post.author} on {post.date}</p>
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;