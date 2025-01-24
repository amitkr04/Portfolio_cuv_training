import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform built using the MERN stack. Features include user authentication, product management, and payment integration.",
      image:
        "https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app using MERN stack and Socket.IO for seamless communication between users.",
      image:
        "https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
    {
      title: "YouTube Clone",
      description:
        "A frontend project built with React, RapidAPI, and Tailwind CSS for searching and playing videos.",
      image:
        "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#",
    },
  ];
  return (
    <section id="projects" className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          My Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 dark:bg-slate-950">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700  text-sm mb-4 dark:text-white">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
