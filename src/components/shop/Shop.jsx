import React, { useEffect, useState } from 'react';
import './shop.css'
import Products from '../products/Products';
import Cart from '../cart/Cart';
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
            <Cart cart={cart} />

        </div>
    );
};

export default Shop;