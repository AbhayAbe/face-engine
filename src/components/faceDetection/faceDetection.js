import React, { Component } from "react";
import "./faceDetection.css";
import ReactLoading from "react-loading";
class FaceDetection extends Component {
  render() {
    const coords = this.props.coords;
    const imgUrl = this.props.imgUrl;
    const errorCatch = this.props.errorCatch;
    const hasToWait = this.props.hasToWait;
    const boundsContainerDiv = document.getElementById("bbContainer");
    const boundingBoxCheck = document.getElementById("bounding-box");
    if (coords && boundsContainerDiv && !boundingBoxCheck) {
      Object.keys(coords).forEach((key, index) => {
        const mydiv = document.createElement("div");
        mydiv.className = "boundingBox";
        mydiv.innerHTML = `<div class="bounding-box" 
        id="bounding-box" 
        style="top: ${coords[key].top_row}px; 
        right: ${coords[key].right_col}px;
         bottom: ${coords[key].bottom_row}px; 
         left: ${coords[key].left_col}px;">
         </div>`;
        boundsContainerDiv.appendChild(mydiv);
      });
    }

    return (
      <div className="center ma">
        <div className="relative mt4" id="bbContainer">
          {hasToWait === true && !errorCatch ? (
            <div className="center">
              <ReactLoading
                type={"bars"}
                color={"#1BBC9B"}
                height={"20%"}
                width={"20%"}
              />
            </div>
          ) : (
            <div
              className="center"
              style={{
                color: "red",
                fontWeight: "normal",
                padding: "4px",
                fontSize: "large",
              }}
            >
              {errorCatch}
            </div>
          )}
          <img
            id="InpImg"
            alt=""
            src={imgUrl}
            width="400px"
            height="auto"
          ></img>
        </div>
      </div>
    );
  }
}

export default FaceDetection;
