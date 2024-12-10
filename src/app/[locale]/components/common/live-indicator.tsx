import React from 'react';

export const LiveIndicator = ({ color = 'green', size = 4 }) => {
  return (
    <div
      className={`h-${size} w-${size} rounded-full border-2 border-${color}-600/70 flex justify-center items-center`}
      aria-label="Live indicator"
    >
      <div
        className={`h-2 w-2 rounded-full bg-${color}-500 animate-ping`}
      />
    </div>
  );
};


