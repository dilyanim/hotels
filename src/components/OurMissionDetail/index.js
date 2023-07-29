import React from "react";
import "./index.scss";
import fake from "../../img/fake2.png";
import inst from "../../img/insta2.png";
import twit from "../../img/twit.png";
import tel from "../../img/tel.png";
import wat from "../../img/watsap.png";

const OurMissionDetail = () => {
  return (
    <div id="ourDetail">
      <div className="container">
        <div className="ourDetail">
          <p>
            The goal of the <span>Country Travel Guide</span> website team is to create the
            most complete, complete and reliable travel guide and guide for
            tourists traveling in Kyrgyzstan: both local and foreign. Despite
            the huge tourist potential of our country, to this day there is no
            resource on the Internet that could help a traveler get a complete
            picture of the sights of Kyrgyzstan, how to get to them and how to
            plan his trip most correctly. Of course, there are some blogs of
            tourists who have already been here, as well as commercial
            guidebooks published abroad. But, often, they may lack objectivity
            in providing information about the country, which, of course, can
            create a false impression about Kyrgyzstan and scare away from the
            trip. Therefore, we have made every effort to create a kind of
            catalog of standardized and reliable information about natural
            beauty, cultural attractions, movement within the country, cultural
            features and other nuances that need to be taken into account when
            traveling around our country. We are convinced that this information
            should be accessible, truthful and free, and people should be able
            to plan their trip without paid consultations and services of travel
            agencies. Thus, we want to significantly increase the tourist
            attractiveness of the country for foreign visitors and contribute to
            the development of local tourism. Through the pages of our website,
            we also try to instill the right attitude to travel in Kyrgyzstan.
            We defend the values of minimal environmental impact on nature, and
            we believe that tourists should be responsible. We believe that the
            proper development of tourism will help Kyrgyzstan preserve its
            amazing nature and cultural authenticity. We also believe that the
            appearance of such a guide will be the first step towards increasing
            the attendance of many beautiful, but hard-to-reach places in our
            country and will contribute to the emergence of tourist
            infrastructure there. And the development of tourist routes, in
            turn, will help the development of local communities: villages,
            villages, yurt camps, etc.
          </p>
          <div className="ourDetail--img">
            <img src={fake} alt="img" />
            <img src={inst} alt="img" />
            <img src={twit} alt="img" />
            <img src={tel} alt="img" />
            <img src={wat} alt="img" />
          </div>
          <h1>Did you like the article? Share the page!</h1>
        </div>
      </div>
    </div>
  );
};

export default OurMissionDetail;
