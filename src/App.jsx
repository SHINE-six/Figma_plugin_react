import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import CaptivatingLight from './Components/CaptivatingLight/CaptivatingLight';
import ToggleButton from './Components/ToggleButton/ToggleButton';
import PictureCard from './Components/PictureCard/PictureCard';

import { useState } from 'react';


const App = () => {
    const [lightMode, setLightMode] = useState(false);

    const handleClick = () => {
        setLightMode(!lightMode);
    }

    return (
        <BrowserRouter>
            <NavBar lightMode={lightMode}/>
            <Routes>
                <Route path="/light" element={<CaptivatingLight />} />
                <Route path="/toggle" element={<ToggleButton handleClick={handleClick}/>}/>
                <Route path="/picture" element={<PictureCard />} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default App;