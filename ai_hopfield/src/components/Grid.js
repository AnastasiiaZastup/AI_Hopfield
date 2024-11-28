import React from "react";
import "../styles/Grid.css";

const Grid = ({ grid, setGrid }) => {
  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) =>
        i === row && j === col ? (cell === 1 ? -1 : 1) : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`grid-cell ${cell === 1 ? "active" : ""}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
