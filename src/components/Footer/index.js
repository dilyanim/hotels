import React from "react";
import logo from "../../img/logo-89.png";
import fakefook from "../../img/fakebook.png"
import instagram from "../../img/insta.png"
import youtube from "../../img/youtube.png"

const Footer = () => {
  return (
    
    <>
    <div className="header-bar"></div>
<div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--logo">
            <img src={logo} alt="" />
            <h1>Country Travel <br /> Guide</h1>
          </div>

          <div className="footer--list">
            <div className="footer--list__blok">
              <div className="krug"></div>
              <h2>Our mission/Stability</h2>
            </div>
            <div className="syz"></div>

            <div className="footer--list__blok">
              <div className="krug"></div>
              <h2>Terms of use</h2>
            </div>
            <div className="syz"></div>

            <div className="footer--list__blok">
              <div className="krug"></div>
              <h2>Feedback</h2>
            </div>
            <div className="syz"></div>

            <div className="footer--list__blok">
              <div className="krug"></div>
              <h2>Privacy policy</h2>
            </div>
            <div className="syz"></div>

          </div>

          <div className="footer--info">
            <img src={fakefook} alt="" />
            <a href="https://www.instagram.com/motion_web/"><img src={instagram} alt="" /> </a>
            <img src={youtube} alt="" />
          </div>


        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
