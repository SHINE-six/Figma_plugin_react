import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragDrop = () => {
    const[{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
    }));

    const[{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => {
            console.log('drop')
        },
    }));

    return (
        <div>
            <div ref={drag} className='w-10 h-10 bg-red-700'></div>
            <div ref={drop} className='w-20 h-20 bg-orange-400'></div>
            <div className='w-20 h-20 bg-green-400'></div>
            <div className='w-20 h-20 bg-blue-600'></div>
        </div>
    )

}

export default DragDrop;