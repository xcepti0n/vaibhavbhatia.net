import React from 'react';
import AuthorImage from '../assets/images/author_288x288_center.jpg';
import { SiGithub } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute top-[-60%] right-[-5%] w-[500px] h-[400px] rounded-full bg-glow-purple opacity-80" />
          <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[350px] rounded-full bg-glow-teal opacity-60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <h1
            className="text-4xl font-bold text-white pt-0"
            style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
          >
            About
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Sidebar */}
          <div className="flex flex-col items-center md:items-start gap-4 md:w-52 shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 blur-lg scale-110" />
              <img
                src={AuthorImage}
                alt="Vaibhav Bhatia"
                className="relative w-36 h-36 rounded-full object-cover border-2 border-white/10"
              />
            </div>
            <div className="text-center md:text-left">
              <p
                className="font-semibold text-slate-100 text-base"
                style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
              >
                Vaibhav Bhatia
              </p>
              <p className="text-secondary text-xs font-medium mt-1 tracking-wide">Software Development Engineer</p>
              <p className="text-slate-500 text-xs mt-0.5">Amazon</p>
            </div>
            <a
              href="https://www.github.com/xcepti0n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-secondary transition-colors duration-200 mt-1"
            >
              <SiGithub className="w-4 h-4" /> xcepti0n
            </a>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <section className="glass rounded-xl p-6">
              <h2
                className="text-lg font-semibold text-slate-100 pt-0 mb-3"
                style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
              >
                Background
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                Hi there! I'm a Software Development Engineer at Amazon with over 8 years of experience.
                My journey has been a mix of exciting projects and constant learning.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mt-3">
                I've had the chance to work on a variety of projects, including microcontrollers, AWS internal
                services, and retail services. Each project has been a unique challenge and has helped me grow
                as a developer.
              </p>
            </section>

            <section className="glass rounded-xl p-6">
              <h2
                className="text-lg font-semibold text-slate-100 pt-0 mb-3"
                style={{ fontFamily: 'DM Serif Display, Georgia, serif' }}
              >
                Outside of Work
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                When I'm not coding, you'll often find me tinkering with my home server or automating things
                with Home Assistant. I also love playing around with my 3D printer, which adds a fun twist to
                my projects. I used to do Parkour as well, after I took a break from it, now I am trying to
                get back into it.
              </p>
            </section>

            <p className="text-slate-600 text-xs px-1">
              Feel free to explore my portfolio and blog to see more of my work and interests. Thanks for stopping by!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
