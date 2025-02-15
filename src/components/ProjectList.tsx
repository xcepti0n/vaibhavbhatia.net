// import React, { useRef } from 'react';
// import {ProjectCard} from './ProjectCard';

// const ProjectList: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative">
//       <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full">‹</button>
//       <div ref={scrollRef} className="flex overflow-x-auto space-x-6 p-4">
//         {/* Replace with your ProjectCard components */}
//         <ProjectCard title="Project 1" description="Description 1" image="image1.jpg" link="/project1" />
//         <ProjectCard title="Project 2" description="Description 2" image="image2.jpg" link="/project2" />
//         <ProjectCard title="Project 3" description="Description 3" image="image3.jpg" link="/project3" />
//         {/* Add more ProjectCard components as needed */}
//       </div>
//       <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full">›</button>
//     </div>
//   );
// }

// export default ProjectList;
