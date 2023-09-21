import React, { useRef } from 'react';
import Circle from './Components/Circle';
import { useEffect } from 'react';

const App = () => {
    const ref = useRef(null);
    const width = ref.current ? ref.current.offsetWidth : 0;

    return (
      <div className="bg-zinc-800 w-full h-[884px] justify-center items-center inline-flex">
        <div ref={ref} className="[font-family:'Josefin_Sans-Bold',Helvetica] font-bold text-[#3e3e3e] text-[96px] tracking-[0] leading-[normal] whitespace-nowrap">
            DESMOND FOO
        </div>
        <div className="flex flex-wrap w-[780px] items-center gap-[0px_0px] absolute">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
        </div>
      </div>
    )
}

export default App;