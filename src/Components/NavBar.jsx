import React from 'react';

const NavBar = (props) => {
    const bgColour = props.lightMode ? "bg-red-300" : "bg-purple-900";

    return (
        <nav>
            <div className={`flex w-full h-[80px] items-center justify-between pl-10 pr-16 fixed top-0 ${bgColour}`}>
                <div className='font-Jacques text-4xl text-black font-medium'>Desmond Foo</div>
                <div className='flex items-center justify-between gap-10 relative'>
                    <div className='text-xl font-Major font-bold'><a href='/light'>Light</a></div>
                    <div className='text-xl font-Major font-bold'><a href='/toggle'>Toggle</a></div>
                    <div className='text-xl font-Major font-bold'><a href='/picture'>Picture</a></div>
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;

