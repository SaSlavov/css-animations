import React from 'react';
import './Flip3DButton.css'

const Flip3DButton = () => {
    return (
        <a className="flip-3d-button">
            <span className="front">Click</span>
            <span className="center"></span>
            <span className="back">Here</span>
        </a>
    );
};

export default Flip3DButton;