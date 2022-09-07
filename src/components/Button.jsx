import React from 'react';
import '../styles/Button.css';

function Button({ btn, lbl }) {
  return (
    <button className={ btn }>{ lbl }</button>
  )
}

export default Button;