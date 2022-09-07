import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to='' className='link'>Catégories</Link>
        <Link to='' className='link'>Vêtements</Link>
        <Link to='' className='link'>Accessoires</Link>
        <Link to='' className='link'>Chaussures</Link>
    </nav>
  )
}

export default Navbar