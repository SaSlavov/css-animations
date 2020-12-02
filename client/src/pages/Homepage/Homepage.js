import React from 'react';
import './Homepage.css'
import HeadphonesCard from '../../components/Cards/HeadphonesCard/HeadphonesCard.js'
import StackedCards from '../../components/Cards/StackedCards/StackedCards.js'
import RedWhiteCard from '../../components/Cards/RedWhiteCard/RedWhiteCard.js'
import BlueWhiteCard from '../../components/Cards/BlueWhiteCard/BlueWhiteCard.js'
import FlipCard3D from '../../components/Cards/FlipCard3D/FlipCard3D.js'
import FloatingInput from '../../components/Forms/FloatingInput/FloatingInput';
import FoldedSignForm from '../../components/Forms/FoldedSignForm/FoldedSignForm';
import GlowingForm from '../../components/Forms/GlowingForm/GlowingForm';
import SnakeBorder from '../../components/Buttons/SnakeBorder/SnakeBorder';
import LiquidButton from '../../components/Buttons/LiquidButton/LiquidButton';

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
            {/* <div id="forms-container">
                <FloatingInput />
                <FoldedSignForm />
                <GlowingForm />
            </div> */}
            <div>
                <SnakeBorder />
                <LiquidButton />
            </div>
        </div>
    );
};

export default Homepage;