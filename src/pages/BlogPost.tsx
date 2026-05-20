import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId || !blogPosts[postId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-xl p-12 text-center">
          <p className="text-slate-400 text-lg">Post not found.</p>
          <Link to="/blog" className="mt-4 inline-block text-secondary hover:text-accent text-sm">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const post = blogPosts[postId];
  const formatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-secondary transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        {/* Card */}
        <article className="glass rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover opacity-90"
          />
          <div className="p-8">
            <p className="text-secondary text-xs font-medium tracking-widest uppercase mb-3">
              {formatted} &nbsp;·&nbsp; {post.author || 'Vaibhav Bhatia'}
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold text-white pt-0 mb-6 leading-tight"
              style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
            >
              {post.title}
            </h1>
            <div className="prose prose-invert prose-sm max-w-none">
              {post.content}
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogPost;
