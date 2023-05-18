import React from "react";

const IntroDescription = () => {
  return (
    <div className="text-white py-5">
      <div className="flex flex-row py-4 px-5">
        <div className="w-[50%] flex items-center">
          <div>
            <p className="text-left text-[69px] golden-font glaserstencil">
              MASTER PIECE OF AI
            </p>
            <p className="text-left text-[20px] poppinsFont">
              The Size Of The Will Grow At An Average Annual Rate Of 38.1% By
              2030 To Reach USD 1,591 Billion. (Approximately KRW 2,021.3655
              Trillion)
            </p>
            <div className="flex gap-6 my-5 items-center">
              <button className="bg-golden text-[20px] px-[23px] py-[8px] rounded-lg dark-font">
                Get Started
              </button>
              <div className="flex gap-4 items-center cursor-pointer">
                <button>
                  <img src="/images/playbutton.svg" />
                </button>
                <span className="text-[18px]">Watch Intro Video</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-right w-[50%]">
          <img src="/images/dragon.png" className="w-[100%] right-0" />
        </div>
      </div>
    </div>
  );
};

export default IntroDescription;
