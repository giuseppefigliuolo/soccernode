import React, { useState, useEffect } from "react";
import Display from "./Display";

const Table = ({ league, whatToShow }) => {
  const [data, setData] = useState([]);
  const [dataScore, setDataScore] = useState([]);
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const bothFetches = async () => {
      setIsLoading(true);
      const fetchFootballApi = async () => {
        const url = `https://api.football-data.org/v2/competitions/${league}/${whatToShow}`;
        await fetch(url, {
          method: "GET",
          headers: {
            "X-Auth-Token": "e4b0257359674631994b3f58c0e7813f",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (whatToShow === "matches?status=FINISHED") {
              const lastMatchDayNumber = Math.max(
                ...data.matches.map((el) => el.matchday)
              );
              const lastMatchDay = data.matches.filter(
                (el) => el.matchday === lastMatchDayNumber
              );
              setDataScore(lastMatchDay);
            } else {
              setData(data.standings[0].table);
            }
            setIsLoading(false);
            setError(false);
          })
          .catch((err) => {
            setError(true);
          });
      };

      const fetchTeams = async () => {
        const teamsUrl = `https://api.football-data.org/v2/competitions/${league}/teams`;
        await fetch(teamsUrl, {
          method: "GET",
          headers: {
            "X-Auth-Token": "e4b0257359674631994b3f58c0e7813f",
          },
        })
          .then((res) => res.json())
          .then((data) => data.teams)
          .then((teams) => {
            const teamsObj = teams.map((el) => ({
              name: el.name,
              shortName: el.shortName,
              tla: el.tla,
              logo: el.crestUrl,
            }));
            setTeams(teamsObj);
          })
          .catch((err) => {
            setError(true);
          });
      };

      fetchFootballApi();
      fetchTeams();
    };
    bothFetches();
  }, [league, whatToShow]);

  return (
    <main>
      {
        <Display
          whatToShow={whatToShow}
          data={data}
          dataScore={dataScore}
          teams={teams}
          isLoading={isLoading}
          error={error}
        />
      }
    </main>
  );
};

export default Table;
