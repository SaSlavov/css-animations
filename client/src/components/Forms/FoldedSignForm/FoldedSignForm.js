import React, { useRef } from 'react';
import './FoldedSignForm.css'

const FoldedSignForm = () => {
    const foldDiv = useRef()

    return (
        <div className="folded-sing-container">
            <div className="signIn" onClick={() =>foldDiv.current && foldDiv.current.classList.toggle('active')}>Click Here to Sign In</div>
            <div ref={foldDiv} className="fold">
                <form>
                    <input type="text" name="" placeholder="Username"></input>
                    <input type="password" name="" placeholder="Password"></input>
                    <input type="submit" name="" value="Login"></input>
                    <a href="#">Forgot password</a>
                </form>
            </div>
        </div>
    );
};

export default FoldedSignForm;