import React, { Component, useState } from 'react';

import './cameraStyles.css'

import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;


// backend url to send image to
// const url = http://localhost:8000/account/OCR/


const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = () => {

const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },

    [webcamRef]
  );

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
      />
      <button
      onClick={(e)=>{e.preventDefault(); capture();}}>
      Capture</button>
    </div>
  );
};