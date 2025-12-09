import React from "react";
import About from "./component/About/page";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills/page";
import Educaton from "./component/Education/page";
import Contact from "./component/Contact/page";
import Projects from "./component/Projects/page";
import Works from "./component/work/page";
import Footer from "./component/Footer/page";
import BlurBlob from "./component/BlurBlob";

export default function Home() {
  return (
    <div className="bg-[#050414]">
      
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
   <div className="relative pt-20" >
    <Navbar />
    <About/>
    <Skills/>
    <Projects/>
    <Works/>
    <Educaton/>
    <Contact/>
    <Footer/>
  
    </div> 
   </div>
  );
}

