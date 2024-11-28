import React from "react";
import "./styles/LetterGrid.css";

const LetterGrid = ({ grid, setGrid }) => {
  const toggleCell = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = newGrid[row][col] === 1 ? -1 : 1;
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell === 1 ? "active" : ""}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LetterGrid;
