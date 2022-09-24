import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import '../styles/ProductList.css';
import Button from "./Button";
import Product from "./Product";

function ProductList(){

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    console.log(products)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>
                dispatch(getAllProducts(json))
            )
    }, []);

    return (
        <div className="product-list">
            <div className="product-list-container">
                {products.map((product, index) =>
                    <Product key={ index } product={ product } />
                   )}
            </div>
            <Button btn='plus' lbl='Voir plus' />
        </div>
    );
}

export default ProductList;