import React from 'react';
import { BlogPost } from '../types';
import NginxServerSetupBlogContent from '../pages/blogs/NginxServerSetupBlogPost';
import NginxCoverImage from '../assets/images/nginx_cover_black.png';
import CloudflareCoverImage from '../assets/images/cloudflare_cycle_cover.png';
import CloudflareTunnelSetupBlogContent from '../pages/blogs/CloudflareTunnelSetupBlogPost';
import LocalLLMBenchBlogContent from '../pages/blogs/LocalLLMBenchBlogPost';
import LocalLLMBenchCoverImage from '../assets/images/local_llm_bench_cover.png';
import CloudflareWorkerSetupBlogContent from '../pages/blogs/CloudflareWorkerSetupBlogPost';
import CloudflareWorkerCoverImage from '../assets/images/cloudflare_worker_cover.png';

const blogPosts: { [key: string]:  BlogPost } = {
  'cloudflare-worker-setup': {
    title: 'Deploying a Static Site as a Cloudflare Worker',
    summary: 'Step-by-step guide to deploying a Vite/React app as a Cloudflare Worker using Wrangler — including SPA routing, custom domains, and git-based auto-deploys.',
    date: '2026-05-20',
    image: CloudflareWorkerCoverImage,
    content: React.createElement(CloudflareWorkerSetupBlogContent),
  },
  'local-llm-bench': {
    title: 'Benchmarking Local LLMs on Apple Silicon for Agent Workloads',
    summary: 'Parameter sweep results across 5 Ollama models on M1 Max 32 GB — speed, tool-call accuracy, and which think mode settings actually help.',
    date: '2026-05-19',
    image: LocalLLMBenchCoverImage,
    content: React.createElement(LocalLLMBenchBlogContent),
  },
  'nginx-server-setup': {
    title: 'Nginx HTTPS Server Setup for Hosting Website',
    summary: 'An in-depth look at the nginx server setup for your first website.',
    date: '2024-01-02',
    image: NginxCoverImage,
    content: React.createElement(NginxServerSetupBlogContent),
  },
  'cloudflare-tunnel-setup': {
    title: 'Host your website using Cloudflare tunnel',
    summary: 'Learn how to set up a secure tunnel using Cloudflare.',
    date: '2024-01-02',
    image: CloudflareCoverImage,
    content: React.createElement(CloudflareTunnelSetupBlogContent),
  }
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