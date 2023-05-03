import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import img1 from "../../assets/yoga12.jpg";
import img2 from "../../assets/yoga15.jpg";
import img3 from "../../assets/yoga19.jpg";
import img4 from "../../assets/yoga20.jpg";
import img5 from "../../assets/yoga25.jpg";
import img6 from "../../assets/yoga232.png";
import img7 from "../../assets/yoga9.jpg";
import "./Learn.css";

const Learn = () => {
  return (
    <div className="learnContainer gap-3">
      <div className="grid ">
        <div className="row d-flex justify-content-around">
          <Card className="p-3 m-3 col-md-4 " style={{ maxWidth: "20rem" }}>
            <Card.Img variant="top" src={img1} className="object-fit-cover" />
            <Card.Body>
              <Card.Title>Warrior Pose</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog1">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3  col-md-4  "
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          >
            <Card.Img
              variant="top"
              className="mx-auto"
              src={img5}
              style={{ maxWidth: "12rem", alignItems: "center" }}
            />
            <Card.Body>
              <Card.Title>T Pose</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog2">
                <button className="btn btn-primary mx-auto flex align-items-center justify-content-center ">
                  Start Pose
                </button>
              </Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3  col-md-4 "
            style={{ maxWidth: "20rem", maxHeight: "30rem" }}
          >
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Tree Pose</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog3">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="row d-flex justify-content-around">
          <Card
            className="p-3 m-3 col-md-4 "
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          >
            <Card.Img
              variant="top"
              style={{ maxWidth: "12rem" }}
              className="w-[80%] mx-auto  object-fit-cover"
              src={img2}
            />
            <Card.Body>
              <Card.Title>Side Plank</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog4">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>

          <Card
            className="p-3 m-3 col-md-4 "
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          >
            <Card.Img
              className="mx-auto"
              style={{ maxWidth: "12rem" }}
              variant="top"
              src={img6}
            />
            <Card.Body>
              <Card.Title>Dolphin Pose</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog5">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>

          <Card
            className="p-3 m-3 col-md-4 "
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          >
            <Card.Img  style={{ maxWidth: "16rem" }} className="mx-auto" variant="top" src={img7} />
            <Card.Body>
              <Card.Title>Downward Dog Pose</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Link to="/learn/yog6">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        {/* <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Warrior Pose</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to="/learn/yog4">
                <button className="btn btn-primary">Start Pose</button>
              </Link>
            </Card.Body>
          </Card> */}
      </div>
    </div>
  );
};

export default Learn;
