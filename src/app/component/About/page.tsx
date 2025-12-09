"use client";

import React from "react";
import dynamic from "next/dynamic";
import ReactParallaxTilt from "react-parallax-tilt";
import Profile from "../../../../public/pic.jpg.jpg";

// Dynamically import react-typing-effect to disable SSR
const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
  ssr: false,
});

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shahzaib A.Qadir
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorClassName="text-[#8245ec]"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A passionate Frontend Developer and tech enthusiast with a strong curiosity for creating beautiful,
            responsive, and user-friendly web experiences. Although I’m a fresher in the professional world,
            I’ve built several personal and academic projects that reflect my dedication to clean design, smooth functionality,
            and problem-solving through code.

            I enjoy exploring new technologies and frameworks to expand my skills,
            and I am constantly learning how to make digital experiences more engaging.
            My goal is to grow as a developer, contribute to meaningful projects,
            and keep pushing my creative and technical boundaries.
          </p>

          {/* Resume Button */}
          <a
            href="https://milestone-1-five-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <ReactParallaxTilt
            className="w-48 h-48 sm:h-64 md:w-[38rem] md:h-[38rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={Profile.src}
              alt="Shahzaib A.Qadir"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </ReactParallaxTilt>
        </div>
      </div>
    </section>
  );
};

export default About;
 