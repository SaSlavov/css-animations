import React from 'react';
import './StackedCards.css'

const StackedCards = () => {
    return (
        <div id="stacked-cards-container">
            <div className="stacked-card" style={{"--i": -1}}>
                <div className="stacked-card-content" style={{"--j": 1}}>
                    <h2>Card 1</h2>
                    <p>Deserunt nulla mollit laboris aute consectetur voluptate minim reprehenderit anim enim ut. Id incididunt cupidatat minim adipisicing anim voluptate. Aliquip labore do dolor cupidatat eiusmod Lorem consequat adipisicing</p>
                </div>
            </div>
            <div className="stacked-card" style={{"--i": 0}}>
                <div className="stacked-card-content" style={{"--j": 2}}>
                    <h2>Card 2</h2>
                    <p>Deserunt nulla mollit laboris aute consectetur voluptate minim reprehenderit anim enim ut. Id incididunt cupidatat minim adipisicing anim voluptate. Aliquip labore do dolor cupidatat eiusmod Lorem consequat adipisicing</p>
                </div>
            </div>
        </div>
    );
};

export default StackedCards;