import React from 'react';
import './products.css'
const Product = (props) => {
    let { id, name, img, price, ratings, seller } = props.product
    const handelAddToCart = props.handelAddToCart
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

            <button id={id} onClick={()=>handelAddToCart(props.product)}>Add to cart <i style={{paddingLeft:'10px'}} className="bi bi-cart-plus-fill"></i></button>
        </div>
    );
};

export default Product;