import React from "react";
import Tilt from "react-tilt";
import logo from "./face-det.png";
const Logo = () => {
  return (
    <div className="center">
      <Tilt
        className="Tilt br2 "
        options={{ max: 65 }}
        style={{ height: 150, width: 150 }}
      >
        <img src={logo} alt="logo"></img>
      </Tilt>
    </div>
  );
};
export default Logo;
