import React from 'react';
import { useState , useEffect } from 'react';

import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';


const PictureCard = () => {

    const width = "w-[1000px]";
    const imgLink =["https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                            , "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                            , "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                            , "src/Components/PictureCard/spacee.jpg","src/Components/PictureCard/galaxy.jpg"]
    const [imgPointer, setImgPointer] = useState(0);
    const [CurrentImage, setCurrentImage] = useState(imgLink[imgPointer]);
    

    const handleClick = (PrevOrNext) => {
        if(PrevOrNext === "Prev"){
            if(imgPointer > 0){
                setImgPointer(imgPointer - 1);
            }
        }
        else if (PrevOrNext === "Next"){
            if(imgPointer < (imgLink.length-1)){
                setImgPointer(imgPointer + 1);
            }
        }
        
    }

    useEffect(() => {
        setCurrentImage(imgLink[imgPointer]);
    }, [imgPointer]);


    
    return (
        <div className='w-full h-[884px] flex justify-center items-center bg-gray-800'>
            <div className='w-full justify-evenly flex-row flex items-center'>
                <div onClick={() => handleClick("Prev")}><BsFillArrowLeftSquareFill className='text-5xl'/></div>
                <div className={`w-[1200px] flex justify-center relative`}>
                    <img className={`${width} hover:w-[1200px]`} src={CurrentImage} />
                </div>
                <div onClick={() => handleClick("Next")}><BsFillArrowRightSquareFill className='text-5xl'/></div>
            </div>
        </div>
    );
};

export default PictureCard;
