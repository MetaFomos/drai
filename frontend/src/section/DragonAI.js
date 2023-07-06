import React from "react";

const DragonAI = () => {
  return (
    <>
      <div id="sectiondrai" className="bg-drai items-center flex pb-20">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font py-3">
            DRAGONAI
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div className="">
              <img
                className="m-auto"
                width={"90%"}
                src="/images/satellite.png"
              />
            </div>
            <div className="">
              <ul className="text-white m-auto mt-5 md:mt-0">
                <li className="text-[18px] md:text-[20px] px-2 text-left leading-8 list-none md:list-disc m-auto">
                  The DRAGONAI platform has a modular structure, providing
                  useful functions for collecting information from individual
                  smartphones and turning it into AI. This modularity can be
                  easily extended and adapted to each user's needs, helping to
                  deliver a personalized AI experience.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-8 leading-8 list-none md:list-disc m-auto">
                  The DRAGONAI platform interacts with users by continuously
                  improving their ability to talk, communicate, and learn thanks
                  to advances in advanced natural language processing (NLP)
                  technology. In addition, it supports expansion into various
                  industries using various APIs and integrated functions and
                  synchronizes user convenience.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-8 leading-8 list-none md:list-disc m-auto">
                  Thanks to the scalability of the DRAGONAI platform to various
                  industries, the AI assistant can serve as a friend, counselor,
                  or lover depending on the user's needs. The harmonious
                  combination of artificial intelligence platform and virtual
                  personality creates a new paradigm of artificial intelligence
                  technology for users.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DragonAI;
