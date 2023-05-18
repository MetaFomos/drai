import React from "react";

const Footer = () => {
  return (
    <>
      <div className="items-center bg-solution flex">
        <div className="n-container">
          <div className="flex justify-between mt-[50px]">
            <div className="w-[30%]">
              <img width={"235px"} src="/images/logo.png" />
              <p className="text-[21px] py-4 text-left text-white">
                The AI platform AI tools and applications to allow humans to
                make sense of all of the world’s knowledge
              </p>
            </div>
            <div className="text-white">
              <p className="text-[25px] text-left">Company</p>
              <p className="text-[21px] text-left mt-[30px]">Team</p>
              <p className="text-[21px] text-left mt-[30px]">Whitepaper</p>
            </div>
            <div className="text-white">
              <p className="text-[25px] text-left">Legal</p>
              <p className="text-[21px] text-left mt-[30px]">Privacy Policy</p>
              <p className="text-[21px] text-left mt-[30px]">
                Terms Of Service
              </p>
            </div>
            <div className="text-white">
              <p className="text-[25px] text-left">Find Us Online</p>
              <div className="flex gap-5 mt-[30px]">
                <img src="/images/socials/instagram.png" />
                <img src="/images/socials/linkedin.png" />
                <img src="/images/socials/facebook.png" />
                <img src="/images/socials/twitter.png" />
              </div>
              <div className="flex gap-5 mt-3">
                <img src="/images/socials/youtube.png" />
                <img src="/images/socials/telegram.png" />
                <img src="/images/socials/discord.png" />
                <img src="/images/socials/email.png" />
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
