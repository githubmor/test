import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Rule from './Pages/Rule';
import Exchange from './Pages/Exchange'
import './routes.css'

export default function Routess() {
    return(
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/rule" element={<Rule/>}/>
            <Route path="/exchange" element={<Exchange/>}/>
        </Routes>
    )
}