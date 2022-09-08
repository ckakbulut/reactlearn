import React, { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["Red", "Green", "Blue"]);

  const handleClick = () => {
    setColors([...colors, "Yellow"]);
  };
  return (
    <div>
      <h2>Colors</h2>
      <div>
        <button onClick={handleClick}>Add color</button>
      </div>
      {colors.map((color, index) => (
        <div key={index}>{color}</div>
      ))}
    </div>
  );
}

export default Colors;
