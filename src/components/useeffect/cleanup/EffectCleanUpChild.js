import React, { useState, useEffect } from 'react';

export default function EffectCleanUpChild() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
      console.log(`Timer ID: ${timer} - Time: ${time}`);
    }, 1000);

    // Toggle the below for cleanup
    // return () => clearInterval(timer);

  }, []);

  return <p>Timer: {time} seconds</p>;
}