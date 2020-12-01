import React from 'react';
import './GlowingForm.css'

const GlowingForm = () => {
    return (
        <div className="glowing-form-container">
            <h2>Sign in</h2>
            <form>
                <div className="glowing-input-inputBox">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="glowing-input-inputBox">
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="glowing-input-inputBox">
                    <input type="submit"  value="Sign in"></input>
                </div>
                <p>Forgot Password ? <a href="#">Click Here</a></p>
            </form>
        </div>
    );
};

export default GlowingForm;