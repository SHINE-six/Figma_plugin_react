import React from 'react';
import { useState } from 'react';

const Button = (props) => {
    const [ButtonLightMode, setButtonLightMode] = useState(false);

    const bgColour = ButtonLightMode ? "bg-gradient-to-r from-amber-200 to-amber-200/30" : "bg-gradient-to-l from-blue-500";

    const handleClick = () => {
        setButtonLightMode(!ButtonLightMode);
        props.handleClick();
    }

    const buttonStyle = `w-[267px] rounded-full ${bgColour} flex items-center justify-between px-[11px] py-[8px] relative ease-linear duration-300}`

    const brightStar = `absolute h-[13px] w-[13px] brightness-200 blur-sm rounded-full`
    const brightStar_Hover = `hover:bg-white hover:h-[13px] hover:w-[13px]`
    return (
        <div className={buttonStyle}
            onClick={handleClick}>
            {!ButtonLightMode && 
                <>
                    <img src="src\Components\ToggleButton\star.svg" alt="" />
                    <img src="src\Components\ToggleButton\moon.svg" className='hover:animate-spin' alt="" />
                    <div className={`left-[7px] top-[63px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[21px] top-[27px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[23px] top-[85px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[89px] top-[93px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[63px] top-[55px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[34px] top-[8px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[80px] top-[15px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[112px] top-[35px] ${brightStar} ${brightStar_Hover}`}></div>
                    <div className={`left-[124px] top-[82px] ${brightStar} ${brightStar_Hover}`}></div>
                </>
            }
            {ButtonLightMode && 
                <>
                    <img src="src\Components\ToggleButton\sun.svg" alt="" />
                    <img src="src\Components\ToggleButton\cloud.svg" alt="" />
                </>
            }
            
        </div>
    );
};

export default Button;
