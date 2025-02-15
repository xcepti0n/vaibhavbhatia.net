import React from 'react';
import AuthorImage from '../assets/author.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-center py-20">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">About Me</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src={AuthorImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-center">Vaibhav Bhatia</h2>
          <p className="text-gray-700 mt-6 text-center text-lg">
            Hi there! I'm a Software Development Engineer at Amazon with over 6 years of experience. My journey has been a mix of exciting projects and constant learning.
          </p>
          <div className="mt-6">
            {/* <h3 className="font-semibold mb-4">What I Do</h3> */}
            <p className="text-gray-700  text-lg">
              I've had the chance to work on a variety of projects, including microcontrollers, AWS internal services, and retail services. Each project has been a unique challenge and has helped me grow as a developer.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-4">Fun Stuff</h3>
            <p className="text-gray-700  text-lg">
              When I'm not coding, you'll often find me tinkering with my home server or automating things with Home Assistant. I also love playing around with my 3D printer, which adds a fun twist to my projects.
              I used to do Parkour as well, after I took a break from it, now I am trying to get back into it.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600  text-base">
              Feel free to explore my portfolio and blog to see more of my work and interests. Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
