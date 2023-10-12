import React, { useEffect, useState } from 'react';
import Square from './Square';
import { DndContext, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { KnightRule } from './MovementRule';
import { AnnouncementRule } from './AnnouncementRule';


const ChessBoard = () => {
    const [knightPosition, setKnightPosition] = useState([0, 0]);
    const [announcement, setAnnouncement] = useState("‎");


    const handleClick = (x, y) => {
        if (KnightRule(x, y, knightPosition) == true){
            setKnightPosition([x, y]);
            setAnnouncement(AnnouncementRule(x,y));
        }
        else {
            setAnnouncement("Invalid Move");
        }
    }

    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(<Square handleClick={handleClick} 
                                            key={i} 
                                            squareID={i} 
                                            knightPosition={knightPosition} 
                            />)
    };


    return (
        <DndProvider backend={HTML5Backend}>
            <div className='w-full h-full bg-green-300 flex flex-col items-center justify-center gap-2'>
                <div className='text-3xl font-bold'>{announcement}</div>
                <div className='grid grid-cols-8 grid-rows-8 w-[500px] h-[500px]'>
                    {squares}
                </div>
            </div>
        </DndProvider>
    );
}

export default ChessBoard;