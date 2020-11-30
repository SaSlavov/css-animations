import React from 'react';
import './FloatingInput.css'

const FloatingInput = () => {
    return (
        <div className="floating-input-container">
            <h2>Sign in</h2>
            <form>
                <div className="floating-input-inputBox">
                    <input type="text" required="required"></input>
                    <span>Username</span>
                </div>
                <div className="floating-input-inputBox">
                    <input type="password" required="required"></input>
                    <span>Password</span>
                </div>
                <div className="floating-input-inputBox">
                    <input type="submit" required="required" value="Sign in"></input>
                </div>

            </form>
        </div>
    );
};

export default FloatingInput;