import React from 'react';
import BlueWhiteCard from '../../components/BlueWhiteCard/BlueWhiteCard';
import FlipCard3D from '../../components/FlipCard3D/FlipCard3D';
import HeadphonesCard from '../../components/HeadphonesCard/HeadphonesCard';
import RedWhiteCard from '../../components/RedWhiteCard/RedWhiteCard';
import StackedCards from '../../components/StackedCards/StackedCards';
import './Homepage.css'

const Homepage = () => {

    return (
        <div id="home-container">
            <HeadphonesCard />
            <StackedCards />
            <RedWhiteCard />
            <BlueWhiteCard />
            <FlipCard3D />
            
        </div>
    );
};

export default Homepage;