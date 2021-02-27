import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) =>
{
    const { name, seller, img, price, stock } = props.product;
    return (
        <div className="row single-product px-3">
            <div className="col-sm-12 col-md-5 col-lg-3">
                <img src={img} alt="" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-9">
                <p>{name}</p>
                <p>by {seller}</p>
                <h4>$ {price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;