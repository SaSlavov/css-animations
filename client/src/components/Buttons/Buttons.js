import React from 'react';
import BorderShrinkButton from './BorderShrinkButton/BorderShrinkButton';
import FillUpButton from './FillUpButton/FillUpButton';
import Flip3DButton from './Flip3DButton/Flip3DButton';
import GlowingButton from './GlowingButton/GlowingButton';
import HorizontalRotateButton from './HorizontalRotateButton/HorizontalRotateButton';
import LiquidButton from './LiquidButton/LiquidButton';
import NeonButton from './NeonButton/NeonButton';
import SnakeBorder from './SnakeBorder/SnakeBorder';

const Buttons = () => {
    return (
        <div>
            <SnakeBorder />
            <Flip3DButton />
            <NeonButton />
            <GlowingButton />
            <BorderShrinkButton />
            <FillUpButton />
            <HorizontalRotateButton />
        </div>
    );
};

export default Buttons;