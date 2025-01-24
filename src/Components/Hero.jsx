import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[20rem] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/13036193/pexels-photo-13036193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="bg-black dark:bg-black bg-opacity-40 p-6 rounded-md text-slate-950 max-w-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 dark:text-white">
          Hello, I'm Amit Kumar
        </h1>
        <p className="text-lg font-semibold md:font-normal  md:text-xl  mb-6 dark:text-white">
          MERN Stack Developer and Content Creator
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
