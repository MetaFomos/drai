import React from "react";

const TeamMemberComponent = ({ name, role, picture }) => {
  return (
    <>
      <div>
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
      <div className="bg-solution items-center flex pb-20">
        <div className="n-container">
          <h1 className="glaserstencil font-normal text-[69px] golden-font pt-5">
            TEAM
          </h1>
          <div className="grid grid-cols-3">
            {teamMembers.map((item, key) => (
              <TeamMemberComponent
                key={key}
                name={item.name}
                role={item.role}
                picture={key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
