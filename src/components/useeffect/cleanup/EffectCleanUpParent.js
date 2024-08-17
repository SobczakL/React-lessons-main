import React, { useState } from 'react';
import EffectCleanUpChild from './EffectCleanUpChild';

export default function EffectCleanUpParent() {
  const [showTimer, setShowTimer] = useState(true);

  const handleToggle = () => {
    setShowTimer(prevShowTimer => !prevShowTimer);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showTimer ? 'Unmount Timer' : 'Mount Timer'}
      </button>
      {showTimer && <EffectCleanUpChild />}
    </div>
  );
}