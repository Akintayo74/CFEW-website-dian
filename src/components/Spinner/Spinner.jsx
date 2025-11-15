import React from 'react';
import { Loader } from 'lucide-react';

const Spinner = ({ color, size }) => {
  const wrapperStyle = {
    display: 'block',
    width: 'min-content',
    height: 'min-content',
    opacity: 0.6,
    animation: 'spin 1000ms linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(-360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>

      <div style={wrapperStyle}>
        <Loader color={color} size={size} style={{ display: 'block', maxWidth: 'revert' }} />
      </div>
    </>
  );
};

export default Spinner;
