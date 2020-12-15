import React from "react";

const LoadingLi = () => {
  return (
    <li className="spinner-container">
      <svg
        className="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </li>
  );
};

/* {array.map((el, i) => (
        <div className="score" key={i}></div>
      ))} */

export default LoadingLi;
