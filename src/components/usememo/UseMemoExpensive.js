import React, { useState, useMemo, useEffect } from 'react';

export default function UseMemoExpensive() {
    const [number, setNumber] = useState(5);
  const [randomValue, setRandomValue] = useState(0);

  const calculateFactorial = (n) => {
    console.log('Calculating factorial...');
    if (n <= 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const factorial = useMemo(() => calculateFactorial(number), [number]);
//   const factorial = calculateFactorial(number);

  return (
    <div>
      <h1>Factorial of {number}: {factorial}</h1>
      <p>Random Value: {randomValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setRandomValue(Math.random())}>Re-render</button>
    </div>
  );
}