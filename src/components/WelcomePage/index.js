import React from "react";
import img1 from "../../img/flag2.png";
import img2 from "../../img/too.png";
import img3 from "../../img/burana.png";
import img4 from "../../img/obloko.png";
import img5 from "../../img/kok-bory.png";
import img6 from "../../img/ak-kol.png"
import img7 from "../../img/aska.png"
import img8 from "../../img/three-boz-ui.png"
import img9 from "../../img/sulaiman-too.png"
import img10 from "../../img/flowers.png"
import img11 from "../../img/mak.png"
import fake from "../../img/fake2.png";
import insta from "../../img/insta2.png";
import twit from "../../img/twit.png";
import tel from "../../img/tel.png";
import wat from "../../img/watsap.png";


const WelcomePage = () => {
  return (
    <div id="welcomeDetail">
      <div className="container">
        <div className="welcomeDetail">
          <div className="welcomeDetailPage1">
            <div className="welcomeDetailPage1--text">
              <h1>
                Kyrgyzstan is a real pearl of Central Asia and one <br /> of the
                most beautiful and original countries in the <br /> world.
              </h1>
              <p>
                Even now, despite its relative obscurity, thousands of tourists
                visit our country <br /> every year and everyone finds something
                special here. Some people are attracted <br /> to rest on
                Issyk-Kul, on its friendly and warm shores. Someone is attracted
                by the <br /> amazing nomadic culture and traditions that the
                people of Kyrgyzstan preserve to <br /> this day. The strongest
                in body and spirit are called the high mountains of the Tien{" "}
                <br />
                Shan and Pamir, where lovers of hiking, mountaineers, cyclists,
                etc. test <br /> themselves for strength and enjoy untouched and
                wild nature. <br /> The almost primeval beauty of nature has
                been preserved in Kyrgyzstan: <br /> mountains, rivers, lakes
                and valleys are sparsely populated and practically <br />{" "}
                uninhabited by humans. Here you can feel like a real pioneer,
                discovering <br /> something new over and over again. <br />{" "}
                Choosing Kyrgyzstan as a place for rest and travel, you will
                certainly get a lot of <br /> new and vivid sensations. And the
                tourist guide to Kyrgyzstan{" "}
                <span>
                  Country Travel <br /> Guide
                </span>{" "}
                will help you decide on the choice of direction in your travels{" "}
                <br /> <br /> On the pages of the guide, we have tried to
                collect the most complete and <br /> accurate information on the
                numerous natural and cultural beauties of the <br /> country,
                which will help you easily make a route for travel.
              </p>
            </div>
            <img src={img1} alt="" />
          </div>

          <div className="welcomeDetailPage2">
            <div className="welcomeDetailPage2--imgs">
              <img src={img2} alt="img" />
              <div className="welcomeDetailPage2--imgs__img">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
              </div>
            </div>
          </div>

          <div className="welcomeDetailPage3">
            <p>
              A complete list of Kyrgyzstan's attractions — from the well-known
              Issyk-Kul Lake and the Ala-Archa Gorge, to the untouched and truly
              wild Tien Shan <br /> and Pamir Mountains. On the page with the
              place you are interested in, you can find all the necessary
              information to visit: the exact location with GPS <br />{" "}
              coordinates, a relief map with the ability to zoom in and view all
              mountain paths and trails, information about roads and tourist
              infrastructure, as well <br /> as a detailed geographical and
              historical description. <br />
              Attractions are conveniently divided into categories. In the menu
              tab <span>"Where to go?"</span> you can find all the sights of the
              region of Kyrgyzstan you are <br /> interested in, or find a place
              you are interested in geographically, whether it is a lake, a
              mountain gorge or a cultural and historical place. <br /> To make
              it more convenient for you, all the sights are available in the{" "}
              <span>"Map"</span> tab, where you can get directions via Google
              Maps. <br /> In the <span>"What to do?"</span> tab you will be
              able to find exactly the places where you can take up your
              favorite type of active recreation: from extreme <br />
              mountaineering and rafting to light hiking and traveling by car.{" "}
              <br />
              Also, announcements of interesting events and events for tourists
              are regularly published on the site: ethno-cultural festivals,
              World Nomad Games <br /> and much more.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074374.8299825606!2d72.10633337014572!3d41.1930146687636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2z0JrRi9GA0LPRi9C30YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1690019708838!5m2!1sru!2skg"
              width="1050"
              height="450"
              style={{
                border: "0",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          </div>

          <div className="welcomeDetailPage4">
            <h1>Did you like the article? Share the page!</h1>

            <div className="welcomeDetailPage4--imgs">
              <img src={fake} alt="" />
              <img src={insta} alt="" />
              <img src={twit} alt="" />
              <img src={tel} alt="" />
              <img src={wat} alt="" />
            </div>

            <h2>Comments on: 0</h2>
            <div className="block"></div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Add a comment..."
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
