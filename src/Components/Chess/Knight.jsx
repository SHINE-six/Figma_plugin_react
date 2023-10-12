import React from 'react';
import { ItemTypes } from './Constant';
import { useDrag } from 'react-dnd';


const Knight = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
    }));

    return (
        <div ref={drag} className={`cursor-move`}>
            ♘
        </div>
    );
};

export default Knight;