import React from 'react'
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import Home from '../pages/Home'
import Greeting from '../pages/Greeting'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/greetings" element={<Greeting />} />
                </Routes>
            </Router>    
        </Provider>
    );
}
export default App;

