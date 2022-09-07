import React from 'react'
import '../styles/HeaderTopManager.css';
import HeaderTopRight from './HeaderTopRight';
import Logo from './Logo';
import SearchProduct from './SearchProduct';

function HeaderTopManager() {
  return (
    <div className='header-top-manager'>
        <SearchProduct />
        <Logo />
        <HeaderTopRight />
    </div>
  )
}

export default HeaderTopManager;