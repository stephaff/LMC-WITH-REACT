import React from "react";
import '../styles/ProductList.css';
import Button from "./Button";
import Product from "./Product";

function ProductList(){
    return (
        <div className="product-list">
            <div className="product-list-container">
                <Product />
                <Product /><Product /><Product /><Product /><Product /><Product /><Product /><Product />
            </div>
            <Button btn='plus' lbl='Voir plus' />
        </div>
    );
}

export default ProductList;