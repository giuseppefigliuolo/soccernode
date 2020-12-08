import React from "react";

const Standing = ({ teams, position, teamName, points }) => {
  const teamObj = teams.find((el) => {
    if (el.name === teamName) {
      return el.shortName, el.logo;
    }
  });
  return (
    <li>
      <div className="standing">
        <p className="standing__position">{position}</p>
        {teamObj && (
          <div className="standing__team">
            <img
              className="standing__team__img"
              src={teamObj.logo}
              alt={`logo-${teamObj.shortName}`}
            />
            <p className="standing__team__name">{teamObj.shortName}</p>
          </div>
        )}
        <p className="standing__points">{points}</p>
      </div>
    </li>
  );
};

export default Standing;
