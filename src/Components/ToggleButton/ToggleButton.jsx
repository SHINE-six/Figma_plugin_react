import React from 'react';
import { useState } from 'react';
import Button from './Button';

const ToggleButton = () => {
    const [LightMode, setLightMode] = useState(false);

    const bgColour = LightMode ? "bg-white" : "bg-gray-800";
    const handleClick = () => {
        setLightMode(!LightMode);
    }

    return (
        <div 
            className={`w-full h-[884px] ${bgColour} justify-center items-center inline-flex`}
        >
            <Button handleClick={handleClick}/>
        </div>

    );
}

export default ToggleButton;