import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to the greetings page!</h1>
      <p>Please, click on the link below to be properly greeted.</p>
      <Link to="/greetings">Click here!</Link>
    </>
  );
}

export default Home;