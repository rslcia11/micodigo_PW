// src/components/ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ onClick, label }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonComponent;
