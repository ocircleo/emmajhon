import React from 'react';
import './products.css'
const Products = (props) => {
    let { id, name, img, price, ratings, seller } = props.product
    return (
        <div className='card'>
            <img src={img} alt="produts could not be loaded" />
            <div className="product-detaill">
                <div>
                    <h2>{name}</h2>
                    <h3>price ${price}</h3>
                </div>
                <div>
                    <p>Manufracture {seller}</p>
                    <p>Ratings {ratings} star</p>
                </div>

            </div>

            <button id={id}>Add to cart</button>
        </div>
    );
};

export default Products;