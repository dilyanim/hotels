import React, { useState } from "react";
import { LiaUserCircle } from "react-icons/lia";
import { GrLogin } from "react-icons/gr";
import { RiSettings4Line } from "react-icons/ri";
import jon from "../../img/jon.png";
import google from "../../img/google.png";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState("person");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div id="account">
      <div className="container">
        <div className="account">
          <div className="account--tabs">
            <img src={jon} alt="" />
            <button
              className={selectedTab === "person" ? "active" : ""}
              onClick={() => handleTabClick("person")}
            >
              <LiaUserCircle
                style={{ fontSize: "35px", marginRight: "14px" }}
              />
              Person Information
            </button>

            <div className="account--tabs__boxs"></div>

            <button
              className={selectedTab === "login" ? "active" : ""}
              onClick={() => handleTabClick("login")}
            >
              <GrLogin style={{ fontSize: "30px", marginRight: "14px" }} />
              Login Information
            </button>

            <div className="account--tabs__boxs"></div>

            <button
              className={selectedTab === "settings" ? "active" : ""}
              onClick={() => handleTabClick("settings")}
            >
              <RiSettings4Line
                style={{ fontSize: "30px", marginRight: "14px" }}
              />
              Site Settings
            </button>

            <div className="account--tabs__boxs"></div>
          </div>
          <div className="account--content">
            {selectedTab === "person" && (
              <div className="persons">
                <h1>Personal information</h1>
                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Full Name</h2>
                    <h6>Edit</h6>
                  </div>
                  <h3>John Jacob</h3>
                  <div className="bk"></div>
                </div>

                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Email</h2>
                    <h6>Edit</h6>
                  </div>
                  <h3>john.jacob@gmail.com</h3>
                  <div className="bk"></div>
                </div>

                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Phone Number</h2>
                    <h6>Add</h6>
                  </div>
                  <h3>Not provided</h3>
                  <div className="bk"></div>
                </div>

                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Date of Birth</h2>
                    <h6>Add</h6>
                  </div>
                  <h3>Not provided</h3>
                  <div className="bk"></div>
                </div>

                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Home Town</h2>
                    <h6>Edit</h6>
                  </div>
                  <h3>Bishkek, KG</h3>
                  <div className="bk"></div>
                </div>
              </div>
            )}
            {selectedTab === "login" && (
              <div className="persons">
                <h1>Login information</h1>
                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Password</h2>
                    <h6>Add</h6>
                  </div>
                  <h3>Not provided</h3>
                  <div className="bk"></div>
                </div>

                <div className="persons--name">
                  <div className="persons--name__text">
                    <h2>Connected Accounts</h2>
                  </div>
                  <h5>
                      Viator will only have access to your name and email.
                    </h5>
                  <div className="google">
                    <img src={google} width={20} style={{marginRight:'5px'}} alt="" />
                    <p>Google</p>
                  </div>
                  <h4>Connected</h4>
                  <div className="bk"></div>
                </div>
              </div>
            )}
            {selectedTab === "settings" && <div>Site Settings Block</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
