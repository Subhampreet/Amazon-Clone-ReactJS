import React from 'react';
import './Checkout.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Subtotal from './Subtotal';


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" />

                <div>
                    <h2 className="checkout-title"><ShoppingCartOutlinedIcon className="checkout-basket-icon" />Your Shopping Cart </h2>
                </div>
            </div>


            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
