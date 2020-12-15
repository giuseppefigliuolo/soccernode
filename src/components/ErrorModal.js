import React from "react";

const ErrorModal = () => {
  return (
    <div className="backdrop">
      <div class="modal__body">
        <h2>I'm sorry...</h2>
        <p>
          Since I'm on a free plan on <b>football-data.org</b> I have a limited
          amount of requests to the database. <br />
          Looks like we've exceeded that :(
        </p>

        <p className="please">
          Please wait a little and then <span>try again</span>!
        </p>
      </div>
    </div>
  );
};

export default ErrorModal;
