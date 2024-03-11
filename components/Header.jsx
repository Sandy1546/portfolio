import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div
        className="header-wrapper flex rounded-lg w-full bg-[url('/assets/images/cover.jpeg')] bg-no-repeat bg-cover"
        id="header"
      >
        <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-fliter backdrop-blur-md w-full gap-2 md:gap-10">
          <div className="rounded-full border-gradient-to-tr from-yellow-200 to-amber-600 flex items-center">
            <Image
              src="/assets/images/hero_pic.png"
              alt="Sandip Singh"
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="hero-image object-cover p-1 bg-gradient-to-tr from-yellow-200 to-amber-700 rounded-full shadow-md"
            />
          </div>

          <div className="flex md:flex-1 flex-col justify-center gap-4">
            <div className="flex justify-between items-center gap-5">
              <div className="text-2xl sm:text-3xl flex flex-col font-bold text-highlight">
                Sandip Singh
                <div className="text-sm font-thin flex justify-between items-center gap-7">
                  <span className="role">Software Developer</span>

                  <a
                    href="https://www.linkedin.com/in/enggsandipsingh"
                    target="_blank"
                    rel="noreferrer"
                    className="block md:hidden"
                  >
                    <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed cardPrimary text-primary font-semibold text-xs p-2">
                      <FaLinkedinIn size={20} />
                    </button>
                  </a>
                </div>
              </div>

              {/* (For icon to be seen on big screen) <a className="hidden md:block"></a> */}
              <a
                href="https://www.linkedin.com/in/enggsandipsingh"
                target="_blank"
                rel="noreferrer"
                className="hidden md:block"
              >
                <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed cardPrimary text-primary font-semibold text-xs py-2 px-4">
                  <FaLinkedinIn size={20} />
                  <span className="hidden md:block">Connect with me</span>
                </button>
              </a>
              {/* <span className="hidden md:block bg-gray-900">
                Connect with us
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
