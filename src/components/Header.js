import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <div className="header-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
