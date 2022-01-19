import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome, you deserve to be greeted!</h1>
      <p>Please, click on the button below.</p>
      <Link to="/greetings" className="btn btn-warning mx-3">Click here!</Link>
      <Link to="/v1/greetings" className="btn btn-info mx-3">More detail</Link>
    </div>
  );
}

export default Home;