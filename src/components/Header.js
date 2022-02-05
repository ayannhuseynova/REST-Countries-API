import React from "react";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand">Where in the world?</a>
          <div className="d-flex align-items-center rightSide">
            <BsMoon />
            <button className="btn darkTheme" type="submit">
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
