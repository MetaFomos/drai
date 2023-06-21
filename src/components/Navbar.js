import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const languages = [
  { name: "EN", label: "English" },
  { name: "ZH", label: "Chinese" },
  { name: "JA", label: "Japanese" },
  { name: "KO", label: "Korean" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langShow, setLangShow] = useState(false);
  const [globalLang, setGlobalLang] = useLocalStorage(
    "dragonai-language",
    "EN"
  );
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 h-[120px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            className="w-[150px]"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex gap-8">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:border-gray-700 text-md">
              <li>
                <a href="#sectiondrai" className="text-eee" aria-current="page">
                  DRAGONAI
                </a>
              </li>
              <li>
                <a
                  href="#sectionfeatures"
                  className="text-eee"
                  aria-current="page"
                >
                  FEATURES
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
                <a
                  href="#sectionvision"
                  className="text-eee"
                  aria-current="page"
                >
                  VISION
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-2" onClick={() => setLangShow(!langShow)}>
              <img
                src="/images/in/internet.png"
                alt="language-icon"
                className="w-[25px]"
              />
              <span className="text-white">{globalLang}</span>
            </div>
            <div className={`absolute text-white ${!langShow && "hidden"}`}>
              <ul>
                {languages.map((item, index) => (
                  <li
                    key={item.name}
                    onClick={() => {
                      setLangShow(!langShow);
                      setGlobalLang(item.name);
                    }}
                    className={`w-[30px] py-[2px] ${index == 0 && "mt-1"}`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
