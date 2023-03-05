import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="mt-20 flex">
        <button className="btn mt-10 ml-10">
          <a href="/chatroom">go to chat</a>
        </button>
        <button className="btn mt-10 ml-10">
          <a href="/login">go to login</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
