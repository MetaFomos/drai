import React from "react";

const IntroDescription = () => {
  return (
    <div className="text-white py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 px-5">
        <div className=" flex items-center">
          <div>
            <p className="text-center md:text-left text-[40px] md:text-[60px] golden-font glaserstencil">
              MASTER PIECE OF AI
            </p>
            <p className="text-left text-[16px] sm:text-[18px] poppinsFont lead-7">
              The Size Of AI Will Grow At An Average Annual Rate Of 38.1% By
              2030 To Reach USD 1,591 Billion.
            </p>
            <div className="md:flex gap-6 my-5 items-center justify-center md:justify-normal hidden">
              <button className="bg-golden text-[16px] sm:text-[20px] px-[10px] py-[8px] rounded-lg dark-font">
                Get Started
              </button>
              <a href="https://youtu.be/1uHJQk1o-pY" target="_blank">
                <div className="flex gap-4 items-center cursor-pointer">
                  <button>
                    <img src="/images/playbutton.svg" />
                  </button>

                  <span className="text-[16px] sm:text-[18px]">
                    Watch Intro Video
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-right ">
          <img src="/images/dragon.png" className="w-[100%] right-0" />
          <div className="flex gap-6 my-5 items-center justify-center md:justify-normal md:hidden">
            <button className="bg-golden text-[16px] sm:text-[20px] px-[10px] py-[8px] rounded-lg dark-font">
              Get Started
            </button>
            <a href="https://youtu.be/1uHJQk1o-pY" target="_blank">
              <div className="flex gap-4 items-center cursor-pointer">
                <button>
                  <img src="/images/playbutton.svg" />
                </button>

                <span className="text-[16px] sm:text-[18px]">
                  Watch Intro Video
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroDescription;
