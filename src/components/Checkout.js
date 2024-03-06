import React from 'react'
import '../components/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import saleimg2 from '../images/sale2.png';
import { useState, useStateValue } from './StateProvider';

export default function Checkout() {
    const[{basket},dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src={saleimg2} alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}
            </div>
         </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}
