import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

  const categories = useSelector(state => state.categoryReducer.categories)

  return (
    <nav className='navbar'>
      {categories.map((category, index)=>
        <Link to={category} className='link' key={ index } >{category}</Link> 
      )}
    </nav>
  )
}

export default Navbar