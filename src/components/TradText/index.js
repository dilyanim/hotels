import React from "react";
import tr1 from '../../img/tr1.png'
import tr2 from '../../img/tr2.png'
import tr3 from '../../img/tr3.png'
import tr4 from '../../img/tr4.png'
import tr5 from '../../img/tr5.png'
import tr6 from '../../img/tr6.png'
import tr7 from '../../img/tr7.png'
import tr8 from '../../img/tr8.png'
import tr9 from '../../img/tr9.png'
// import Slider from "react-slick";
import wed from '../../img/wedding.png';
import food from '../../img/Rec.png';
import i1 from '../../img/image 5.png';
import i2 from '../../img/image 6.png';
import i3 from '../../img/image 7.png';
import i4 from '../../img/image 8.png';
import i5 from '../../img/image 9.png';


function TradText(){

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
        <div id="trad">
            <div className="container">
                <div className="trad">
                    <div className="trad-1">
                        <div> 
                            <h6 style={{
                            }}>Traditions related to the birth of a child </h6>
                             <p>   
                                 According to Kyrgyz traditions, after the birth of a child, one holiday was replaced by another. To the one who first informs the joyful news of the birth of the baby - "suyunchu" - relatives had to make a small monetary gift, another reward - "korunduk" - was awarded for the right to see the baby. <br/>

                                Choosing the name of a newborn is also a whole ritual. According to custom, the woman did not give the child a name herself. This mission was assigned to the most respected person in the environment or to the oldest in the family. <br/>

                                    The main traditions that every Kyrgyz should remember
                                                After a while, in honor of the birth of the child, a celebration was organized "beshik toy" or a modest one surrounded by the closest ones - "zhentek". <br/>

                                                            When the baby began to take the first steps, the circumcision ceremony of the put "tushoo kesu" was performed, and after a few years, if it was a boy, circumcision was performed and "sunnot toy" was performed. <br/>

                                    The 12th anniversary of the child - "muhol zhash" - was celebrated in a special way, in a more solemn atmosphere. It was believed that he had lived his first cycle, so relatives gave him their blessing, and among the gifts there had to be a red handkerchief or shirt. The red color meant that the teenager was preparing for adulthood. <br/>

                                    Throughout life, every 12-year cycle, which is 24 years, 36, 48 years and beyond, was celebrated in a special way. It was believed that this age is fatal and carries a lot of trials. When a person crossed this line, they continued to give him red clothes for his birthday, and he had to give some old things to others.</p> 
                        </div>
                        <div>
                            <img src={tr1}></img>
                        </div>
                    </div>
                   
                    <div className="arashan-slide"> 
                            <div><img src={tr2}></img></div>
                            <div><img src={tr3}></img></div>
                            <div><img src={tr4}></img></div>
                            <div><img src={tr5}></img></div>
                            <div><img src={tr6}></img></div>
                            <div><img src={tr7}></img></div>
                            <div><img src={tr8}></img></div>
                            <div><img src={tr9}></img></div>
                            
                         </div>


                        <div className="trad-2">
                        <div> 
                             <p>   
                            <h6>Weddings</h6> 
                            <p style={{
                                margin: "0 0 30px 0"
                            }}>As in any culture, a Kyrgyz wedding is considered the most colorful event and even turns into a whole series of celebrations. If the girl was wooed, then the parties discussed in advance all the conditions of the wedding, the size of the "kalym" (ransom). Her parents arranged "kyz uzatuu" (seeing her off from her parents' house). Matchmakers brought there "kiyit" (valuable gifts to matchmakers) and gave "kalym". After the blessing of her parents, the girl was taken to the groom's house, where a white scarf was put on her. A "nike" (religious wedding) was already taking place in the groom's house, and they were assigned "okul ata, okul ene" (planted parents).
</p> 
The main traditions that every Kyrgyz should remember
After the wedding night, the relatives checked the underwear to make sure that their daughter-in-law was a virgin. In this case, the girl's mother, in gratitude for a good upbringing, made a separate monetary gift. The next day, all new relatives came to see the daughter-in-law, at the meeting she had to bow to them three times. Over time, this part of the wedding tradition has been forgotten, and the daughters-in-law bow only for the first few days.</p> 
                        </div>
                        <div>
                            <img src={wed}></img>
                        </div>
                    </div>

                    <div className="trad-3">
                        <div> 
                              
                           <h6 style={{
                            margin: "20px 0 0 "
                           }}>Etiquette for kelinki and kayynzhurt</h6>  
                           <p style={{margin:"0 0 30px  0"}}>In the new family, there were customs of prohibition in relation to the daughter-in-law. In the old days, she was forbidden to call her husband's relatives, she had to come up with some kind of pseudonyms. For example, she called her husband's youngest brother "kichuu bala" (the youngest son), and addressed her husband's younger sister as "erke kyz" (a spoiled girl). This prohibition was in effect throughout the woman's life, and even in old age she had to show the appropriate attitude to her husband's relatives.</p>
                            <p style={{margin:"0 0 30px  0"}} >The daughter-in-law was also forbidden to walk with her head uncovered, barefoot, and sit with her back to relatives. She had to speak without raising her tone, wear modest long clothes. After the wedding, the relatives took turns inviting the newlyweds to visit and introduced them to their family. It was called "otko kirghizuu".
</p> 
                            <p style={{margin:"0 0 30px  0"}}>In the new family, the daughter-in-law stood at the very bottom of the hierarchy, which means she had to do all the housework. In addition to everything, she had to help in all the activities of all her husband's relatives, whether it was weddings or funerals. This is called "kelindik kyzmat" (kelinok service).</p>

                            <p>But at the same time, in relation to the daughter-in-law, the new relatives had to observe etiquette. In the new family, she had to be treated with respect, care, not to embarrass her, not to be rude, not to violate her personal space, not to appear in front of her in an unsightly way.
</p>
                        <p>Now the relationship within the family is gradually changing, as conflicts often arise on domestic grounds, but the main idea of these traditions is that both sides should show equal respect to each other.</p> 
                        </div>
                        <div>
                            <img src={food}></img>
                        </div>
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

        </div>
    )
}

export default TradText;