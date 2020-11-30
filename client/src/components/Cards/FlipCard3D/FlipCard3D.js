import React from 'react';
import './FlipCard3D.css'
import flower from '../../../images/pexels-kevin-christian-5675085.jpg'

const FlipCard3D = () => {
    return (
        <div className="flip-card-3d">
            <div className="flip-card-box">
                <div className="flip-card-imageBox">
                    <img src={flower}></img>
                </div>
                <div className="flip-card-content">
                    <div>
                        <h2>Title</h2>
                        <p>Adipisicing id minim non deserunt eiusmod. Ad ullamco excepteur do cupidatat eiusmod adipisicing enim cillum cupidatat cupidatat. Anim incididunt minim consectetur est dolor fugiat quis do culpa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard3D;