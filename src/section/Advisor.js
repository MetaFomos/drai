import React from "react";

const Advisor = () => {
  return (
    <>
      <div className="items-center flex pb-10 md:pb-20" id="sectionadvisor">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font pt-5">
            HERBERT R. SIM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
            <div>
              <ul className="text-white">
                <li className="text-[18px] md:text-[20px] px-2 text-left leading-8 list-disc">
                  Herbert Sim is commonly known in the FinTech world as
                  BitcoinMan™ (TheBitcoinMan.com EST 2016).
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  Mr. Sim was Director of Global Operations at HUOBI (2017-2018)
                  and CMO of Cryptology, a Russian cryptocurrency exchange.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  Herbert holds an MBA from the University of Wolverhampton, UK.
                  He holds a bachelor's degree in Mass Communication from
                  Oklahoma City University, USA.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  As of 2023, Mr Sim is still one of less than 100 verified
                  'blue tick' public figures across all major social media
                  platforms (FB, IG, TW) in the global blockchain industry.
                </li>
              </ul>
            </div>
            <div>
              <img className="" src="/images/advisor.png" />
              <div className="flex w-[100%] mt-[-7%]">
                <a
                  className="w-[7%]"
                  href="https://instagram.com/herbertrsim"
                  target="_blank"
                >
                  <img src="/images/socials/instagram.png" />
                </a>
                <a
                  className="w-[7%] ml-[1%]"
                  href="https://www.linkedin.com/in/herbertsim/"
                  target="_blank"
                >
                  <img src="/images/socials/linkedin.png" />
                </a>
                <a
                  className="w-[7%] ml-[1%]"
                  href="https://facebook.com/herbertrsim"
                  target="_blank"
                >
                  <img src="/images/socials/facebook.png" />
                </a>
                <a
                  className="w-[7%] ml-[1%]"
                  href="http://www.twitter.com/herbertrsim"
                  target="_blank"
                >
                  <img src="/images/socials/twitter.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center flex pb-10 md:pb-20" id="sectionadvisor">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font pt-5">
            EDWARD. KIM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
            <div>
              <img className="" src="/images/edward.png" />
              <div className="flex w-[100%] mt-[-7%]">
                <a
                  className="w-[7%]"
                  href="https://instagram.com/eddyrhry?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                >
                  <img src="/images/socials/instagram.png" />
                </a>
                <a
                  className="w-[7%] ml-[1%]"
                  href="https://www.linkedin.com/in/edward-kim-1760a12/"
                  target="_blank"
                >
                  <img src="/images/socials/linkedin.png" />
                </a>
                <a className="w-[7%] ml-[1%]" href="#" target="_blank">
                  <img src="/images/socials/facebook.png" />
                </a>
                <a className="w-[7%] ml-[1%]" href="#" target="_blank">
                  <img src="/images/socials/twitter.png" />
                </a>
              </div>
            </div>
            <div>
              <ul className="text-white">
                <li className="text-[18px] md:text-[20px] px-2 text-left leading-8 list-disc">
                  Edward is an experienced banker and fund manager specializing
                  in post-IPO funding and M&A in the Pan-Asian region.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  He has a proven track record in private equities, venture
                  capital, and structured funds of hedge funds (FoHF).
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  With over 20 years of expertise, Edward has demonstrated
                  exceptional leadership and strategic investment skills.
                </li>
                <li className="text-[18px] md:text-[20px] px-2 text-left mt-5 leading-8 list-disc">
                  Edward has BSc in Econometrics from UC Berkeley School of Haas
                  and received MSc, Economics from University of London.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advisor;
