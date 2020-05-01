import React from "react";
import Tilt from "react-tilt";
import "./ILF.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3 center">{"Paste image URL below for face detection"}</p>
      <Tilt
        className="center Tilt br2 "
        options={{ max: 15 }}
        style={{ width: "auto" }}
      >
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              id="txt"
              onChange={onInputChange}
            />
            <button
              className="w-30 grow f4 link  pv2 dib white"
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

  /*<div>
      <p className="center">{"Paste image URL below for face detection"}</p>
      <Tilt
        className="center Tilt br2 "
        options={{ max: 15 }}
        style={{ width: "auto" }}
      >
        <div className="center">
          <div className="center br3 shadow-5" style={{ padding: "8px" }}>
            <input
              onChange={onInputChange}
              className="f4 pa2 center"
              id="txt"
              type="text"
            ></input>
            <button
              className=" f4 link ph3 pv2 dib white bg-light-purple "
              id="bttn"
              onClick={onSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </Tilt>
    </div>
  );*/
};
export default ImageLinkForm;
/*
import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {  // Destructure onInputChange and onPictureSubmit from the props.
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />  
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onPictureSubmit}  
                        >Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;*/
