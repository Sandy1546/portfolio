import React from "react";

const Contact = () => {
  return (
    <section
      className="mt-36 pt-11 sm:mb-36 sm:pb-11 flex flex-col justify-center items-center md:pt-11 contact-wrapper"
      id="contact"
    >
      <span className="text-xl font-medium text-center text-zinc-200">
        Get In Touch
      </span>
      <p className="text-center contacts-wrapper mt-9">
        Although I’m not currently looking for any new opportunities, my
        inbox/Linkedin/insta is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!. If you want to
        have your custom portfolio website, Do connect with me!!
      </p>
      <div>
        <a
          href="mailto:singh.sandip154@gmail.com"
          className="flex items-center p-2 transition duration-75 rounded-lg hover:font-bold dark:hover:bg-gray-700 dark:text-white group"
        >
          <button
            type="button"
            class="text-white mt-9 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Say Hello
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
