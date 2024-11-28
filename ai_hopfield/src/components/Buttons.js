import React from "react";
import "../styles/App.css";

const Buttons = ({ onTrain, onRecognize, onClear }) => (
  <div className="buttons">
    <button onClick={onTrain}>Train</button>
    <button onClick={onRecognize}>Recognize</button>
    <button onClick={onClear}>Clear</button>
  </div>
);

export default Buttons;
