import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { ProjectCard } from '../components/ProjectCard';
import { latestBlogPosts } from '../data/posts';
import { Link } from 'react-router-dom';

type FeaturedProjects = { title: string; summary: string; image: string; link: string };

const featuredProjects: FeaturedProjects[] = [];

const Home: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-text min-h-screen">

      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-glow-teal opacity-100" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[600px] rounded-full bg-glow-purple opacity-100" />
          <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-glow-mid opacity-100" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-36 flex flex-col items-start gap-6 max-w-3xl">
          <span
            className="text-secondary text-xs font-medium tracking-[0.25em] uppercase animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            Software Engineer
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight text-white pt-0 animate-fade-up"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif', animationDelay: '100ms' }}
          >
            Hi, I'm<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Vaibhav.
            </span>
          </h1>
          <p
            className="text-slate-400 text-lg leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            I build distributed systems at Amazon, tinker with home automation,
            and write about what I learn along the way.
          </p>
          <Link
            to="/about"
            className="animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="mt-2 inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition-all duration-200">
              About me <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Projects */}
      <div className={`container mx-auto px-6 py-12 ${featuredProjects.length > 0 ? '' : 'hidden'}`}>
        <h2 className="text-2xl font-bold mb-8 text-slate-100 pt-0" style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={projectRef}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.summary}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className={`container mx-auto px-6 py-16 ${latestBlogPosts.length > 0 ? '' : 'hidden'}`}>
        <div className="flex items-baseline justify-between mb-8">
          <h2
            className="text-2xl font-bold text-slate-100 pt-0"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
          >
            Latest Posts
          </h2>
          <Link to="/blog" className="text-sm text-secondary hover:text-accent font-medium transition-colors duration-200">
            All posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={blogRef}>
          {latestBlogPosts.map(post => (
            <BlogCard
              key={post.key}
              title={post.title}
              summary={post.summary}
              image={post.image}
              link={post.key}
              date={post.date}
              author={post.author ?? 'Vaibhav Bhatia'}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
