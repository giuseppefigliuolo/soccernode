import React from "react";
import Standing from "./Standing";
import Score from "./Score";

const Display = ({ whatToShow, teams, data, dataScore }) => {
  return (
    <ul className="table">
      {whatToShow === "standings" &&
        data.map((el, i) => (
          <Standing
            key={i}
            teams={teams}
            position={el.position}
            teamName={el.team.name}
            points={el.points}
          />
        ))}
      {whatToShow !== "standings" &&
        dataScore.length < 40 &&
        dataScore.map((el, i) => (
          <Score
            key={i}
            teams={teams}
            homeTeam={el.homeTeam.name}
            awayTeam={el.awayTeam.name}
            scoreHomeTeam={el.score.fullTime.homeTeam}
            scoreAwayTeam={el.score.fullTime.awayTeam}
          />
        ))}
    </ul>
  );
};

export default Display;
