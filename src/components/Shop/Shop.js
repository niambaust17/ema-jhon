import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () =>
{
    const displayData = fakeData.slice(10, 30);
    const [products, setProduct] = useState(displayData);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>
    {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-8 product-container">
                    {
                        products.map(pd => <Product key={pd.key} handleAddProduct={handleAddProduct} product={pd} />)
                    }
                </div>
                <div className="col-sm-12 col-md-5 col-lg-4 cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;