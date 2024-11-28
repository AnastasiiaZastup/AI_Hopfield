import React, { useState } from "react";
import Grid from "./components/Grid";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Hopfield from "./logic/Hopfield";
import "./styles/App.css";

const App = () => {
  const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(-1)));
  const [result, setResult] = useState("");
  const [patterns, setPatterns] = useState([]);
  const hopfield = new Hopfield(100); // Розмір сітки (10x10 = 100)

  const train = () => {
    const flatGrid = grid.flat();
    setPatterns([...patterns, flatGrid]);
    hopfield.train([...patterns, flatGrid]);
  };

  const recognize = () => {
    const flatGrid = grid.flat();
    const recognized = hopfield.recognize(flatGrid);
    setResult(recognized.join(", ")); // Вивести як текст
  };

  const clearGrid = () => {
    setGrid(Array(10).fill(Array(10).fill(-1)));
    setResult("");
  };

  return (
    <div className="app">
      <h1>Hopfield Network</h1>
      <Grid grid={grid} setGrid={setGrid} />
      <Buttons onTrain={train} onRecognize={recognize} onClear={clearGrid} />
      <Result result={result} />
    </div>
  );
};

export default App;
