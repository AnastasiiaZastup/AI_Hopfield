import React from "react";

const RecognitionResult = ({ result }) => (
  <div>
    <h2>Recognition Result:</h2>
    <p>{result || "No result yet"}</p>
  </div>
);

export default RecognitionResult;
