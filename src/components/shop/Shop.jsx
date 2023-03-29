import React, { useEffect, useState } from 'react';
import './shop.css'
import Products from '../products/Products';
const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('../../../public/products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className="products">
                        {products.map(element => <Products key={element.id} product={element} />)}
                </div>
            
            </div>
            <div className="cart-container"></div>
        </div>
    );
};

export default Shop;