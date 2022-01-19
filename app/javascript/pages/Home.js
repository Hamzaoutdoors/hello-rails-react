import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the greetings page!</h1>
      <p>Please, click on the link below to be properly greeted.</p>
      <Link to="/greetings" className="btn btn-warning mx-3">Click here!</Link>
      <Link to="/v1/greetings" className="btn btn-info mx-3">More detail</Link>
    </div>
  );
}

export default Home;