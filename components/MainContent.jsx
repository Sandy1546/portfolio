import React from "react";
import Header from "./Header";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import Certification from "./Certification";

const MainContent = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <Header />
        <div className="lg:p-4 rounded-lg dark:border-gray-700">
          <Project />
          <Skills />

          <Experience />

          <Certification />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default MainContent;
