import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const solutionsAsset = [
  {
    title: "1the9",
    secondTitle:
      "An application that solves the energy and meaning of our numbers.  Numbers have a unique power. Find your own good energy and good luck. Change your current life by checking your numbers!",
    image: "/images/features/19.png",
  },
  {
    title: "ToonaToona",
    secondTitle:
      "Webtoons are already getting a lot of love. Let the world experience more thrilling world and experience than Netflix!",
    image: "/images/features/toonatoona.png",
  },
  {
    title: "AI Beauty",
    secondTitle:
      "AI now even predicts plastic surgery! It analyzes probabilistically for everyone who wants to become handsome and pretty. Don't be misdiagnosed by doctors anymore, let's ask artificial intelligence!",
    image: "/images/features/aiclinic.png",
  },
  {
    title: "IGaming",
    secondTitle:
      "A variety of slots and card games are casino games that can entertain users and enjoy them at an affordable price.",
    image: "/images/features/igaming.png",
  },
];

const SolutionItem = ({ title, secondTitle, description, image }) => {
  return (
    <>
      <div className="shadow-2xl rounded-2xl text-white mt-[60px] py-[40px] mx-2 cursor-pointer flex flex-col lg:flex-row items-center">
        <img
          src={image}
          className="m-auto w-[400px] -mt-[60px] hidden sm:block"
        />
        <div className="lg:mt-[-100px] lg:w-[50%]">
          <p className="my-2 px-10 font-semibold text-[25px] md:text-[35px] leading-12 text-left">
            {title}
          </p>
          <p className="my-10 px-10 text-white text-[18px] md:text-[20px] font-medium hidden md:block text-left">
            {secondTitle}
          </p>
        </div>
      </div>
    </>
  );
};

const IGaming = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        className="bg-solution items-center flex py-20 poppinsFont"
        id="sectionfeatures"
      >
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font py-3">
            FEATURES
          </h1>
          <div className="block m-auto w-[90%]">
            <div>
              <Slider {...settings}>
                {solutionsAsset.map((item, index) => (
                  <SolutionItem
                    key={index}
                    title={item.title}
                    secondTitle={item.secondTitle}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IGaming;
