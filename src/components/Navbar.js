import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 h-[120px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            className="w-[230px]"
            alt="Flowbite Logo"
          />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:border-gray-700 text-md">
            <li>
              <a href="#sectiondrai" className="text-eee" aria-current="page">
                DRAGONAI
              </a>
            </li>
            <li>
              <a
                href="#sectionsolution"
                className="text-eee"
                aria-current="page"
              >
                SOLUTION
              </a>
            </li>
            <li>
              <a
                href="#sectionroadmap"
                className="text-eee"
                aria-current="page"
              >
                ROADMAP
              </a>
            </li>
            <li>
              <a
                href="#sectiontokenomics"
                className="text-eee"
                aria-current="page"
              >
                TOKENOMICS
              </a>
            </li>
            <li>
              <a
                href="#sectionadvisor"
                className="text-eee"
                aria-current="page"
              >
                ADVISOR
              </a>
            </li>
            <li>
              <a href="#sectionteam" className="text-eee" aria-current="page">
                TEAM
              </a>
            </li>
            <li>
              <a href="#sectionvision" className="text-eee" aria-current="page">
                VISION
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
