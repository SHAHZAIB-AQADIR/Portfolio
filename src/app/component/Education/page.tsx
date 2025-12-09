"use client";

import React from "react";

// ================= TYPES =================
interface EducationItem {
  id: number;
  degree: string;
  school: string;
  img: string;
}

interface WebDevelopmentCourse {
  id: number;
  degree: string;
  institute: string;
  img: string;
}

// ================= DATA =================
const education: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science (BSCS) ",
    school: "Muhammad Ali Jinnah University (MAJU)",
    img: "/MAJU.png",
  },
  {
    id: 2,
    degree: "Intermediate in Pre-Engineering",
    school: "DJ Science College",
    img: "/DJ CLG.png",
  },
  {
    id: 3,
    degree: "Matriculation",
    school: "Beaconhouse School System",
    img: "/beconhouse.png",
  },
];

const courses: WebDevelopmentCourse[] = [
  {
    id: 1,
    degree: "Web Development & Cloud Computing",
    institute: "Governor House Karachi (Tessori Initiative)",
    img: "/governorhouse.png",
  },
  {
    id: 2,
    degree: "Web Development Fundamentals",
    institute: "Saylani Mass IT Training Program (SMIT)",
    img: "/saylani.png",
  },
];

// ================= COMPONENT =================
const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* ==================== EDUCATION SECTION ==================== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative mb-24">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== COURSES SECTION ==================== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          COURSES & CERTIFICATIONS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Alongside my education, I have also pursued professional web
          development courses to enhance my skills.
        </p>
      </div>

      {/* Course Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={course.img}
                alt={course.institute}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.institute}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {course.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">
                    {course.institute}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
