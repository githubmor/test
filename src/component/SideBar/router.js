import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About';
import Home from './Home'


export default function Routesy() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={Home}/>
                <Route path="/about" element={About}/>
            </Routes>
        </Router>
    )
}
