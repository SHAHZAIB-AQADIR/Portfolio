"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  webapp: string;
  tags: string[];
}

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ✅ Your Projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Hackathon 02",
      description:
        "An interactive web app built for the Hackathon challenge with modern UI/UX design and responsive layout.",
      image: "/rentalcar.png", // add image in /public folder
      github: "https://github.com/SHAHZAIB-AQADIR/Hackathon02",
      webapp: "https://hackathon02-71wc.vercel.app/",
      tags: ["Next.js", "TailwindCSS", "TypeScript"],
    },
    {
      id: 2,
      title: "HTML CSS Java Project",
      description:
        "A front-end project showcasing HTML, CSS, and JavaScript skills with creative design and interactivity.",
      image: "/health.png", // add image in /public folder
      github: "https://github.com/SHAHZAIB-AQADIR/project-HTML-CSS-JAVA",
      webapp: "https://project-html-css-java.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
     {
      id: 3,
      title: "Restaurant",
      description:
        "A modern restaurant website featuring an online menu, category-based browsing, product details, and a cart-based ordering system. Fully responsive and built with Next.j.",
      image: "/restaurant.png", // add image in /public folder
      github: "https://github.com/SHAHZAIB-AQADIR/Restaurant.git",
      webapp: "https://restaurant-zeta-dun.vercel.app/",
      tags: ["Next.js", "TailwindCss", "TypeScript"],
    },
  ];

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        My Projects
      </h2>

      {/* ✅ Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleOpenModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-xs text-gray-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
              <a
                href={project.webapp}
                target="_blank"
                className="text-green-400 underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-2xl w-[90%] md:w-[60%]">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-xs text-gray-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                className="text-green-400 underline"
              >
                Live Demo
              </a>
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-6 bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
