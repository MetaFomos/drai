import React, { useState } from "react";

const roadmapTerms = {
  2023: [
    {
      quater: 2,
      tasks: ["Social casino(I-GAMING) launch", "Launched DragonAI"],
    },
    {
      quater: 3,
      tasks: ["Listed on CEX exchange (overseas)"],
    },
    {
      quater: 4,
      tasks: ["Listed on CEX exchange", "AI hospital platform launch"],
    },
  ],
  2024: [
    {
      quater: 1,
      tasks: ["Listed on CEX exchange (overseas)"],
    },
    {
      quater: 2,
      tasks: ["Listed on CEX exchange"],
    },
  ],
};

const RoadmapItem = ({ quater, tasks }) => {
  return (
    <>
      <div className="bg-solution-item shadow-2xl rounded-2xl text-white mt-[60px] py-2">
        <div className="flex items-center justify-around py-2 px-3">
          <span className="bebas text-[40px] md:text-[60px]">Q{quater}</span>
          <div
            className="bg-white h-[2px] w-[65%]"
            style={{ borderTop: "2px dotted black" }}
          ></div>
          <span className="bg-golden w-[42px] h-[42px] rounded-full text-3xl bebas">
            {quater * 3}
          </span>
        </div>
        {tasks.map((item, key) => (
          <p
            key={key}
            className="text-left py-1 px-5 text-[18px] sm:text-[20px] poppinsFont"
          >
            - {item}
          </p>
        ))}
      </div>
    </>
  );
};

const RoadMap = () => {
  const years = [2023, 2024];
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <>
      <div className="items-center flex py-10 md:py-20 poppinsFont">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font py-3">
            roadmap
          </h1>

          <div className="flex justify-center gap-5 cursor-pointer py-3">
            {years.map((year, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    selectedYear === year ? "bg-golden" : " bg-solution-item"
                  }  rounded-lg w-[160px] px-3 py-2`}
                  onClick={() => setSelectedYear(year)}
                >
                  <p className="text-white text-3xl">{year}</p>
                  <div className="w-full flex justify-center">
                    {selectedYear === year && (
                      <div className="absolute h-3 w-3 rotate-45 z-1 bg-golden"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapTerms[selectedYear].map((item, key) => (
              <RoadmapItem key={key} quater={item.quater} tasks={item.tasks} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
