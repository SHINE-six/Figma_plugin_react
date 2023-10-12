import React from 'react';
import { useState } from 'react';
import Button from './Button';

const ToggleButton = (props) => {
    const [LightMode, setLightMode] = useState(false);

    const bgColour = LightMode ? "bg-slate-200" : "bg-gray-800";
    const handleClick = () => {
        setLightMode(!LightMode);
        props.handleClick();
    }

    return (
        <div 
            className={`w-full h-full ${bgColour} justify-center items-center inline-flex`}
        >
            <Button handleClick={handleClick}/>
        </div>

    );
}

export default ToggleButton;