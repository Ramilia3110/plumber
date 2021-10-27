import React from "react";
import affordable from "./../../assets/icons/affordable.svg";
import fast from "./../../assets/icons/fast.svg";
import guarantee from "./../../assets/icons/guarantee.svg";
import professional from "./../../assets/icons/professionals.svg";
import trusted from "./../../assets/icons/trusted.svg";
import "./styles.scss";

const Advantage = () => {
  return (
    <div className="advantages">
      <h2>Our advantages</h2>
      <div className="advantages-container">
        <div className="advantages-box">
          <div className="advantages-img">
            <img src={trusted} />
          </div>

          <p>Trusted</p>
        </div>

        <div className="advantages-box">
          <div className="advantages-img">
            <img src={professional} />
          </div>
          <p>Professionals</p>
        </div>

        <div className="advantages-box">
          <div className="advantages-img">
            <img src={fast} />
          </div>
          <p>Fast</p>
        </div>

        <div className="advantages-box">
          <div className="advantages-img">
            <img src={guarantee} />
          </div>
          <p>Guarantee</p>
        </div>
        <div className="advantages-box">
          <div className="advantages-img">
            <img src={affordable} />
          </div>
          <p>Affordable</p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
