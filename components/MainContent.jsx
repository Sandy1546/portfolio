import React from "react";
import Header from "./Header";
import Proj from "./Proj";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import Cert from "./Cert";

const MainContent = () => {
  return (
    <>
      <div className="lg:ml-64">
        <Header />
        <div className="lg:p-4 rounded-lg dark:border-gray-700">
          <Proj />
          <Skills />

          <Experience />

          <Cert />

          <Contact />
        </div>
      </div>
    </>
  );
};

export default MainContent;
