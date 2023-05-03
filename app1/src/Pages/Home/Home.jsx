import React from "react";
import "./Home.css";
// import {Yoga_home}  from "../../assets/Yoga_home.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer d-flex p-3">
      <div className="homeInfo   d-flex flex-column p-4 my-auto gap-3  ">
        <div className="homeinfo_data d-flex flex-column  justify-content-center gap-3   ">
          <h1 className="homeInfo_heading">Yoga App </h1>
          <h4 className="homeInfo_subheading">
            Revitalize your mind, body, and soul
          </h4>
        </div>
        <Link to="/learn">
          <div className="homeinfo_button">
            <button className="btn btn-primary">Start Learning</button>
          </div>
        </Link>
      </div>
      {/* <div className="homeImg flex-grow-1  ">
        <img className="" src="./yoga_home.png" alt="" />
      </div> */}
    </div>
  );
};

export default Home;
