import React from 'react';
import './HeadphonesCard.css'
import headphones from '../../../images/headphones.png'

const HeadphonesCard = () => {
    return (
        <div className="card">
            <div className="img-box">
                <img src={headphones} alt="headphones" />
            </div>
            <div className="contentBx">
                <h3>Wireless Headphones</h3>
                <h2 className="price">$40.<small>99</small></h2>
                <a className="buy" href="#">Buy Now</a>
            </div>
        </div>
    );
};

export default HeadphonesCard;