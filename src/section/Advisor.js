import React from "react";

const Advisor = () => {
  return (
    <>
      <div className="items-center flex pb-20">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[69px] golden-font pt-5">
            HERBERT R. SIM
          </h1>
          <div className="flex justify-center mt-10 gap-5">
            <div className="w-[50%]">
              <ul className="text-white">
                <li className="text-[20px] text-left leading-8 list-disc">
                  Herbert Sim is commonly known in the FinTech world as
                  BitcoinMan™ (TheBitcoinMan.com EST 2016).
                </li>
                <li className="text-[20px] text-left mt-5 leading-8 list-disc">
                  Mr. Sim was Director of Global Operations at HUOBI (2017-2018)
                  and CMO of Cryptology, a Russian cryptocurrency exchange.
                </li>
                <li className="text-[20px] text-left mt-5 leading-8 list-disc">
                  Herbert holds an MBA from the University of Wolverhampton, UK.
                  He holds a bachelor's degree in Mass Communication from
                  Oklahoma City University, USA.
                </li>
                <li className="text-[20px] text-left mt-5 leading-8 list-disc">
                  As of 2023, Mr Sim is still one of less than 100 verified
                  'blue tick' public figures across all major social media
                  platforms (FB, IG, TW) in the global blockchain industry.
                </li>
              </ul>
            </div>
            <div className="w-[50%]">
              <img width={"90%"} src="/images/advisor.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advisor;
