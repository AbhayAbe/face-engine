import React, { Component } from "react";
import FaceDetection from "./faceDetection.css";

const FaceDetectionContainer = ({ imgUrl, coords, hasToWait, errorCatch }) => {
  for (var i in coords) {
    console.log("???????: ", coords[i].top_row);
  }
  console.log("Typeof%%%%%%%%%%%", " V: ", coords.length);
  var d = Object.keys(coords).forEach((key, index) => {
    console.log("::::::::::::::::: ", key, coords[key]);
    return (
      <FaceDetection
        imgUrl={imgUrl}
        box={coords[key]}
        hasToWait={hasToWait}
        errorCatch={errorCatch}
      ></FaceDetection>
    );
  });
  return <div>{d}</div>;
};

export default FaceDetectionContainer;
