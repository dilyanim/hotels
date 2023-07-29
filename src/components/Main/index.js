import React from "react"
import { MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-router-dom";





function Main() {
    return(
        <div id="main">
            <div className="container">
                   <div className="main">
                    <div className="main-text">
                        <div>
                          <h1>Welcome <br/> to Kyrgyzstan!</h1>
                        </div>
                       <div>
                       <h3>Kyrgyzstan is a real pearl of Central Asia   
                           and one of the most beautiful original    
                           countries. <Link className="link" >read more</Link></h3>
                       </div>
                       <div>
                         <button className="m-btn">More detailed</button>
                        
                       </div>
                    </div>
                <div className="main-blocks">
                    <div className="block ">
                        <h3>Kyrgyzstan</h3>
                        <div className="line"></div>
                        <p>Kyrgyzstan is a country in  
                            Central Asia, rich in incredible   
                             natural landscapes that form    
                             the peaks of the Pamir     
                              Mountains, Lake Issyk-Kul and    
                              the Tien Shan ridges.</p>
                              <div className="direct">
                              
                                <a>Read more</a>
                                <MdKeyboardArrowRight className="line1"/>

                              </div>
                            
                    </div>
                    <div className="block">
                        <h3>Culture</h3>
                        <div className="line"></div>
                        <p>The culture of Kyrgyzstan was   
                            formed under the strong  
                            influence of nomadic life. In   
                            addition, it was influenced by the  
                             cultures of Russia, Persia and      
                              Turkey, and yet it remained quite   
                              distinctive and unique.</p>
                              <div className="direct">
                                <a>Read more </a>
                                <MdKeyboardArrowRight className="line1"/>
                              </div>
                    </div>
                    <div className="block">
                        <h3>Tradition</h3>
                        <div className="line"></div>
                         <p>The most traditional custom 
                            among the Kyrgyz - like all peoples  
                            - is hospitality. Every guest was   
                             honored. Traditions of respect for  
                             elders are also important. In a  
                             Kyrgyz family, the dwelling of    
                             grandparents was called “chon uy”   
                             (“big house”), thus expressing...</p>
                             <div className="direct">
                                <a>Read more </a>
                                <MdKeyboardArrowRight className="line1"/>
                              </div>
                    </div>
                    <div className="block">
                        <h3>Climate</h3>
                        <div className="line"></div>
                        <p>The climate of Kyrgyzstan is   
                           continental because Kyrgyzstan is   
                           located far from the oceans. While   
                           summers can be quite hot in the  
                           cities, the mountains are             
                           comparatively cool even during the   
                           hottest months. Winters are cold   
                           and snowy, especially high in the...</p>
                           <div className="direct">
                                <a>Read more </a>
                                <MdKeyboardArrowRight className="line1"/>
                              </div>
                    </div>
        </div>
                   </div>
            </div>
       </div>
    )
}


export default Main;