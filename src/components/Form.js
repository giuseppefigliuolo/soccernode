import React from "react";

const Form = ({ changeLeague, whatToShow, label }) => {
  return (
    <form className="dashboard-form">
      <div>
        <label>{label}</label>
        <select
          name="leagues"
          onChange={(evt) => changeLeague(evt.target.value)}
        >
          <option value="2019">Serie A</option>
          <option value="2021">Premier League</option>
          <option value="2014">La Liga</option>
          <option value="2002">Bundesliga</option>
          <option value="2015">Ligue 1</option>
          <option value="2003">Eredivisie</option>
        </select>
      </div>
      <div
        className="dashboard-form__radio"
        onChange={(evt) =>
          whatToShow(
            evt.target.value === "scores"
              ? "matches?status=FINISHED"
              : "standings"
          )
        }
      >
        <input
          type="radio"
          id="scores"
          name="dashboard-option"
          value="scores"
          defaultChecked
        />
        <label htmlFor="scores">Scores</label>
        <input
          type="radio"
          id="standings"
          name="dashboard-option"
          value="standings"
        />
        <label htmlFor="standings">Standings</label>
      </div>
    </form>
  );
};

export default Form;
