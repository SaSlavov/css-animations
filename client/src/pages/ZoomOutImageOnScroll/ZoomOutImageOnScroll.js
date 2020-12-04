import React, { useEffect, useRef } from 'react';
import './ZoomOutImageOnScroll.css'


const ZoomOutImageOnScroll = () => {
    const background = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () =>{
            background.current.style.backgroundSize = 160 - +window.pageYOffset / 18 + '%';
            background.current.style.opacity = 1 - +window.pageYOffset / 900;
        });
    }, [])


    return (
        <div >
            <div ref={background} id="zoom-in-scroll-header" ></div>
            <section id="content-container">
                <h2>Background size change on scroll</h2>
                <p>
                    Ea ;irure qui veniam in. Irure Lorem adipisicing elit est ex magna. Laborum anim eiusmod do id esse proident enim veniam. Do excepteur sint do dolor.
                    Minim sit sit Lorem cillum consectetur qui eu incididunt adipisicing. Sint in ipsum est amet ipsum minim velit voluptate veniam minim magna. Lorem sit ut eiusmod dolor.
                    Ipsum aliquip magna sit nisi labore quis nostrud veniam ad culpa excepteur aliquip est. Consequat est pariatur proident et. Tempor ea irure culpa eiusmod qui nostrud dolore cupidatat pariatur enim. Quis velit exercitation non amet exercitation dolore. Lorem non consequat tempor culpa culpa nostrud dolore adipisicing proident adipisicing excepteur in. Esse Lorem exercitation ad sunt nisi officia nostrud quis duis. Esse est cillum proident non tempor officia.
                    Ea irure qui veniam in. Irure Lorem adipisicing elit est ex magna. Laborum anim eiusmod do id esse proident enim veniam. Do excepteur sint do dolor.
                    Minim sit sit Lorem cillum consectetur qui eu incididunt adipisicing. Sint in ipsum est amet ipsum minim velit voluptate veniam minim magna. Lorem sit ut eiusmod dolor.
                    Ipsum aliquip magna sit nisi labore quis nostrud veniam ad culpa excepteur aliquip est. Consequat est pariatur proident et. Tempor ea irure culpa eiusmod qui nostrud dolore cupidatat pariatur enim. Quis velit exercitation non amet exercitation dolore. Lorem non consequat tempor culpa culpa nostrud dolore adipisicing proident adipisicing excepteur in. Esse Lorem exercitation ad sunt nisi officia nostrud quis duis. Esse est cillum proident non tempor officia.
                    Ea irure qui veniam in. Irure Lorem adipisicing elit est ex magna. Laborum anim eiusmod do id esse proident enim veniam. Do excepteur sint do dolor.
                    Minim sit sit Lorem cillum consectetur qui eu incididunt adipisicing. Sint in ipsum est amet ipsum minim velit voluptate veniam minim magna. Lorem sit ut eiusmod dolor.
                    Ipsum aliquip magna sit nisi labore quis nostrud veniam ad culpa excepteur aliquip est. Consequat est pariatur proident et. Tempor ea irure culpa eiusmod qui nostrud dolore cupidatat pariatur enim. Quis velit exercitation non amet exercitation dolore. Lorem non consequat tempor culpa culpa nostrud dolore adipisicing proident adipisicing excepteur in. Esse Lorem exercitation ad sunt nisi officia nostrud quis duis. Esse est cillum proident non tempor officia.
                    Ea irure qui veniam in. Irure Lorem adipisicing elit est ex magna. Laborum anim eiusmod do id esse proident enim veniam. Do excepteur sint do dolor.
                    Minim sit sit Lorem cillum consectetur qui eu incididunt adipisicing. Sint in ipsum est amet ipsum minim velit voluptate veniam minim magna. Lorem sit ut eiusmod dolor.
                    Ipsum aliquip magna sit nisi labore quis nostrud veniam ad culpa excepteur aliquip est. Consequat est pariatur proident et. Tempor ea irure culpa eiusmod qui nostrud dolore cupidatat pariatur enim. Quis velit exercitation non amet exercitation dolore. Lorem non consequat tempor culpa culpa nostrud dolore adipisicing proident adipisicing excepteur in. Esse Lorem exercitation ad sunt nisi officia nostrud quis duis. Esse est cillum proident non tempor officia.
                </p>
            </section>
        </div>

    );
};

export default ZoomOutImageOnScroll;