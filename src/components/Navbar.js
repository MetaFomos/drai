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
          <ul className="font-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:border-gray-700 text-xl">
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Advisor
              </a>
            </li>
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Vision
              </a>
            </li>
            <li>
              <a href="#" className="text-eee" aria-current="page">
                Contract
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
