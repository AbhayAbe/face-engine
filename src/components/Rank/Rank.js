import React from "react";

const Rank = ({ userName, Rank }) => {
  return (
    <div className="center">
      Hi {userName}, your Rank is {Rank}
    </div>
  );
};

export default Rank;
