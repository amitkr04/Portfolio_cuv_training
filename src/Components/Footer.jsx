import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black py-6 dark:bg-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-4 font-semibold dark:text-white">
          © 2025 Amit. All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="/privacy-policy"
            className="text-slate-950 hover:text-slate-700 font-semibold transition-colors text-sm dark:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-slate-950 hover:text-slate-700 font-semibold transition-colors text-sm dark:text-white"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-slate-950 hover:text-slate-700 font-semibold transition-colors text-sm dark:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
