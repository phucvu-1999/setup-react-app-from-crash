import React, { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <button onClick={handleCounter}>Click me to add counter</button>
      <p>{counter}</p>
    </>
  );
};

export default ClickCounter;
