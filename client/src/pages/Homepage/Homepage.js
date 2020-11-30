import React from 'react';
import './Homepage.css'
import HeadphonesCard from '../../components/Cards/HeadphonesCard/HeadphonesCard.js'
import StackedCards from '../../components/Cards/StackedCards/StackedCards.js'
import RedWhiteCard from '../../components/Cards/RedWhiteCard/RedWhiteCard.js'
import BlueWhiteCard from '../../components/Cards/BlueWhiteCard/BlueWhiteCard.js'
import FlipCard3D from '../../components/Cards/FlipCard3D/FlipCard3D.js'
import FloatingInput from '../../components/Forms/FloatingInput/FloatingInput';

const Homepage = () => {

    return (
        <div id="home-container">
            {/* <div className="cards">
                <HeadphonesCard />
                <StackedCards />
                <RedWhiteCard />
                <BlueWhiteCard />
                <FlipCard3D />
            </div> */}
            <div>
                <FloatingInput />
            </div>
        </div>
    );
};

export default Homepage;