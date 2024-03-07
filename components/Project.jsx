import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <section
      className="grid gap-8 md:px-0 mt-5 pt-5 md:pt-9 md:mt-9 projects-wrapper"
      id="projects"
    >
      <div className="text-xl font-medium text-zinc-200">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
        {/* Promptopia project */}
        <a href="https://prompts-world.netlify.app/" target="_blank">
          <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
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
          <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
            <Image
              src="/assets/images/Projects/Portfolio.png"
              alt="project logo"
              width="700"
              height="700"
              decoding="async"
              data-nimg="1"
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
    </section>
  );
};

export default Project;
