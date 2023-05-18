import React from "react";
import Navbar from "../components/Navbar";
import IntroDescription from "../components/IntroDescription";

const Info = () => {
  return (
    <>
      <div className="bg-intro">
        <div className="n-container">
          <Navbar />
          <IntroDescription />
        </div>
      </div>
    </>
  );
};

export default Info;
