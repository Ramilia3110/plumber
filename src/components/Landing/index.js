import React from "react";
import landing from "./../../assets/landing.png";
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="text-content">
        <h2>You enjoy, We work</h2>
        <p className="text">24/7 *** Fast *** Affordable</p>
        <button>Call now: +555648753</button>
      </div>
      <div className="landing-img">
        <img src={landing} />
      </div>
    </div>
  );
};

export default Landing;
