import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TeamMemberComponent = ({ name, role, picture }) => {
  return (
    <>
      <div className="w-[80%] m-auto pb-10">
        <img
          className="m-auto"
          width={"260px"}
          src={`/images/team/${picture + 1}.png`}
        />
        <p className="bebas text-[40px] text-white">{name}</p>
        <p className="golden-font text-[23px]">{role}</p>
      </div>
    </>
  );
};

const Team = () => {
  const teamMembers = [
    { name: "EDDAN LEE", role: "Co-Founder" },
    { name: "JAKE", role: "CTO" },
    { name: "CHRIS", role: "CMO" },
    { name: "MICHAEL", role: "Developer Lead" },
    { name: "TAM", role: "Dev Ops" },
    { name: "THOMAS", role: "Front-end Lead" },
  ];

  return (
    <>
      <div className="bg-solution items-center flex" id="sectionteam">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[40px] md:text-[60px] golden-font pt-5">
            TEAM
          </h1>
          <p className="text-white text-xl">Meet Our Members!</p>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 py-5">
            {teamMembers.map((item, key) => (
              <TeamMemberComponent
                key={key}
                name={item.name}
                role={item.role}
                picture={key}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Carousel>
              {teamMembers.map((item, key) => (
                <TeamMemberComponent
                  key={key}
                  name={item.name}
                  role={item.role}
                  picture={key}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
