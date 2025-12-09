'use client';

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  
} from "react-icons/fa";

const Footer: React.FC = () => {
  // ✅ Type-safe smooth scroll function
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0a0617]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Shahzaib A.Qadir</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/profile.php?id=61577709962163",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shahzaib-abdul-qadir-b79a79338/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/shahzaibaqadir/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/shahzaibAQadir/",
            },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Shahzaib A.Qadir. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
