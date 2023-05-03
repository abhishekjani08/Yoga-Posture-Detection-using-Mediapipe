import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbarElement ">
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              YOGA App
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
                <li className="nav-item ">
                  <Link to="/">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </Link>
                </li>
                {/* <Link to="/whats">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    What is Yoga
                  </a>
                </li>
                </Link> */}
                <li className="nav-item">
                  <Link to="/learn">
                    <a className="nav-link active" aria-current="page" href="#">
                      Start Learning
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
