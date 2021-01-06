import React from 'react';
import BlueWhiteCard from './BlueWhiteCard/BlueWhiteCard';
import FlipCard3D from './FlipCard3D/FlipCard3D';
import HeadphonesCard from './HeadphonesCard/HeadphonesCard';
import RedWhiteCard from './RedWhiteCard/RedWhiteCard';
import StackedCards from './StackedCards/StackedCards';


const Cards = () => {
    return (
        <div className="cards" >
            <HeadphonesCard />
            <StackedCards />
            <RedWhiteCard />
            <BlueWhiteCard />
            <FlipCard3D />
        </div>
    );
};

export default Cards;