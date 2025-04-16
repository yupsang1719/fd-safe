import React from 'react';
import { motion } from 'framer-motion';

function Featured() {
  const projectData = [
    {
      title: 'Project One',
      meta: 'Fire Safety • Jan 2025',
      content:
        'Design and installation of fire door systems across a commercial warehouse with full compliance reporting.',
      img: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png',
    },
    {
      title: 'Project Two',
      meta: 'Inspection • Feb 2025',
      content:
        'Routine fire door and damper inspections for a hospital campus, focusing on efficiency and reporting.',
      img: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
    },
    {
      title: 'Project Three',
      meta: 'Maintenance • Mar 2025',
      content:
        'Quarterly maintenance of industrial fire safety systems including documentation and access control checks.',
      img: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
    },
    {
      title: 'Project Four',
      meta: 'Consultation • Apr 2025',
      content:
        'Expert fire safety consultation for a new apartment block to ensure passive protection strategies are met.',
      img: 'https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png',
    },
  ];

  return (
    <div className="w-full py-10 sm:py-14 md:py-20">
      {/* Header */}
      <div className="w-full px-4 sm:px-8 md:px-20 border-b border-zinc-300 pb-10 sm:pb-16 md:pb-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight font-semibold uppercase">
          Featured Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="px-4 sm:px-8 md:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
            />
            <div className="p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">{project.title}</h2>
              <p className="text-sm text-zinc-500 mt-1">{project.meta}</p>
              <p className="text-sm sm:text-base text-zinc-700 mt-3 leading-relaxed">{project.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
