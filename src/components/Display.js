import React, { useEffect } from "react";
import Standing from "./Standing";
import Score from "./Score";
import LoadingLi from "./LoadingLi";
import ErrorModal from "./ErrorModal";

const Display = ({ whatToShow, teams, data, dataScore, isLoading, error }) => {
  return (
    <ul
      className={whatToShow === "standings" ? "table standings-table" : "table"}
    >
      {error && <ErrorModal />}
      {isLoading && !error ? (
        <LoadingLi />
      ) : whatToShow === "standings" ? (
        data.map((el, i) => (
          <Standing
            key={i}
            teams={teams}
            position={el.position}
            teamName={el.team.name}
            points={el.points}
          />
        ))
      ) : (
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
        ))
      )}
    </ul>
  );
};

export default Display;
