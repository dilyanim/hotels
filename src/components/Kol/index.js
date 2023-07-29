import React from "react";
import k1 from '../../img/k1.png';
import k2 from '../../img/k2.png';
import k3 from '../../img/k3.png';
import foto from '../../img/foto.png';
import f1 from '../../img/f1.png';
import f2 from '../../img/f2.png';
import f3 from '../../img/f3.png';
import f4 from '../../img/f4.png';
import i1 from '../../img/image 5.png';
import i2 from '../../img/image 6.png';
import i3 from '../../img/image 7.png';
import i4 from '../../img/image 8.png';
import i5 from '../../img/image 9.png';




function Kol(){
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
  
    return(
        <div id="kol">
            <div className="container">
              <div className="kol-text">
                    <div className="kol-1"> 
                             <p>Son-Kul Lake (also known as Son-Kel) is a fabulous high-mountain lake of the Tien Shan, which means
                             "The Last Lake" in the accustomed translation into Russian. It is located at an altitude of 3016 meters 
                             above sea level, the depth reaches 22 m. This is the largest natural freshwater reservoir in Kyrgyzstan.  <br/>   </p>
                             <p> Son-Kul feeds on small mountain rivers. A river flows out of the lake, whose name is also Son-Kul, then  <p></p>
                              flows into the stormy Naryn River.</p>
                              <p> The lake lies on a mountain plain surrounded by meadows (jailoo). These meadows have been used as
                               pastures for animals since the most ancient times, which is actually evidenced by the rock carvings 
                               found on the shore of the lake. Shepherds bring cattle to the lake for the summer and families live in
                               yurts (traditional Kyrgyz dwellings made of felt).</p>
                    </div>
                    <div className="son-1">
                       <img src={k1}></img>
                    </div>
                    <div className="tourism">
                        <h1>Tourism</h1>
                        <p>Son-Kul is a potential object of ecological tourism. The nearest large settlement is a small village of Seagulls</p>
                      
                    </div>
                    <img src={k2}></img>
                    <div className="t-title">
                        <p className="t-1">
                        In summer, the inhabited areas around the lake have attracted shepherds from Kochkor, Naryn and At-Bashi 
                        since ancient times. Therefore, here vacationers can have a wonderful opportunity not only to stay in the 
                        national dwelling — yurt, but also to quench their thirst with the national Kyrgyz drink — kumys. It is 
                        prepared using a special technology from mare's milk and has a number of medicinal properties.
                        </p>
                        <p className="t-2">
                          To visit this area is prompted by the lake itself, which has "stepped over" a height of 3000 meters, as well 
                          as its beauty and stunningly clean air, which can become the best medicine for your soul, the analogues
                           of which you will never find anywhere else. And our company will easily help you to carry out this kind of
                            "mental treatment".
                        </p>
                    </div>


                    <div className="climate">
                        <h1>Climate</h1>
                        <p>In winter, Son-Kul is inaccessible to tourists due to low air temperatures, high snow cover, which lies here for 130-160 days, and closed passes. But in summer the air is fresh and transparent, the temperature regime is favorable for air and sunbathing, the water temperature in the lake allows you to take water and air procedures.</p>
                    </div>



                    <div className="son-2">
                        <h1>Inhabitants of the Tien Shan Son Kul</h1>
                        <p>The eastern part of the lake is part of the Karatal-Zhapyryk State Reserve. Tall trees, firs and firs do not grow on the
                             shores of the lake, but only here can the Son-Kul Lake (Sonkel) please the eye with vast placers of edelweiss (listed in the Red Book),
                              as well as agreat many other bright, elegant and sometimes very rare flowers. These flower oases above gradually turn into alpine meadows.  <br/>  </p>

                          <p>In addition, the lake shore is home to 66 species of waterfowl, which usually spend time here from May to September. There are only 14
                             species of ducks here.  </p> 

                         <p>Many species of predators, such as snow leopard, red wolf and fox, also live on the wild shores of the lake. <br/> </p>  

                           <p>Interestingly, the fish in Son-Kul was not found at all until it was specially brought here in 1959. Currently, its species such 
                            as whitefish, chir, peled, common marinka, naked osman, sparsely scaled Osman, scaly Osman, Severtsov osman, gray char and Tibetan
                             char are found in the lake.</p>   
                            <img src={k3}></img>
                            <h1>Inhabitants of the Tien Shan Son Kul</h1>
                            <p>One of the legends says that the cruel khan's headquarters was once located on the site of the lake. To replenish his harem, he collected the most beautiful girls from all over the Tien Shan. Their immeasurable suffering from the cruelty of their husband pitied the mountains. The place where the khan's palace stood sank, and the water flooded the ruler's headquarters with the adjacent territory. And so this amazing lake was formed, which absorbed all the beauty of those women who were in captivity of the khan.</p>
                    
                    </div>
                    <div className="foto">
                        <h1>Photo gallery</h1>
                        <img src={foto}></img>
                        <div>
                       
                        </div>
                    </div>
              </div>
                    <div className="arashan-slide"> 
                            <div><img src={f1}></img></div>
                            <div><img src={f2}></img></div>
                            <div> <img src={f3}></img></div>
                            <div><img src={f4}></img></div>
                            <div><img src={f2}></img></div>
                         </div>
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
    )

}
export default Kol;

