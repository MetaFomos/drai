import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div
        className="bg-solution items-center flex py-10 md:py-20 poppinsFont"
        id="sectiontokenomics"
      >
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font py-3">
            $DRON Token
          </h1>
          <img className="py-4" src="/images/tokenomics.png" />
          <p className="text-[16px] md:text-[20px] text-white pt-8">
            Lock period will effective
            <br /> upon first listing cex
          </p>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
