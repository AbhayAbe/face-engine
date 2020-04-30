import React from "react";
const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black pa3 pointer"
          id="signout"
        >
          Signout
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black pa3 pointer"
          id="signout"
        >
          Signin
        </p>
        <p
          onClick={() => onRouteChange("signup")}
          className="f3 link dim black pa3 pointer"
          id="signout"
        >
          Signup
        </p>
      </nav>
    );
  }
};
export default Navigation;
