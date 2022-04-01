import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OrderDetails.css'
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromDb } from '../../utilities/fakedb';

const OrderDetails = (props) => {
    const {cart} = props;
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity+product.quantity;
        total = total+ product.price*product.quantity;
        shipping = shipping+ product.shipping;
    }
    const tex = total*0.1
    const totalPrice = total+ shipping + parseFloat(tex);


    return (
        <div className='cart'>
            <div className='order-details'>
                <h2>Order Summary </h2>
                <p>Seleted Items: {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <h4>Grand Total: ${totalPrice}</h4>
                <p></p>
            </div>
            <div>
                <button onClick={()=> removeFromDb(console.log(cart[0]))} className='delete-btn'>
                <p className='buttonText'>Clear Item</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
            <div>
                <button className='review-btn'>
                <p className='buttonText'>Review Items</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;