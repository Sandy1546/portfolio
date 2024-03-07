import React from "react";

const Skills = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 mt-5 md:mt-9 pt-9 md:px-0 md:pt-9 skills-wrapper"
      id="skills"
    >
      {/* My Skills */}
      <div className="col-span-2 p-6 pl-1 md:col-span-2 lg:col-span-3">
        <div className="text-xl font-medium mt-2 text-zinc-200 mb-5 pb-4">
          What I know
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Frontend card */}
          <div className="flex-1 flex flex-col gap-4 cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Frontend
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-body text-xs text-primary p-2">
                HTML
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2">
                CSS
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                Javascript
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                React Js
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2">
                Next JS
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Tailwind
              </span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="flex-1 flex flex-col gap-4 cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Backend
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                Asp.net
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2">
                C#
              </span>
            </div>
          </div>

          {/* Database Card */}
          <div className="flex-1 flex flex-col gap-4 cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Database
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-body text-xs text-primary p-2">
                Sql Server
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2">
                MongoDB
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="flex-1 flex flex-col gap-4 cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Others
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-body text-xs text-primary p-2">
                Python
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2">
                CSS
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                C++
              </span>
              <span className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                Salesforce
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      {/* <div className="grid cardPrimary gap-6 p-6 shadow-lg">
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
      </div> */}
    </section>
  );
};

export default Skills;
