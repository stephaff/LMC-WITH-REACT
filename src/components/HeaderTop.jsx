import React from 'react';
import '../styles/HeaderTop.css';
import HeaderTopManager from './HeaderTopManager';
import Navbar from './Navbar';

function HeaderTop() {
  return (
    <div className='header-top'>
        <div className="header-top-container">
            <HeaderTopManager />
            <Navbar />
        </div>
    </div>
  )
}

export default HeaderTop;