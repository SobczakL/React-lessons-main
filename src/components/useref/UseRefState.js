import React, { useState, useEffect, useRef } from 'react';

export default function UseRefState() {
    const [value, setValue] = useState('');
    const previousValueRef = useRef('');
  
    useEffect(() => {
      previousValueRef.current = value;
    }, [value]);
  
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <p>Current Value: {value}</p>
        <p>Previous Value: {previousValueRef.current}</p>
      </div>
    );
}