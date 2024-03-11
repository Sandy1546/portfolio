import React from "react";
import { TbHexagonLetterS } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { PiCertificate } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";

const Nav = () => {
  return (
    <>
      {/* Hamburger Icon */}
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center fixed top-0 right-1 z-10 bg-slate-500 text-zinc-800 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* Hamburger icon code over */}

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full duration-1000 lg:translate-x-0 nav-wrapper"
        aria-label="Sidebar"
      >
        <span className="S-letter-wrapper flex justify-center items-center pt-3">
          <a href="#header" className="hidden lg:block navbar-brand fs-3 ms-5">
            <TbHexagonLetterS className="tagName-icon" size={52} />
          </a>
        </span>

        <div className="sidebar-wrapper h-full mr-4 lg:mx-4 my-4 px-7 py-4 overflow-y-auto rounded-lg dark:bg-gray-800">
          <button
            type="button"
            data-drawer-hide="separator-sidebar"
            aria-controls="separator-sidebar"
            class="text-gray-400 block lg:hidden bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-7 end-5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close menu</span>
          </button>

          {/* Sections List */}
          <ul className="sidebar-options-wrapper space-y-2 text-sm">
            {/* <li>
              <a
                href="#aboutMe"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                <RxAvatar size={24} />
                <span className="ms-7">About Me</span>
              </a>
            </li> */}
            <li>
              <a
                href="#projects"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                <GrTask size={24} />
                <span className="flex-1 ms-7 whitespace-nowrap">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg> */}
                <GiSkills size={24} />
                <span className="flex-1 ms-7 whitespace-nowrap">Skills</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg> */}
                <CgNotes size={24} />
                <span className="flex-1 ms-7 whitespace-nowrap">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg> */}
                <PiCertificate size={24} />
                <span className="flex-1 ms-7 whitespace-nowrap">
                  Certifications
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-950 hover:font-bold dark:hover:bg-gray-700 group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg> */}
                <FaPhone size={24} />
                <span className="flex-1 ms-7 whitespace-nowrap">Contact</span>
              </a>
            </li>
          </ul>

          {/* Social Media List */}
          <ul className="sidebar-options-wrapper pt-4 mt-2 space-y-2 text-sm dark:border-gray-700">
            <span className="text-base font-bold">Socials</span>
            <li className="Mail-wrapper">
              <a
                href="mailto:sandip15467@gmail.com"
                data-drawer-hide="separator-sidebar"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:font-bold dark:hover:bg-gray-700 dark:text-white group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 17 20"
                >
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                </svg> */}
                <BiLogoGmail size={20} />
                <span className="ms-7">Mail</span>
              </a>
            </li>
            <li className="Git-wrapper">
              <a
                href="https://github.com/Sandy1546"
                data-drawer-hide="separator-sidebar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:font-bold dark:hover:bg-gray-700 dark:text-white group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg> */}
                <FaGithub size={20} />
                <span className="ms-7">GitHub</span>
              </a>
            </li>
            <li className="LinkedIn-wrapper">
              <a
                href="https://www.linkedin.com/in/enggsandipsingh"
                data-drawer-hide="separator-sidebar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:font-bold dark:hover:bg-gray-700 dark:text-white group"
              >
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                </svg> */}
                <FaLinkedinIn size={20} />
                <span className="ms-7">LinkedIn</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 21"
                >
                  <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                </svg>
                <span className="ms-7">Help</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Nav;
