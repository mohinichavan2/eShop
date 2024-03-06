import React from 'react'
import '../components/CheckoutProduct.css';
import { useStateValue } from './StateProvider';
export default function CheckoutProduct({id , title , image , rating , price}) {
  const[{basket} , dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type : "REMOVE_FROM_BASKET" ,
      id : id,
    })
  }
  return (
    <div className="checkout__product">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="product__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
            {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
            </div>
            <button onClick={removeFromBasket}>Remove Item</button>
        </div>
    
    
    </div>
  )
}
