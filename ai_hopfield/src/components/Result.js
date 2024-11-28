import React from "react";
import "../styles/Result.css";

const Result = ({ result }) => (
  <div className="result">
    <h2>Recognition Result:</h2>
    <p>{result || "No result yet"}</p>
  </div>
);

export default Result;
