import React from "react";
import p1 from '../../img/p1.png'
import p2 from '../../img/p2.png'
import p3 from '../../img/p3.png'
import p4 from '../../img/p4.png'
import p5 from '../../img/p5.png'
import p6 from '../../img/p6.png'
import p7 from '../../img/p7.png'
import p8 from '../../img/p8.png'
import p9 from '../../img/p9.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Popular() {
    return(
        <div id="popular">
            <div className="container">
                <div className="popoular">
                    <div className="popular-text">
                        <h1>
                        POPULAR SIGHTS OF KYRGYZSTAN
                        </h1>
                    </div>
                    <div className="popular-img">
                    <div className="img1">
                        <div>
                        <img src={p1}></img>
                        <div className="a-block">
                            <div className="comp">
                             <h3>Son-Kol Lakes</h3>
                            <p>Son-Kol Lake (Sonkel, Son kul) is located in
                             the north-west of the Naryn 
                             region of Kyrgyzstan. This is
                              the second largest lake in the
                               country after Issyk-Kul. 
                                </p>
                                <div className="more">
                                    <div>
                                        <Link className="nav" to="/son">read more</Link>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                              
                                
                            </div>
                        </div>
                        </div>
                        <div className="img1">
                        <img src={p2}></img>
                        <div className="a-block">
                        
                        <div className="comp">
                             <h3>Altyn-Arashan Gorge</h3>
                            <p>Altyn-Arashan (Golden Spring) is located in an Alpine valley, as if descended from an art postcard. It is located at an altitude of 3000 meters, in the south of which is Palatka peak (4260 m).</p>
                            <div className="more">
                                     <div>
                                        <Link   Link className="nav" to="/altyn">read more</Link>
                                       </div>       
                                     <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                     </div>
                                   
                                </div>
                            </div>
                             
                        </div>
                        </div>
                        <div className="img1">
                        <img src={p3}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Jets Oguz Gorge</h3>
                            <p>In the Jeti-Oguz gorge, you can see unusual red rocks that from a distance resemble seven bulls lying on the ground. The Kyrgyz have a legend about how they appeared.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                               
                        </div>
                        </div>
                       
                    </div>
                    <div className="img2">
                        <div>
                        <img src={p4}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Ala-Archa gorge.</h3>
                            <p>Ala-Archa is a state natural park of Kyrgyzstan, located about 40 km from Bishkek. It occupies the northern slopes of the Kyrgyz ridge and stretches to the Ala-Archinsky gorge.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                               
                        </div>


                        </div>
                        <div className="img2">
                        <img src={p5}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Caravanserai Tash-Rabat</h3>
                            <p>Tash-Rabat (also Tashrabat) is an ancient caravanserai located on the territory of Naryn region, located near the border with China, one of the key parts of the ancient Great Silk Road.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son_kol">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                               
                        </div>
                        </div>
                        <div className="img2">
                        <img src={p6}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Burana Tower</h3>
                            <p>Burana Tower, located 80 kilometers from Bishkek, is one of the most famous archaeological monuments of Kyrgyzstan.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son_kol">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                              
                        </div>
                        </div>
                        
                    </div>
                    <div className="img3">
                      
                        <div>
                        <img src={p7}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Lakes of Sary-Chelek</h3>
                            <p>Sary-Chelek Lake is one of the most beautiful and picturesque high-altitude lakes of Central Asia, a bright attraction of the Chatkal Ridge (a spur of the Western Tien Shan).</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son_kol">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                               
                        </div>
                        </div>
                        <div className="img3">
                        <img src={p8}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Ysyk-Kol Lakes</h3>
                            <p>Issyk-Kul is one of the largest lakes that exist in the world. The natural attraction of Kyrgyzstan is called the precious pearl of Asia.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son_kol">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                               
                        </div>
                        </div>
                        <div className="img3">
                        <img src={p9}></img>
                        <div className="a-block">
                        <div className="comp">
                             <h3>Kel-Suu Lakes</h3>
                            <p>Lake Kel-Suu (Kel suu) is one of the most beautiful lakes in Kyrgyzstan. Kel-Suu is located in the Aksai valley of the Naryn region.</p>
                            <div className="more">
                                    <div>
                                        <NavLink className="nav" to="/son_kol">read more</NavLink>
                                    </div>
                                    <div>
                                        < MdKeyboardArrowRight className="more1"/>
                                    </div>
                                   
                                </div>
                            </div>
                              
                        </div>
                        </div>
                        
                    </div>

                    </div>
                    

                </div>


            </div>

        </div>
    )
}

export default Popular;