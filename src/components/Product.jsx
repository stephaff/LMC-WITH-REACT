import React from "react";
import '../styles/Product.css';
import Button from "./Button";

function Product({ product }){
    return (
        <div className="product">
            <div className="product-image">
                <img src={ product.image } alt="product" />
            </div>
            <div className="product-details">
                <h5>{ product.title }</h5>
                <p className="price">{ product.price } &euro;</p>
            </div>
            <div className="product-manager">
                <Button btn='acheter' lbl='Acheter' />
                <Button btn='plus' lbl='+' />
            </div>
        </div>
    );
}

export default Product;