import React from "react";
import a1 from '../../img/a1.png';
import a2 from '../../img/a2.png';
import a3 from '../../img/a3.png';
import Slider from "react-slick";
import r1 from '../../img/r1.png';
import r2 from '../../img/r2.png';
import r3 from '../../img/r3.png';
import r4 from '../../img/r4.png';
import r5 from '../../img/r5.png'
import i1 from '../../img/image 5.png';
import i2 from '../../img/image 6.png';
import i3 from '../../img/image 7.png';
import i4 from '../../img/image 8.png';
import i5 from '../../img/image 9.png';
import foto from '../../img/foto.png'

function Arashan(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <div id="arashan">
            <div className="container">
                <div className="arashan">
                     <p>Altyn-Arashan (translated as "Golden Spring") is a high—mountain gorge in the eastern part of the Terskey-Ala-Too ridge, located near the city of Karakol. This gorge is one of the most popular tourist spots in Kyrgyzstan, thanks to its unique nature, hot springs located right in the gorge, extensive spruce forests and stunning views.  <br/>
                        Back in the days of the Soviet Union, the territory of the gorge was recognized as a specially protected protected area due to the great natural diversity of the gorge. The gorge received its status as a nature reserve in 1963 and retains it to this day, because it is one of the few places on the planet where a dense relic forest of Tien Shan spruce has been preserved. The hot springs of Altyn-Arashan are also widely known. They are located at a record height of 2,600 meters and have a healing effect due to the content of radon and hydrogen sulfide in the water, maintaining a high temperature all year round: 35 degrees for a radon source and 41 degrees for a hydrogen sulfide source. Some springs have indoor pools, while others are still "wild", located in baths or grottoes hollowed out in the stones.</p>
                      <img src={a1}></img>
                      <div className="tourism2">
                        <h1>Tourism</h1>
                        <p>A large flow of tourists to Altyn-Arashan is ensured by its location: through this gorge you can climb to the alpine lake Ala-Kul — the most beautiful lake Terskey-Ala-Too, overcoming the pass of the same name, with a height of 3800 meters. The road there passes through the left tributary of the Altyn-Arashan River, 5 kilometers above the resort.</p>
                        <img src={a2}></img>
                        <p>Another reason for tourists' love for this place is the Aksu Wall, which is also called Palatka Peak, because of its unusual trapezoidal shape, which is very rare for the Tien Shan Mountains. The view of the wall has become a kind of visiting card of the gorge. Hiking enthusiasts will be particularly interested in walking to the foot of the peak, where there is a small glacial lake Kashka-Suu and several waterfalls: Sharkyratma, Kuldurek, Tash-Tektir, Archaly-Tor and Takyr-Tor.
                           The Altyn-Arashan gorge has a complex geographical relief, unlike other mountain gorges of the northern Tien Shan. In its lower part, Altyn-Arashan is a narrow canyon with a large degree of elevation, and a stormy river that can flood the road in summer. In the upper part, the gorge significantly expands and becomes a kind of high-altitude valley, with a very smooth elevation difference. Upstream of the river, the gorge divides, forming two arms that encircle the Aksu Wall on the right and left sides.
                           There are a huge number of tourist routes in Altyn-Arashan. This place is used as a base camp for radial exits, as a transshipment point on the way to Ala-Kul, Ak-Suu gorge or Karakol Valley and Jety-Oguz. It is also a wonderful place to relax among the untouched nature of the Tien Shan.</p>

                      </div>
                      <div className="climate2"> 
                        <h1>Climate</h1>
                        <p>In winter, Son-Kul is inaccessible to tourists due to low air temperatures, high snow cover, which lies here for 130-160 days, and closed passes. But in summer the air is fresh and transparent, the temperature regime is favorable for air and sunbathing, the water temperature in the lake allows you to take water and air procedures.</p>

                      </div>
                      <div className="title">
                        <h1>Inhabitants of the Tien Shan Son Kul</h1>
                        <p>The eastern part of the lake is part of the Karatal-Zhapyryk State Reserve. Tall trees, firs and firs do not grow on the shores of the lake, but only here can the Son-Kul Lake (Sonkel) please the eye with vast placers of edelweiss (listed in the Red Book), as well as a great many other bright, elegant and sometimes very rare flowers. These flower oases above gradually turn into alpine meadows.

                          In addition, the lake shore is home to 66 species of waterfowl, which usually spend time here from May to September. There are only 14 species of ducks here.

                           Many species of predators, such as snow leopard, red wolf and fox, also live on the wild shores of the lake.

                            Interestingly, the fish in Son-Kul was not found at all until it was specially brought here in 1959. Currently, its species such as whitefish, chir, peled, common marinka, naked osman, sparsely scaled Osman, scaly Osman, Severtsov osman, gray char and Tibetan char are found in the lake.</p>
                           <img src={a3}></img>

                                </div>
                             <div className="title-1">
                                     <h1>
                                           Inhabitants of the Tien Shan Son Kul
                                        </h1>
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
                            <div><img src={r1}></img></div>
                            <div><img src={r2}></img></div>
                            <div> <img src={r3}></img></div>
                            <div><img src={r4}></img></div>
                            <div><img src={r5}></img></div>
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
export default Arashan;
