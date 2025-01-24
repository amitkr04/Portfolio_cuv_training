import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Contact Me
        </h2>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 dark:bg-slate-800">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-950 focus:border-transparent dark:bg-slate-800"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-950 focus:border-transparent dark:bg-slate-800"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-950 focus:border-transparent dark:bg-slate-800"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-slate-950 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-slate-900 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Connect with Me
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <i></i>
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 dark:hover:text-white  transition-colors"
            >
              <i></i>
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 dark:hover:text-white  transition-colors"
            >
              <i></i>
              <FaSquareXTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
