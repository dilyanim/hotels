import React from "react";
import i1 from '../../img/image 5.png';
import i2 from '../../img/image 6.png';
import i3 from '../../img/image 7.png';
import i4 from '../../img/image 8.png';
import i5 from '../../img/image 9.png';



function MapText(){
    return(
        <div id="mapText">
            <div className="container">
                <div className="mapText">
                    <div className="map-card">
                    <iframe style={{
                        width:"1160px",
                        height:"486px",
                        
                    }}  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1545578.4321580308!2d74.5149881487234!3d40.834379771245366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1690627249929!5m2!1sru!2skg"  ></iframe>
                    </div>
                    <div className="map-t">
                         <h2>How to use the card?</h2>
                         <p>To learn more about the place you are interested in, click on its icon. If you need more information, at the end of each description there is a link to the attractions page on the guidebook website.</p>
                         <div className="page">
                        <h4>Did you like the article? Share the page!</h4>
                        <div className="page-img">
                        <img src={i1}></img>
                        <img src={i2}></img>
                        <img src={i3}></img>
                        <img src={i4}></img>
                        <img src={i5}></img>
                        </div>
                    </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MapText;