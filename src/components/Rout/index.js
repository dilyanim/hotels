import React, { useState } from "react";
import { data } from "./Data";
import btn from "../../img/bybus btn.png";
import bybus from "../../img/marshrut";
import mapBus from "../../img/mapbus.png";

const Rout = () => {
  const [activeTab, setActiveTab] = useState("plane");
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const [showModal2, setShowModal2] = useState(false);
  const [inputValue2, setinputValue2] = useState("");

  const [isSearching, setIsSearching] = useState(false);
  const [showRouteBlock, setShowRouteBlock] = useState(false);

  // Новые состояния и переменные для карт и информации о маршрутах для каждого таба
  const [showPlaneMap, setShowPlaneMap] = useState(false);
  const [planeRoute, setPlaneRoute] = useState(null);

  const [showBusMap, setShowBusMap] = useState(false);
  const [busRoute, setBusRoute] = useState(null);

  const [showTrainMap, setShowTrainMap] = useState(false);
  const [trainRoute, setTrainRoute] = useState(null);

  function handleSearch() {
    setIsSearching(true);
    setShowRouteBlock(false);
    setTimeout(() => {
      setIsSearching(false);
      setShowRouteBlock(true);
    }, 1000);

    if (activeTab === "plane") {
      setShowPlaneMap(true);
      setPlaneRoute(data.plane.find((item) => item.city === inputValue2));
      setShowBusMap(false);
      setShowTrainMap(false);
    }

    // Поиск для таба "bus"
    if (activeTab === "bus") {
      setShowPlaneMap(false);
      setShowBusMap(true);
      setBusRoute(data.bus.find((item) => item.city === inputValue2));
      setShowTrainMap(false);
    }

    // Поиск для таба "train"
    if (activeTab === "train") {
      setShowPlaneMap(false);
      setShowBusMap(false);
      setShowTrainMap(true);
      setTrainRoute(data.train.find((item) => item.city === inputValue2));
    }
  }

  function inputClick() {
    setShowModal((prevShowModal) => !prevShowModal);
    setShowModal2(false);
  }

  function handleClick(value) {
    setinputValue(value);
    setShowModal(false);
  }

  function inputClick2() {
    setShowModal2((prevShowModal2) => !prevShowModal2);
    setShowModal(false);
  }

  function handleClick2(value) {
    setinputValue2(value);
    setShowModal2(false);
  }

  return (
    <div id="rout">
      <div className="container">
        <div className="rout">
          <div className="rout--block">
            <input
              value={inputValue}
              onClick={inputClick}
              style={{ marginLeft: "20px" }}
              type="search"
              placeholder="Where from?"
            />
            <input
              value={inputValue2}
              onClick={inputClick2}
              type="search"
              placeholder="Where to?"
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {showModal && (
            <div className="modal">
              <button onClick={() => handleClick("Ysyk-Kol")}>Ysyk-Kol</button>
              <button onClick={() => handleClick("Talas")}>Talas</button>
              <button onClick={() => handleClick("Naryn")}>Naryn</button>
              <button onClick={() => handleClick("Osh")}>Osh</button>
              <button onClick={() => handleClick("Batken")}>Batken</button>
              <button onClick={() => handleClick("Jalal-Abad")}>
                Jalal-Abad
              </button>
              <button onClick={() => handleClick("Bishkek")}>Bishkek</button>
            </div>
          )}

          {showModal2 && (
            <div className="modal2">
              <button onClick={() => handleClick2("Ysyk-Kol")}>Ysyk-Kol</button>
              <button onClick={() => handleClick2("Talas")}>Talas</button>
              <button onClick={() => handleClick2("Naryn")}>Naryn</button>
              <button onClick={() => handleClick2("Osh")}>Osh</button>
              <button onClick={() => handleClick2("Batken")}>Batken</button>
              <button onClick={() => handleClick2("Jalal-Abad")}>
                Jalal-Abad
              </button>
              <button onClick={() => handleClick2("Bishkek")}>Bishkek</button>
            </div>
          )}

          {isSearching && <p>Searching...</p>}

          {!showRouteBlock && (
            <div className="rout--tabs">
              <div className="btn">
                <div className="btn1">
                  <button
                    className={`tab-button ${
                      activeTab === "plane" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("plane")}
                  >
                    Plane
                  </button>
                  <div
                    className={`dos ${activeTab === "plane" ? "active" : ""}`}
                  ></div>
                </div>

                {setActiveTab !== "bus" && (
                  <div className="btn1">
                    <button
                      className={`tab-button ${
                        activeTab === "bus" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("bus")}
                    >
                      Bus
                    </button>
                    <div
                      className={`dos ${activeTab === "bus" ? "active" : ""}`}
                    ></div>
                  </div>
                )}

                {setActiveTab !== "train" && (
                  <div className="btn1">
                    <button
                      className={`tab-button ${
                        activeTab === "train" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("train")}
                    >
                      Train
                    </button>
                    <div
                      className={`dos ${activeTab === "train" ? "active" : ""}`}
                    ></div>
                  </div>
                )}
              </div>

              <h2>Popular flight destinations</h2>

              {activeTab === "plane" && (
                <div className="tab-content">
                  {data.plane.map((item) => (
                    <div key={item.id} className="item">
                      <img src={item.img} alt={`Image for ${item.name1}`} />
                      <h5>{item.city}</h5>
                      <div>
                        <div className="block">
                          <div className="item-details">
                            <h1>Departure sity</h1>
                            <p>{item.name1}</p>
                            <p>{item.name2}</p>
                            <p>{item.name3}</p>
                          </div>
                          <div className="item-time">
                            <h1>The road will take</h1>
                            <p>{item.time1}</p>
                            <p>{item.time2}</p>
                            <p>{item.time3}</p>
                          </div>

                          <div className="item-pricing">
                            <h1>Price from</h1>
                            <p>{item.price1}</p>
                            <p>{item.price2}</p>
                            <p>{item.price3}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "bus" && (
                <div className="tab-content">
                  {data.bus.map((item) => (
                    <div key={item.id} className="item-bus">
                      <img src={item.img} alt={`Image for ${item.name1}`} />
                      <h5>{item.city}</h5>
                      <div className="block">
                        <div className="item-details">
                          <h1>Departure sity</h1>
                          <p>{item.name1}</p>
                          <p>{item.name2}</p>
                          <p>{item.name3}</p>
                          <p>{item.name4}</p>
                          <p>{item.name5}</p>
                          <p>{item.name6}</p>
                          <p>{item.name7}</p>
                          <p>{item.name8}</p>
                          <p>{item.name9}</p>
                          <p>{item.name10}</p>
                          <p>{item.name11}</p>
                        </div>

                        <div className="item-time">
                          <h1>The road will take</h1>
                          <p>{item.time1}</p>
                          <p>{item.time2}</p>
                          <p>{item.time3}</p>
                          <p>{item.time4}</p>
                          <p>{item.time5}</p>
                          <p>{item.time6}</p>
                          <p>{item.time7}</p>
                          <p>{item.time8}</p>
                          <p>{item.time9}</p>
                          <p>{item.time10}</p>
                          <p>{item.time11}</p>
                        </div>

                        <div className="item-pricing">
                          <h1>Price from</h1>
                          <p>{item.price1}</p>
                          <p>{item.price2}</p>
                          <p>{item.price3}</p>
                          <p>{item.price4}</p>
                          <p>{item.price5}</p>
                          <p>{item.price6}</p>
                          <p>{item.price7}</p>
                          <p>{item.price8}</p>
                          <p>{item.price9}</p>
                          <p>{item.price10}</p>
                          <p>{item.price11}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "train" && (
                <div className="tab-content">
                  {data.train.map((item) => (
                    <div key={item.id} className="item-train">
                      <img src={item.img} alt={`Image for ${item.name1}`} />
                      <h5>{item.city}</h5>
                      <div className="block">
                        <div className="item-details">
                          <h1>Departure sity</h1>
                          <p>{item.name1}</p>
                        </div>
                        <div className="item-time">
                          <h1>The road will take</h1>
                          <p>{item.time}</p>
                        </div>

                        <div className="item-pricing">
                          <h1>Price from</h1>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showRouteBlock && inputValue && inputValue2 && (
            <div>
              {showPlaneMap && (
                <div>
                  <h3>Маршрут построен (Plane)</h3>
                  <span>Plane</span>
                </div>
              )}

              {showBusMap && (
                <div className="rout--search">
                  <img
                    src={btn}
                    style={{
                      margin: "110px 0 31px 0",
                    }}
                    alt=""
                  />
                  <img src={bybus} alt="" />
                  <img
                    src={mapBus}
                    style={{
                      margin: "30px 0 110px 0",
                    }}
                    alt=""
                  />
                </div>
              )}

              {showTrainMap && (
                <div>
                  <h3>Маршрут построен (Train)</h3>
                  <span>train</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rout;
