import { useState } from "react";
import React from "react";
import "./Yog1.css";

const Yog1 = () => {
  const [isStartPose , setIsStartPose] = useState(false)

  function startYoga() {
    setIsStartPose(true);
    fetch("http://localhost:8080/api/mediapipe/yog1", {
      method: "POST",
    }).then((response) => {
      console.log("scripted called sucessfull in the frontend");
    });
  }



  return (
    <div className="yogContainer p-3  ">
      <h1 className="text-center my-3">Warrior Pose</h1>
      <div className="yogContainerData d-flex gap-5 ">
        <div className="yogInfo gap-5 ">
          <ul className="">
            <li>Strengthens your shoulders, arms, legs, ankles and back</li>
            <li>
            Opens yours hips, chest and lungs
            </li>
            <li>Improves focus, balance and stability</li>
            <li>
              Strengthens and tones the entire standing leg, up to the buttocks
            </li>
            <li>Encourages good circulation and respiration</li>
            <li>
            Stretches your arms, legs, shoulders, neck, belly, groins and ankles
            </li>
            <li>Energizes the entire body</li>
          </ul>
        </div>
        <div className="yogImg m-auto d-flex justify-content-center align-items-center ">
          <img
            className=""
            src="https://www.verywellfit.com/thmb/56AayW1tVPCe7jSaIq8GB5xvJg4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-03-3567198-Warrior2-aa285698e49a48e5b9e7cb890ae26bb3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="yogStartPose my-5 ">
        <button  onClick={startYoga} className="btn btn-primary w-20 my-6">Start Pose</button>
      </div>
    </div>
  );
};

export default Yog1;
