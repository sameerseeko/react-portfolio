import React from 'react';

function ProgressBar({ color, width, label }) {
  return (
    <div className="progress mt-2">
      <div className={`progress-bar bg-${color}`} style={{ width }} data-width={width}>
        {label}
      </div>
    </div>
  );
}

export default ProgressBar;
