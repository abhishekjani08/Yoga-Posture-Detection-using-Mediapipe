import React from "react";
import "./Yog1.css";

const Yog6 = () => {
  return (
    <div className="yogContainer p-3  ">
      <h1 className="text-center my-3">Dolphin  Pose</h1>
      <div className="yogContainerData d-flex gap-5 ">
        <div className="yogInfo gap-5 ">
          <ul className="">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
          </ul>
        </div>
        <div className="yogImg m-auto d-flex justify-content-center align-items-center ">
          <img
            className=""
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
      <div className="yogStartPose my-2 ">
        <button className="btn btn-primary w-20 my-6">Start Pose</button>
      </div>
    </div>
  );
};

export default Yog6;
