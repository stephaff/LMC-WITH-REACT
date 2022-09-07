import React from 'react';
import '../styles/Logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className='logo'>
        <h2>
            <span>LMC - </span> Shop
        </h2>
    </Link>
  )
}

export default Logo;