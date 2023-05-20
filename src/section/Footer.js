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
                  <a
                    href="https://drive.google.com/file/d/1B1QH5JXoc0IopumgFRg3y1Qmqzytb1Hi/view?usp=share_link"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p className="text-[14px] md:text-[21px] text-left lg:mt-[30px] mt-[15px]">
                  <a
                    href="https://drive.google.com/file/d/1oe8A9ZmLEjM27K_WydTxdbvlL3zCFvBA/view?usp=share_link"
                    target="_blank"
                  >
                    Terms Of Service
                  </a>
                </p>
              </div>
            </div>
            <div className="text-white">
              <p className="text-[18px] md:text-[25px] text-left mt-[30px] lg:mt-[0px]">
                Find Us Online
              </p>
              <div className="flex gap-5 mt-[30px]">
                <a
                  href="https://www.instagram.com/dragonai_io/"
                  target="_blank"
                >
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/instagram.png"
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/linkedin.png"
                  />
                </a>
                <a href="https://www.facebook.com/dragonaiio" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/facebook.png"
                  />
                </a>
                <a href="https://twitter.com/DRAGONAI_IO" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/twitter.png"
                  />
                </a>
              </div>
              <div className="flex gap-5 my-3">
                <a href="https://www.youtube.com/@DRAGONAI-IO" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/youtube.png"
                  />
                </a>
                <a href="https://t.me/dragonai_io" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/telegram.png"
                  />
                </a>
                <a href="https://discord.gg/4GZ9uvmsFh" target="_blank">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/discord.png"
                  />
                </a>
                <a href="mailto:contact@dragonai.io">
                  <img
                    className="w-[30px] md:w-[50px]"
                    src="/images/socials/email.png"
                  />
                </a>
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
