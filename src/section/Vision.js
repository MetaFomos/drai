import React from "react";

const Vision = () => {
  return (
    <>
      <div className="items-center flex pb-20">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[69px] golden-font pt-5">
            VISION
          </h1>
          <div className="flex justify-center mt-10 gap-5">
            <div className="w-[50%]">
              <img width={"90%"} src="/images/robot.png" />
            </div>
            <div className="w-[50%]">
              <ul className="text-white">
                <li className="text-[20px] text-left leading-8 list-disc">
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
                <li className="text-[20px] text-left mt-5 leading-8 list-disc">
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
