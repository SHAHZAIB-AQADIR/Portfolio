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
    degree: "Bachelor of Science in Computer Science (BSCS)",
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
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient overflow-hidden"
    >
      {/* ==================== EDUCATION SECTION ==================== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-widest uppercase">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto mb-32">
        {/* Central Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-600 via-white/20 to-purple-600 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Indicator Dot */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 border-2 border-purple-500 w-8 h-8 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className={`w-full sm:w-[45%] ml-12 sm:ml-0 group`}>
              <div className="p-6 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo Container */}
                  <div className="flex-shrink-0 w-20 h-20 bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-400 mt-2 uppercase tracking-wide font-semibold">
                      {edu.school}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== COURSES SECTION ==================== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-widest uppercase">Courses & Certifications</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-600 via-white/20 to-purple-600 h-full"></div>

        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 border-2 border-purple-500 w-8 h-8 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            <div className={`w-full sm:w-[45%] ml-12 sm:ml-0 group`}>
              <div className="p-6 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
                    <img
                      src={course.img}
                      alt={course.institute}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                      {course.degree}
                    </h3>
                    <h4 className="text-sm text-gray-400 mt-2 uppercase tracking-wide font-semibold">
                      {course.institute}
                    </h4>
                  </div>
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