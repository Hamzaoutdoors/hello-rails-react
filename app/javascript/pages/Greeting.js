import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getGreetings } from '../redux/greetings/greetings'


const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greeting);

    return (
        <div className="container">
            <Link to="/" className="btn btn-dark">Go Back home</Link>
            <p className="text-center">Press the button below to have a random greeting</p>
            <button type="button" onClick={() => dispatch(getGreetings())} className="btn btn-primary">be greeted</button>
            <h1 className="text-center mt-3 display-1">{greeting.greeting}</h1>
        </div>
    )
}

export default Greeting;
