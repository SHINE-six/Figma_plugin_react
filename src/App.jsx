import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import CaptivatingLight from './Components/CaptivatingLight/CaptivatingLight';
import ToggleButton from './Components/ToggleButton/ToggleButton';
import PictureCard from './Components/PictureCard/PictureCard';
import ChessBoard from './Components/Chess/ChessBoard';
import TryDND from './Components/TryDND/TryDND';

import { useState } from 'react';


const App = () => {
    const [lightMode, setLightMode] = useState(false);

    const handleClick = () => {
        setLightMode(!lightMode);
    }

    return (
        <BrowserRouter >
            <div className="flex flex-col w-screen h-screen">
            <NavBar lightMode={lightMode}/>
            <Routes>
                <Route path="/light" element={<CaptivatingLight />} />
                <Route path="/toggle" element={<ToggleButton handleClick={handleClick}/>}/>
                <Route path="/picture" element={<PictureCard />} />
                <Route path="/ChessBoard" element={<ChessBoard />} />
                <Route path="/TryDND" element={<TryDND />} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;