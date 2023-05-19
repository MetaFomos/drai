import React from "react";

const Footer = () => {
  return (
    <>
      <div className="items-center bg-solution flex">
        <div className="n-container">
          <div className="flex flex-col lg:flex-row justify-between mt-[30px] lg:mt-[50px]">
            <div className="lg:w-[30%]">
              <img width={"235px"} src="/images/logo.png" />
              <p className="text-[14px] md:text-[21px] py-4 text-left text-white">
                The AI platform AI tools and applications to allow humans to
                make sense of all of the world’s knowledge
              </p>
            </div>
            <div className="flex justify-between lg:w-[30%]">
              <div className="text-white">
                <p className="text-[18px] md:text-[25px] text-left">Company</p>
                <a href="#sectionteam">
                  <p className="text-[14px] md:text-[21px] text-left lg:mt-[30px] mt-[15px]">
                    Team
                  </p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1wxS4kVmgX6UMmRiCalr3tbl6S9TQXzzC/view"
                  target="_blank"
                >
                  <p className="text-[14px] md:text-[21px] text-left lg:mt-[30px] mt-[15px]">
                    Whitepaper
                  </p>
                </a>
              </div>
              <div className="text-white">
                <p className="text-[18px] md:text-[25px] text-left">Legal</p>
                <p className="text-[14px] md:text-[21px] text-left lg:mt-[30px] mt-[15px]">
                  Privacy Policy
                </p>
                <p className="text-[14px] md:text-[21px] text-left lg:mt-[30px] mt-[15px]">
                  Terms Of Service
                </p>
              </div>
            </div>
            <div className="text-white">
              <p className="text-[18px] md:text-[25px] text-left mt-[30px] lg:mt-[0px]">
                Find Us Online
              </p>
              <div className="flex gap-5 mt-[30px]">
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/instagram.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/linkedin.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/facebook.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/twitter.png"
                />
              </div>
              <div className="flex gap-5 my-3">
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/youtube.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/telegram.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/discord.png"
                />
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/socials/email.png"
                />
              </div>
            </div>
          </div>
          <hr />
          <p className="text-white py-10">
            Copyright &copy;2023 DragonAI All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
