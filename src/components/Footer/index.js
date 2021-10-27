import React from "react";
import facebook from "./../../assets/icons/facebook.svg";
import twitter from "./../../assets/icons/twitter.svg";
import instagram from "./../../assets/icons/instagram.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact-us">
          <h4>You can find us:</h4>
          <div className="social-media-links">
            <a>
              <img className="social" src={facebook} alt="logo of gmail" />
            </a>
            <a>
              <img className="social" src={twitter} alt="logo of instagram" />
            </a>
            <a>
              <img className="social" src={instagram} alt="logo of instagram" />
            </a>
          </div>
        </div>
        <p>Bishkek 2021</p>
      </div>
    </div>
  );
};

export default Footer;
