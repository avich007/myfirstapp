import React, { useState, useEffect } from "react";

export const Button = (props) => {
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> count: {count}</h1>
      <button onClick={incrementCount}>Click me to increment!</button>
    </div>
  );
};
