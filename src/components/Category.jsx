import React from 'react';
import '../styles/Category.css';

function Category({ category }) {
  return (
    <div className='category'>
        <h3>{ category }</h3>
        <p className='more'>Voir plus</p>
    </div>
  )
}

export default Category;