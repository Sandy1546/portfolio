import React from "react";

const Experience = () => {
  return (
    <section className="mt-5 pt-5 md:pt-9 experience-wrapper" id="experience">
      <div className="text-xl pl-2 font-medium text-zinc-200 pb-4">
        Experience
      </div>

      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 focus:border-b-2 rounded-t-lg"
              id="freelancing-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Freelancing
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 focus:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Persistent Systems
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 focus:border-b-2"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              TechHut
            </button>
          </li>
          <li role="presentation">
            <button
              class="inline-block p-4 focus:border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Shaurya Technosoft
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        {/* Freelancing */}
        <div
          class="hidden p-4 rounded-lg cardPrimary dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p class="text-sm text-primary dark:text-gray-400">
            <span className="text-lg font-medium font">
              <span className="highlight">@Freelancing </span>
              Web Developer{" "}
            </span>
            <br />
            <span className="text-xs">April 2023 - Till Now</span>
            <br />
            <br />
            <span className=" text-sm">
              <span className="text-base text-slate-300">Chaostrack</span>
              <br />
              Chaostrack is a B2B application for configuring, managing and
              monitoring of employee's awareness towards Cyber security.
              <br />
              Developed Dashboards, Datagrids, Profile viewer and various
              reusable components for searching, sorting and filtering using
              ReactJs and Material UI.
              <br />
              <br />
              <span className="text-base text-slate-300">
                Portfolio Website
              </span>
              <br />
              Developed Portfolio websites for customers using React JS.
              <br />
              <br />
              <span className="text-base text-slate-300">Apna Bazar</span>
              <br />
              An Ecommerce website
            </span>
            <span></span>
          </p>
        </div>

        {/* Persistent Systems */}
        <div
          class="hidden p-4 rounded-lg cardPrimary dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p class="text-sm text-primary dark:text-gray-400">
            <span className="text-lg font-medium font">
              Software Engineer{" "}
              <span className="highlight">@Persistent Systems</span>
            </span>
            <br />
            <span className="text-xs">Aug 2022 - Mar 2023</span>
            <br />
            <br />
            <span className=" text-sm">
              <span className="text-base text-slate-300">
                Loan Against Security
              </span>
              <br />
              Designed and developed Loan Against Security module. <br />
              Automated WordPress testing, SpiceJet testing using Selenium and
              Java.
              <br />
              Designed and developed Product Summary Page using Salesforce(Apex,
              LWC).
              <br />
              <br />
              <span className="text-base text-slate-300">Salesforce</span>
              <br />
              Designed and developed Loan Against Security module. <br />
              Automated WordPress testing, SpiceJet testing using Selenium and
              Java.
              <br />
              Designed and developed Product Summary Page using Salesforce(Apex,
              LWC).
              <br />
              <br />
              <span className="text-base text-slate-300">SDET</span>
              <br />
              Designed and developed Loan Against Security module. <br />
              Automated WordPress testing, SpiceJet testing using Selenium and
              Java.
              <br />
              Designed and developed Product Summary Page using Salesforce(Apex,
              LWC).
            </span>
          </p>
        </div>

        {/* TechHut */}
        <div
          class="hidden p-4 rounded-lg cardPrimary dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p class="text-sm text-primary dark:text-gray-400">
            <span className="text-lg font-medium font">
              Software Developer Intern{" "}
              <span className="highlight">@TechHut</span>
            </span>
            <br />
            <span className="text-xs">Feb 2022 - July 2022</span>
            <br />
            <br />
            <span className=" text-sm">
              <span className="text-base text-slate-300">T-shirt store</span>
              <br />
              Built an online T-shirt store. <br />
              Developed Backend using Node JS and frontend using React JS
            </span>
          </p>
        </div>

        {/* Shaurya Technosoft */}
        <div
          class="hidden p-4 rounded-lg cardPrimary dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p class="text-sm text-primary dark:text-gray-400">
            <span className="text-lg font-medium font">
              Software Developer Intern{" "}
              <span className="highlight">@Shaurya Technosoft</span>
            </span>
            <br />
            <span className="text-xs">July 2021 - Dec 2021</span>
            <br />
            <br />
            <span className=" text-sm">
              <span className="text-base text-slate-300">
                Student Management System
              </span>
              <br />
              Worked on Asp.Net and learned about MVC structure and Sql Server
              to develop a Student Management System
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
