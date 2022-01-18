import React from 'react'
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import Home from '../pages/Home'
import Greeting from '../pages/Greeting'

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/greetings" element={<Greeting />}/>
                </Routes>
            </BrowserRouter>    
        </Provider>
    );
}

export default App

