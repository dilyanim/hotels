import React, { useState } from "react";
import google from "../../img/google.png";
import facebook from "../../img/facebook.png";
import { BsApple } from "react-icons/bs";
import logo from "../../img/logo-89.png";
import header from "../../img/header.png";
import user from "../../img/user.png";
import Account from "../Account";
import userEvent from "@testing-library/user-event";

const Register = () => {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImg, setUserImg] = useState("");

  const handleUser = (userName, userEmail, userImg) => {
    setUserName(userName);
    setUserEmail(userEmail);
    setUserImg(userImg);
    setModal(false);
  };

  return (
    <div id="register">
      <div className="container">
        <div className="register">
          <div className="register--text">
            <h1>Log in and get exploring</h1>
            <h2>
              Log into your account with your email, or create one below. Quick
              and <br /> easy - promise!
            </h2>
          </div>
          <div className="register--block">
            <span>Email</span>
            <input type="email" />
            <button>Continue</button>
            <div className="register--block__box">
              <div className="uz"></div>
              <h5>or continue with</h5>
              <div className="uz"></div>
            </div>
            <div className="register--block__logo">
              <div
                onClick={() => {
                  setModal(true);
                }}
                className="logos"
              >
                <img src={google} alt="" />
              </div>
              <div
                onClick={() => {
                  setModal(true);
                }}
                className="logoss"
              >
                <img src={facebook} alt="" />
              </div>
              <div
                onClick={() => {
                  setModal(true);
                }}
                className="logos"
              >
                <BsApple style={{ fontSize: "35px" }} />
              </div>
            </div>
          </div>

          <div
            style={{
              display: modal ? "block" : "none",
              zIndex: modal ? "10" : "0",
            }}
            className="register--modal"
          >
            <div className="register--modal__logo">
              <img src={logo} alt="" />
              <h1>
                Country Travel <br /> Guide
              </h1>
            </div>
            <div className="register--modal__text">
              <h2>Select an account</h2>
              <h2>
                to go to the <span>"Country Travel Guide"</span> <br />{" "}
                application
              </h2>
            </div>

            <div className="register--modal__users">
              <div
                onClick={() =>
                  handleUser("Cooper,Kristin", "tanya.hill@example.com", header)
                }
                className="register--modal__users--img"
              >
                <img src={header} alt="" />
                <div className="register--modal__users--img__text">
                  <h4>Cooper, Kristin</h4>
                  <h5>tanya.hill@example.com</h5>
                </div>
              </div>
              <div className="diw"></div>

              <div className="register--modal__users--img2">
                <img src={user} alt="" />
                <div className="register--modal__users--img2__text2">
                  <h3>Change account</h3>
                </div>
              </div>
              <div className="diw"></div>
            </div>
          </div>
          <div
            onClick={() => {
              setModal(false);
            }}
            style={{
              display: modal ? "block" : "none",
            }}
            className="register--blur"
          ></div>

          {userName && <Account userName={userName} userEmail={userEmail} userImg={userImg} />}

        </div>
      </div>
    </div>
  );
};

export default Register;
