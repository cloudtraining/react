import React from "react";
import Counter from "./counter";
import "./index.css";

const Navbar = props => {
  return (
    <div className="navbar__container">
      <h1>React Keep</h1>
      <Counter count={props.count} />
    </div>
  );
};

export default Navbar;
