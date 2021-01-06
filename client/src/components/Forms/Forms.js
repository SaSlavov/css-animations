import React from 'react';
import FloatingInput from './FloatingInput/FloatingInput';
import FoldedSignForm from './FoldedSignForm/FoldedSignForm';
import GlowingForm from './GlowingForm/GlowingForm';

const Forms = () => {
    return (
        <div id="forms-container">
            <FloatingInput />
            <FoldedSignForm />
            <GlowingForm />
        </div>
    );
};

export default Forms;