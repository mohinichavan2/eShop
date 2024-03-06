import React from 'react'
import '../components/Product.css';
import { useStateValue } from './StateProvider';

export default function ({id,title,price,rating,image}) {
    
    const [state,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                image : image,
                price : price,
                rating : rating
            },
        });
    };

    return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">${price}</p>
                <p className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </p>
            </div>
            <img src={image} alt="product-image" />
            <button onClick={addToBasket}> Add to basket</button>
        </div>
    </div>
  )
}
