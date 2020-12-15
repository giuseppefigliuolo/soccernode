import React from "react";
import { motion } from "framer-motion";

const Standing = ({ teams, position, teamName, points }) => {
  const teamObj = teams.find((el) => {
    if (el.name === teamName) {
      return el.shortName, el.logo;
    }
  });
  return (
    <motion.li
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
    >
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
    </motion.li>
  );
};

export default Standing;
