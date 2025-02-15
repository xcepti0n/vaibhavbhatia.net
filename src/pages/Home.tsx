import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { ProjectCard } from '../components/ProjectCard';
import { latestBlogPosts } from '../data/posts';

type FeaturedProjects = { title: string; summary: string; image: string; link: string };

const featuredProjects : FeaturedProjects[] = [
  // {
  //   title: 'AI-Powered Chatbot',
  //   summary: 'A chatbot that uses AI to understand and respond to user queries.',
  //   image: 'https://via.placeholder.com/150',
  //   link: '/portfolio/ai-chatbot',
  // },
  // Add more projects here...
];

const Home: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" bg-background text-text min-h-screen">
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Discover my projects, read my blog, and learn more about me.</p>
        <a 
          href="/portfolio" 
          className="bg-white text-primary px-6 py-2 rounded-full font-bold inline-flex items-center transition duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105"
        >
          View Portfolio <ArrowRight className="ml-2" />
        </a>
      </div>
      
      <div className={` mx-auto p-4 ${featuredProjects.length > 0 ? 'container': 'hidden'}`}>
        <h2 className="text-2xl font-bold mb-4 text-primary">Featured Projects</h2>
        <div className="relative">
          <div className="flex flex-wrap gap-6" ref={projectRef}>
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
      </div>

      <div className={` mx-auto p-4 ${latestBlogPosts.length > 0 ? 'container': 'hidden'}`}>
        <h2 className="text-3xl font-bold mb-4 text-primary text-center">Latest Blog Posts</h2>
        <div className="relative">
          <div className="flex flex-wrap gap-6" ref={blogRef}>
            {latestBlogPosts.map(post => (
              <BlogCard 
                key={post.key}
                title={post.title}
                summary={post.summary}
                image={post.image}
                link={post.key}
                date={post.date}
                author={post.author === undefined ? 'Vaibhav Bhatia': post.author}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;