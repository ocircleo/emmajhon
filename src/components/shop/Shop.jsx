import React, { useEffect, useState } from 'react';
import './shop.css'
import Products from '../products/Products';
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    const handelAddToCart = (para) => {
        const newCart = [...cart, para]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className="products">
                    {products.map(element => <Products key={element.id} product={element} handelAddToCart={handelAddToCart} />)}
                </div>

            </div>
            <div className='shop-sapn'>
                <div className="cart-container">
                    <h2>Order summery</h2>
                    <p>selected items: {cart.length}</p>
                    <p>total price:</p>
                    <p>total shiping charge:</p>
                    <p>tax:</p>
                    <h3>Grand Total :</h3>
                    <button className='cart-btn1'>clear cart <i style={{ paddingLeft: '10px' }} className="bi bi-trash"></i></button>
                    <button className='cart-btn2'>order review <i style={{ paddingLeft: '10px',fontSize:'20px' }} className="bi bi-arrow-right "></i> </button>
                </div>
            </div>

        </div>
    );
};

export default Shop;