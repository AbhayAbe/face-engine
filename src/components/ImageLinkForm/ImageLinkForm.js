import React from "react";
import Tilt from "react-tilt";
import "./ILF.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="center">{"Paste image URL below for face detection"}</p>
      <Tilt
        className="center Tilt br2 "
        options={{ max: 15 }}
        style={{ width: 400 }}
      >
        <div className="center">
          <div className="center pa4 br3 shadow-5">
            <input
              onChange={onInputChange}
              className="f4 pa2 center"
              id="txt"
              type="text"
            ></input>
            <button
              className="w-30  f4 link ph3 pv2 dib white bg-light-purple "
              id="bttn"
              onClick={onSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default ImageLinkForm;
