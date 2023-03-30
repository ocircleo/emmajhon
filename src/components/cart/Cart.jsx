import React from 'react';
import './cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let totalShiping = 0;
    for (const product of cart) {
        total = total + product.price
        totalShiping = totalShiping + product.shipping
    }
    let tax = (total * 7) / 100;
    let grandTotal = total + totalShiping + tax;
    return (
        <>
            <div className='shop-sapn'>
                <div className="cart-container">
                    <h2>Order summery</h2>
                    <p>selected items: {cart.length}</p>
                    <p>total price:{total}</p>
                    <p>total shiping charge: {totalShiping}</p>
                    <p>tax: {tax.toFixed(2)}</p>
                    <h3>Grand Total :{grandTotal.toFixed(2)}</h3>
                    <button className='cart-btn1'>clear cart <i style={{ paddingLeft: '10px' }} className="bi bi-trash"></i></button>
                    <button className='cart-btn2'>order review <i style={{ paddingLeft: '10px', fontSize: '20px' }} className="bi bi-arrow-right "></i> </button>
                </div>
            </div>
        </>
    );
};

export default Cart;