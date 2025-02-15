import React from 'react';
import { BlogPost } from '../types';
import NginxServerSetupBlogContent from '../pages/blogs/NginxServerSetupBlogPost';
import NginxCoverImage from '../assets/images/nginx_cover_black.png';

const blogPosts: { [key: string]:  BlogPost } = {
  'nginx-server-setup': {
    title: 'Nginx HTTPS Server Setup for Hosting Website',
    summary: 'An in-depth look at the nginx server setup for your first website.',
    date: '2025-01-01',
    image: NginxCoverImage,
    content: React.createElement(NginxServerSetupBlogContent),
  },
};

const getLatestPosts = (posts: { [key: string]: BlogPost }, count: number) => {
  // Convert the object to an array
  const postsArray = Object.entries(posts).map(([key, post]) => ({ ...post, key }));

  // Sort the array by date in descending order
  postsArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Return the latest 'count' posts
  return postsArray.slice(0, count);
}

const getFilteredPosts = (posts: { [key: string]: BlogPost }, searchTerm: string) => {
  // Convert the object to an array
  const postsArray = Object.entries(posts).map(([key, post]) => ({ ...post, key }));

  // Filter the array based on the search term
  return postsArray.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
const latestBlogPosts = getLatestPosts(blogPosts, 3);

export  {blogPosts, latestBlogPosts, getFilteredPosts};