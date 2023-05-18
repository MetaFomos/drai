import React from "react";

const solutionsAsset = [
  {
    title: "Natural Language Processing (NLP)",
    secondTitle:
      "Dragon Al Solutions Can Process And Understand Text And Voice Data",
    description:
      "Implamentation Of Various Applications Such As Chatbot, Machine Translation, Santimant",
    image: "/images/solution/first.png",
  },
  {
    title: "Computer Vision Technology",
    secondTitle:
      "Provides The Ability To Process And Analyze Image And Video Data Supports",
    description:
      "Applications Such As Object Recognition, Image Classification, Face Recognition, And Video",
    image: "/images/solution/second.png",
  },
  {
    title: "Robotics And Automous Driving",
    secondTitle:
      "Dragon! Sclutions Are Appked 10 OboRCs And Autonomous Dring Chnology To Perform Tasks ",
    description:
      "Such As Movement Planing. Obstacle Evidance, And Route Optmizaon.",
    image: "/images/solution/third.png",
  },
  {
    title: "Machine Learning And Deep Learning",
    secondTitle:
      "Dragon Al Soluions Provide Machine Learning Algorithms That Can Perform Tasks",
    description:
      "Such As Prediction, Classification, And Clustering Based On Data",
    image: "/images/solution/fourth.png",
  },
  {
    title: "Recommendation System",
    secondTitle:
      "Inches A Function To Provide Personalized Recommendations By Analyzing Per Behavior",
    description:
      "Such As Online Shopping, Movie Recommendations, And Music Recommendations",
    image: "/images/solution/fifth.png",
  },
  {
    title: "Speech Recognition And Synth",
    secondTitle:
      "Supports Applications Such As Voice Recognition Assistant And Voice Synthesis",
    description:
      "By Providing A Function To Convert Voice To Text Or Convert Text To Voice",
    image: "/images/solution/sixth.png",
  },
];

const SolutionItem = ({title, secondTitle, description, image}) => {
  return (
    <>
      <div className="bg-solution-item shadow-2xl rounded-2xl text-white mt-[60px] py-2">
        <img
          src={image}
          className="m-auto w-[125px] -mt-[60px]"
        />
        <p className="my-2 px-10 font-semibold text-[30px] leading-12">
          {title}
        </p>
        <p className="my-2 px-10 golden-font text-[16px] font-medium">
          {secondTitle}
        </p>
        <p className="my-2 px-1 text-[16px] font-medium">
          {description}
        </p>
      </div>
    </>
  );
};

const Solution = () => {
  return (
    <>
      <div className="bg-solution items-center flex py-20 poppinsFont">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[69px] golden-font py-3">
            DRAGONAI'S SOLUTION
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {solutionsAsset.map((item, index) => (
              <SolutionItem
                key={index}
                title={item.title}
                secondTitle={item.secondTitle}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
