import React from "react";
import {motion} from 'framer-motion';

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
    <motion.li className="score" initial={{scale: 0.3}} animate={{ scale: 1 }}
    transition={{ duration: 0.25 }}>
      { homeTeamObj && <div className="score__container">
        <div className="score__container__home-team">
          <div className="score__container__team-image">
            <img src={homeTeamObj.logo} alt="" />
          </div>
          <p>{homeTeamObj.shortName}</p>
        </div>
        <p className="score__container__score">{scoreHomeTeam} - {scoreAwayTeam}</p>
        <div className="score__container__away-team">
          <div className="score__container__team-image">
            <img src={awayTeamObj.logo} alt="" />
          </div>
          <p>{awayTeamObj.shortName}</p>
        </div>
      </div>}
    </motion.li>
  );
};

export default Score;
