import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeClass to="/songs/new">
        {" "}
        Add Song |
      </NavLink>
      <NavLink exact activeClass to="/songs">
        {" "}
        View Songs |
      </NavLink>
      <NavLink exact activeClass to="/">
        {" "}
        Home{" "}
      </NavLink>
      <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;
