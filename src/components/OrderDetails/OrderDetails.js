import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OrderDetails.css'
import { faArrowAltCircleRight, faArrowRight, faDeleteLeft, faDrumSteelpan, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderDetails = (props) => {
    const cart = props.cart
    localStorage.setItem('product' ,JSON.stringify(cart))
    return (
        <div>
            <h2>Order Summary </h2>

            <p>Seleted Items: {cart.length}</p>
            <p>Total Price: $ </p>
            <p>Total Shipping Charge: $</p>
            <p></p>
            <div>
                <button className='delete-btn'>
                <p className='buttonText'>Clear Item</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
            <div>
                <button className='review-btn'>
                <p className='buttonText'>Clear Item</p>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;