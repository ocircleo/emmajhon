import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from '../products/Products'
import Cart from '../cart/Cart';
import { AddToDb, Con, GetShoppingCart } from '../utilities/LocalDb.jsx'
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])
    useEffect(() => {
        const addedCart = []
        const localCart = GetShoppingCart();
        for (const id in localCart) {
            const savedProduct = products.find(element => element.id === id);
            if (savedProduct) {
                const quantity = localCart[id];
                savedProduct.quantity = quantity;
                addedCart.push(savedProduct)
            }

        }
        console.log(addedCart)
        setCart(addedCart)
    }, [products])

    const handelAddToCart = (para) => {
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