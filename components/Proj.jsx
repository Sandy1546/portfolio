import React from "react";
import Image from "next/image";
import { FaPizzaSlice } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { GiDinosaurRex } from "react-icons/gi";
import { FaShopify } from "react-icons/fa6";

const Proj = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-0 mt-5 pt-5 md:pt-9 md:mt-9"
    >
      {/* Projects */}
      <div className="grid gap-8">
        <div className="text-xl pl-2 font-medium text-zinc-200">Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl::grid-cols-4 gap-5">
          {/* Promptopia project */}
          <a href="https://prompts-world.netlify.app/" target="_blank">
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis opacity-60 hover:opacity-80">
              <Image
                src="/assets/images/Projects/Promptopia.png"
                alt="project logo"
                width="700"
                height="700"
                decoding="async"
                data-nimg="1"
                className="aspect-video object-cover"
              />

              <div className="flex flex-col px-4 py-2 h-24">
                <span className="flex font-bold">Promptopia</span>
                <span className="flex text-info text-xs">
                  Next.js, JavaScript, MongoDB, Tailwind, HTML, CSS
                </span>
              </div>
            </div>
          </a>

          {/* Portfolio Project */}
          <a href="https://aishwarya-mokashi.netlify.app" target="_blank">
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis opacity-60 hover:opacity-80">
              <Image
                src="/assets/images/Projects/Portfolio.png"
                alt="project logo"
                width="700"
                height="700"
                decoding="async"
                className="aspect-video object-cover"
              />

              <div className="flex flex-col px-4 py-2 h-24">
                <span className="flex font-bold">Portfolio</span>
                <span className="flex text-info text-xs">
                  React JS, JavaScript, HTML, CSS
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* More Projects */}
      <div className="grid cardPrimary gap-6 p-6 shadow-lg">
        <span className="text-xl font-medium mt-2 text-zinc-200">
          More Projects
        </span>
        <div className="grid grid-cols-1 gap-4 rounded-lg">
          <div className="flex items-center gap-1 text-primary rounded-lg">
            <FaShopify size={24} />
            <div className="flex flex-1 flex-col px-4 py-2">
              <span className="flex text-sm font-medium">Apna Bazar</span>
              <span className="flex text-info text-xs">
                React js, HTML, CSS
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary rounded-lg">
            <FaPizzaSlice size={24} />
            <div className="flex flex-1 flex-col px-4 py-2">
              <span className="flex text-sm font-medium">
                Pizza Order Taking Bot
              </span>
              <span className="flex text-info text-xs">Chat gpt, Python</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary rounded-lg">
            <FaSchool size={24} />
            <div className="flex flex-1 flex-col px-4 py-2">
              <span className="flex text-sm font-medium">
                Student Management System
              </span>
              <span className="flex text-info text-xs">
                Asp.net, C#, Sql Server, JavaScript
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-primary rounded-lg">
            <GiDinosaurRex size={24} />
            <div className="flex flex-1 flex-col px-4 py-2">
              <span className="flex text-sm font-medium">
                Chrome Dino Game Bot
              </span>
              <span className="flex text-info text-xs">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proj;
