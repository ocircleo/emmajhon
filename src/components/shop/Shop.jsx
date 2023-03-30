import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../products/Products'
import Cart from '../cart/Cart';
import { AddToDb, Con } from '../utilities/LocalDb.jsx'
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    useEffect(() => {
        const localCart = localStorage.getItem('shoping-cart')
        console.log(localCart)
    },[])
    const handelAddToCart = (para, id) => {
        const newCart = [...cart, para]
        setCart(newCart)
        AddToDb(para.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className="products">
                    {products.map(element => <Product key={element.id} product={element} handelAddToCart={handelAddToCart} />)}
                </div>
            </div>
            <Cart cart={cart} />

        </div>
    );
};

export default Shop;