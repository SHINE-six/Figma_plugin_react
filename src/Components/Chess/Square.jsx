import React, { useState } from 'react';
import Knight from './Knight';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constant';


const Square = (props) => {
    const X = props.squareID % 8;
    const Y = Math.floor(props.squareID / 8);
    const [knightX, knightY] = props.knightPosition;
    const isKnightHere = X === knightX && Y === knightY;
    const piece = isKnightHere ? <Knight /> : '‎';

    let fill ='white';
    if (X % 2 === 0 && Y % 2 === 0) {
        fill = 'black';
    }
    else if (X % 2 === 1 && Y % 2 === 1) {
        fill = 'black';
    }
    else {
        fill = 'white';
    }
    const ChessPieceColor = (fill === 'black') ? 'white' : 'black';

    const ClassName = `bg-${fill} text-${ChessPieceColor} text-5xl flex justify-center items-center hover:bg-teal-300`;

    const handleClick= () => {
        props.handleClick(X,Y);
    }

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => props.handleClick(X,Y),
    }));


    return (
        <div ref={drop} onClick={handleClick} className={ClassName}>
            {piece}
        </div>
    )

}

export default Square;