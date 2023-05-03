import React from "react";
import "./Yog1.css";
import yoga20 from "../../assets/yoga20.jpg";
import { Link } from "react-router-dom";

const Yog4 = () => {
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
      <h1 className="text-center my-3">Tree Pose</h1>
      <div className="yogContainerData d-flex gap-5 ">
        <div className="yogInfo gap-5 ">
          <ul className="">
            <li>Improves balance and stability in the legs </li>
            <li>
              On a metaphysical level, helps one to achieve balance in   other
              aspects of life
            </li>
            <li>Strengthens the ligaments and tendon of the feet</li>
            <li>
              Strengthens and tones the entire standing leg, up to the buttocks
            </li>
            <li>Assists the body in establishing pelvic stability</li>
            <li>
              Strengthen the bones of the hips and legs due to the
              weight-bearing nature of the pose
            </li>
            <li>Builds self-confidence and esteem</li>
          </ul>
        </div>
        <div className="yogImg m-auto d-flex justify-content-center align-items-center ">
          <img className="" src={yoga20} alt="" style={{ width: "40%" }} />
        </div>
      </div>
      {/* <Link to=""> */}
        <div className="yogStartPose my-2 ">
          <button onClick={startYoga} className="btn btn-primary w-20 my-6">Start Pose</button>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Yog4;
