import React from 'react';
import { useParams } from 'react-router-dom';
import NginxServerSetupBlogContent from './blogs/NginxServerSetupBlogPost';
import NginxCoverImage from '../assets/images/nginx_cover_black.png';
import './blogs/blog.css'

const blogPosts: { [key: string]: { title: string; content: React.ReactNode; date: string; author?: string | undefined; image: string } } = {
  'nginx-server-setup': {
    title: 'Nginx HTTPS Server Setup for Hosting Website',
    content: <NginxServerSetupBlogContent />,
    date: '2025-01-01',
    image: NginxCoverImage,
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
          <p className="text-gray-500 mb-4">By {post.author || 'Vaibhav Bhatia'} on {post.date}</p>
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;