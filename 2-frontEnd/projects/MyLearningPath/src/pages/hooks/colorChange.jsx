import React, { useState } from "react";

export function ColorChange() {
    const [color, setColor] = useState('#ddb900');
    const secStyle = { 
        backgroundColor: color,
        transition: 'background-color 0.5s ease-in-out'
    };

    return (
        <section className='color-change'>
            <h2>Color Change</h2>
            <p>Click on a button to change the color of the box below.</p>
            <div style={secStyle} className='color-change-box'>
                <p>The current color is: {color}</p>
                <div className='color-change-btns'>
                    <button className='btn' onClick={() => setColor('#30A338')}>Green</button>
                    <button className='btn' onClick={() => setColor('#3E46A3')}>Blue</button>
                    <button className='btn' onClick={() => setColor('#A12D16')}>Red</button>
                    <button className='btn' onClick={() => setColor('#ddb900')}>Yellow</button>
                </div>
            </div>
        </section>
    )
}
