import React from "react";
import '../styles/Product.css';
import Button from "./Button";

function Product(){
    return (
        <div className="product">
            <div className="product-image">

            </div>
            <div className="product-details">
                <h3>Name</h3>
                <p className="price">Price</p>
            </div>
            <div className="product-manager">
                <Button btn='acheter' lbl='Acheter' />
                <Button btn='plus' lbl='+' />
            </div>
        </div>
    );
}

export default Product;