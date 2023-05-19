import React from "react";

const Vision = () => {
  return (
    <>
      <div className="items-center flex pb-20" id="sectionvision">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font pt-5">
            VISION
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5">
            <div className="hidden md:block lg:block">
              <img width={"90%"} src="/images/robot.png" />
            </div>
            <div className="px-2">
              <ul className="text-white">
                <li className="text-[18px] md:text-[20px] md:text-left leading-8 list-none md:list-disc m-auto text-left break-all">
                  DragonAI aims to improve the transparency, safety and
                  efficiency of data processing and management by combining the
                  advantages of artificial intelligence and blockchain
                  technology. DragonAI leverages the open source ecosystem to
                  provide innovative solutions in various fields such as smart
                  contracts, security enhancements, payment solutions, data
                  analytics and resource management. Their vision emphasizes
                  collaboration between humans and technology to have a profound
                  impact on industry, economy and society, with limitless
                  scalability across all industries.
                </li>
                <li className="text-[18px] md:text-[20px] md:text-left mt-5 leading-8 list-none md:list-disc m-auto text-left break-all">
                  DragonAI will make technological progress and development to
                  provide new value creation opportunities to businesses and
                  individuals by discovering the infinite possibilities of AI
                  and blockchain technology and the intrinsic value of human
                  beings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
