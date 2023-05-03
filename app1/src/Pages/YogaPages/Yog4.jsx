

import React from "react";
import { useState } from "react";
import "./Yog1.css";
import img2 from "../../assets/yoga15.jpg";

const Yog4 = () => {
  const [isStartPose , setIsStartPose] = useState(false)

  function startYoga() {
    setIsStartPose(true);
    fetch("http://localhost:8080/api/mediapipe/yog4", {
      method: "POST",
    }).then((response) => {
      console.log("scripted called sucessfull in the frontend");
    });
  }
  
  return (
    <div className="yogContainer p-3  ">
      <h1 className="text-center my-3">Side Plank Pose</h1>
      <div className="yogContainerData d-flex gap-5 ">
        <div className="yogInfo gap-5 ">
          <ul className="">
            <li>Strengthens three muscle groups at once</li>
            <li>Protects your spine</li>
            <li>Strengthens your core without stressing your back.</li>
            <li>Improves your balance</li>
            <li>Reduces your risk of a back injury.</li>
            
          </ul>
        </div>
        <div className="yogImg m-auto d-flex justify-content-center align-items-center ">
          <img
            className="" src={img2}
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 yogStartPose my-2 ">
      <button  onClick={startYoga} className="btn btn-primary w-20 my-6">Start Pose</button>
      </div>
    </div>
  );
};

export default Yog4;
