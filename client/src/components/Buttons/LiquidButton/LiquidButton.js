import React from 'react';
import './LiquidButton.css'

const LiquidButton = ({name}) => {
    return (
        <div className="liquid-button-container">
            <a className="liquid-button-a" href="#">
                <span>{name}</span>
                <div className="liquid"></div>
            </a>
        </div>
    );
};

export default LiquidButton;