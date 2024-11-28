import React, { useState } from "react";

const TrainingControls = ({ network, grid }) => {
  const [patterns, setPatterns] = useState([]);

  const addPattern = () => {
    setPatterns([...patterns, grid.flat()]);
    network.train([...patterns, grid.flat()]);
  };

  return (
    <div>
      <button onClick={addPattern}>Add Pattern</button>
      <p>Patterns trained: {patterns.length}</p>
    </div>
  );
};

export default TrainingControls;
