import React, { useRef, useState, useEffect } from "react";

export default function UseRefMutableVals() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
  
    const startTimer = () => {
      if (intervalRef.current === null) {  // Check if the interval is already running
        intervalRef.current = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }
    };
  
    const stopTimer = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        setCount(0)
        intervalRef.current = null;
      }
    };
  
    useEffect(() => {
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);
  
    return (
      <div>
        <h1>Timer: {count}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
}