import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-200 dark:bg-slate-800  shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-950 dark:text-white">
          Amit Kumar
        </div>
        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-gray-800 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <ul
            className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto  bg-white dark:bg-slate-700 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none md:p-0 p-4 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#home"
                className="block md:inline-block px-4 py-2 font-semibold text-slate-950 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="block md:inline-block px-4 py-2 font-semibold text-slate-950 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block md:inline-block px-4 py-2 font-semibold text-slate-950 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block md:inline-block px-4 py-2 font-semibold text-slate-950 hover:text-slate-700 dark:text-white dark:hover:text-slate-200"
              >
                Contact
              </a>
            </li>
            <li className="font-semibold text-slate-950">
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
