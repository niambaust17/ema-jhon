import React from 'react';
import './Cart.css'
const Cart = (props) =>
{
    const totalPrice = props.cart.reduce((total, pd) => total + pd.price, 0);
    let shipping = 0;
    if (totalPrice > 500)
    {
        shipping = 0;
    }
    else
    {
        shipping = totalPrice * .05;
    }
    const fixedNumber = num =>
    {
        return Number(num.toFixed(2));
    }
    return (
        <div className="cart-container">
            <div className="row">
                <div className="col-md-11">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Order Summary</h4>
                            <p className="card-text">Items ordered: {props.cart.length}</p>
                            <pre>
                                <p>Items:               ${fixedNumber(totalPrice)}</p>
                                <p>Shipping Handling:   ${fixedNumber(shipping)}</p>
                                <p>Total before Tax:    ${fixedNumber((totalPrice + shipping))}</p>
                                <p>Tax:                 ${fixedNumber((totalPrice + shipping) * .1)}</p>
                                <p>Order Total:         ${fixedNumber((totalPrice + shipping) + ((totalPrice + shipping) * .1))}</p>
                            </pre>
                        </div>
                        <div className="card-footer">
                            <button>Review your order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;