import React, { useRef, useState, useEffect } from "react";

function App() {

  const [isStartPose , setIsStartPose] = useState(false)
  function startYoga() {
    setIsStartPose(true);
    fetch("http://localhost:8080/api/mediapipe/yog1", {
      method: "POST",
    }).then((response) => {
      console.log("scripted called sucessfull in the frontend");
    });
  }
  function startYoga1() {
    setIsStartPose(true);
    fetch("http://localhost:8080/api/mediapipe/yog2", {
      method: "POST",
    }).then((response) => {
      console.log("scripted called sucessfull in the frontend");
    });
  }
  function startYoga2() {
    setIsStartPose(true);
    fetch("http://localhost:8080/api/mediapipe/yog3", {
      method: "POST",
    }).then((response) => {
      console.log("scripted called sucessfull in the frontend");
    });
  }

  function stopPose() {
    setIsStartPose(false);
    clearInterval(interval);
  }

  // if (isStartPose) {
  //   return (
  //     <div className="yoga-container">
  //       <div></div>
  //       <button onClick={stopPose} className="secondary-btn">
  //         Stop Pose
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="app">
      {/* <div className="navbarElement ">
        <nav className="navbar navbar-expand-lg bg-primary bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Types of Yogas
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div> */}

      <button onClick={startYoga} className="btn m-5 btn-primary">
        Start Pose -1
      </button>
      <button onClick={startYoga1} className="btn m-5 btn-primary">
        Start Pose -2
      </button>
      <button onClick={startYoga2} className="btn m-5 btn-primary">
        Start Pose -3
      </button>
    </div>
  );
  // }
}

export default App;
