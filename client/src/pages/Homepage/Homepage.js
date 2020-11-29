import React from 'react';
import HeadphonesCard from '../../components/HeadphonesCard/HeadphonesCard';
import StackedCards from '../../components/StackedCards/StackedCards';
import './Homepage.css'

const Homepage = () => {
    
    return (
        <div id="home-container">
            <HeadphonesCard />
            <StackedCards />
        </div>
    );
};

export default Homepage;