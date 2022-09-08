import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/actions';
import Category from './Category';

function CategoryList() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>
            dispatch(getAllCategories(json))
        )
    }, [])
    

  return (
    <div className='category-list'>
        <div className="category-list-container">
            {categories.filter((category, index)=>
                index > 0
            ).map((category, index)=>
                <Category key={ index }  category={ category } />
            )}
        </div>
    </div>
  )
}

export default CategoryList;