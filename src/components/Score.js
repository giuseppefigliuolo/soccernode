import React from "react";

const Score = ({ teams, homeTeam, awayTeam, scoreHomeTeam, scoreAwayTeam }) => {
      const homeTeamObj = teams.find((el) => {
          if (el.name === homeTeam) {
            return el.shortName, el.logo;
          }
        });
      const awayTeamObj = teams.find((el) => {
        if (el.name === awayTeam) {
          return el.shortName, el.logo;
        }
      });
  return (
    <li className="score">
      { homeTeamObj && <div className="score__container">
        <div className="score__container__home-team">
          <img src={homeTeamObj.logo} alt="" />
          <p>{homeTeamObj.shortName}</p>
        </div>
        <p className="score__container__score">{scoreHomeTeam} : {scoreAwayTeam}</p>
        <div className="score__container__away-team">
          <img src={awayTeamObj.logo} alt="" />
          <p>{awayTeamObj.shortName}</p>
        </div>
      </div>}
    </li>
  );
};

export default Score;
