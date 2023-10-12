import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const bgColour = props.lightMode ? "bg-red-300" : "bg-purple-900";

    return (
        <nav className='w-full h-[80px]'>
            <div className={`flex w-full h-[80px] items-center justify-between pl-10 pr-16 fixed top-0 ${bgColour} flex-shrink-0`}>
                <div className='font-Jacques text-4xl text-black font-medium'>Desmond Foo</div>
                <div className='flex items-center justify-between gap-10 relative'>
                    <Link to="/light"><div className='text-xl font-Major font-bold'>Light</div></Link>
                    <Link to="/toggle"><div className='text-xl font-Major font-bold'>Toggle</div></Link>
                    <Link to="/picture"><div className='text-xl font-Major font-bold'>Picture</div></Link>
                    <Link to="/ChessBoard"><div className='text-xl font-Major font-bold'>ChessBoard</div></Link>
                    {/* <Link to="/TryDND"><div className='text-xl font-Major font-bold'>TryDND</div></Link> */}
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;

