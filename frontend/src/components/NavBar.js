import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeclass to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink exact activeclass to="/songs/new">
        {" "}
        Add Song
      </NavLink>
      <NavLink exact activeclass to="/about">
        {" "}
        About
      </NavLink>

      <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;
