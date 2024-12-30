import React from 'react';

function Button({ style, text, onClick }) {
  return (
    <button className={`${style} px-4 py-2 rounded-md`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
