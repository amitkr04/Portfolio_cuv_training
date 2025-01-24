import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="flex-shrink-0 mb-4 md:mt-16 md:mb-0">
            <img
              src="https://images.pexels.com/photos/18593901/pexels-photo-18593901/free-photo-of-man-sitting-and-posing-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg"
            />
          </div>

          {/* Introduction and Skills */}
          <div>
            <p className="text-lg text-gray-700 mb-6 dark:text-white">
              Hi, I'm Amit Kumar, a passionate MERN Stack Developer with a knack
              for creating user-friendly web applications. I enjoy coding,
              problem-solving, and learning new technologies to enhance my
              skillset.
            </p>

            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Key Skills:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <span className="bg-blue-100 dark:bg-slate-800 dark:text-white text-blue-800 text-sm font-medium px-4 py-2 rounded-md">
                Java
              </span>
              <span className="bg-blue-100 dark:bg-slate-800 dark:text-white text-blue-800 text-sm font-medium px-4 py-2 rounded-md">
                DS & Algorithms
              </span>
              <span className="bg-green-100 dark:bg-slate-800 dark:text-white text-green-800 text-sm font-medium px-4 py-2 rounded-md">
                SQL
              </span>
              <span className="bg-blue-100 dark:bg-slate-800 dark:text-white text-blue-800 text-sm font-medium px-4 py-2 rounded-md">
                HTML
              </span>
              <span className="bg-green-100 dark:bg-slate-800 dark:text-white text-green-800 text-sm font-medium px-4 py-2 rounded-md">
                CSS
              </span>
              <span className="bg-yellow-100 dark:bg-slate-800 dark:text-white text-yellow-800 text-sm font-medium px-4 py-2 rounded-md">
                JavaScript
              </span>
              <span className="bg-purple-100 dark:bg-slate-800 dark:text-white text-purple-800 text-sm font-medium px-4 py-2 rounded-md">
                React.js
              </span>
              <span className="bg-red-100 dark:bg-slate-800 dark:text-white text-red-800 text-sm font-medium px-4 py-2 rounded-md">
                Node.js
              </span>
              <span className="bg-teal-100 dark:bg-slate-800 dark:text-white text-teal-800 text-sm font-medium px-4 py-2 rounded-md">
                MongoDB
              </span>
              <span className="bg-teal-100 dark:bg-slate-800 dark:text-white text-teal-800 text-sm font-medium px-4 py-2 rounded-md">
                Express.js
              </span>
              <span className="bg-blue-100 dark:bg-slate-800 dark:text-white text-blue-800 text-sm font-medium px-4 py-2 rounded-md">
                Tailwind CSS
              </span>
              <span className="bg-green-100 dark:bg-slate-800 dark:text-white text-green-800 text-sm font-medium px-4 py-2 rounded-md">
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
