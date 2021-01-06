import React from 'react';
import { NavLink } from 'react-router-dom';
import LiquidButton from '../Buttons/LiquidButton/LiquidButton';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="links-container">
                <NavLink className="buttons-link" to="/buttons">
                    <LiquidButton name="buttons"/>
                </NavLink>
                <NavLink className="buttons-link" to="/cards">
                    <LiquidButton name="cards"/>
                </NavLink>
                <NavLink className="buttons-link" to="/forms">
                    <LiquidButton name="forms"/>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;