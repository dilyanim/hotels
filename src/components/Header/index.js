import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../img/logo-89.png'
import {RiAccountCircleLine} from 'react-icons/ri'
import rus from '../../img/Untitled.png'



function Header(){
    return(
        <div id="header"> 
           <div className="container">
            <div className="header-title">
                <div className="header-logo">
                    <div>
                        <img src={logo}></img>
                    </div>
                    <div>
                        <h6>Country Travel  <br/>
                           Guide</h6>
                    </div>
                </div>
                <div className="header-nav">
                    
                    <Link to='/main'>Main</Link>
                    <Link to="/">Hotels</Link>
                    <Link to="/">Routes</Link>
                    <Link to='/map'>Map</Link>
                    <Link to='/contact'>Contact</Link>
                    <select className="select" >
                        <option style={{
                            display:"none"
                        }}>Languages</option>
                        <option style={{
                            color : "black"
                        }}>Russian <img src={rus}></img></option>
                        <option style={{
                            color: "black"
                        }}>English</option>
                          <option style={{
                            color: "black"
                        }}>عربي</option>
                          <option style={{
                            color: "black"
                        }}>中文</option>
                    </select>
                                       


                </div>
                     <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                    <span></span>
                    </label>

                      <ul class="menu__box">
                       <li><Link  className="menu__item" href="#">Main</Link></li>
                       <div className="lan-line"></div>
                       <li><Link  className="menu__item" href="#">Hotels</Link></li>
                       <li><Link  className="menu__item" href="#">Routes</Link></li>
                       <li><Link  className="menu__item" href="#">Map</Link></li>
                       <li><Link  className="menu__item" href="#">Contact</Link></li>
                       <li><Link  className="menu__item" href="#">    <select className="select-lan" >
                        <option style={{
                            display:"none"
                        }}>Languages</option>
                        <option style={{
                            color : "black"
                        }}>Russian <img src={rus}></img></option>
                        <option style={{
                            color: "black"
                        }}>English</option>
                          <option style={{
                            color: "black"
                        }}>عربي</option>
                          <option style={{
                            color: "black"
                        }}>中文</option>
                    </select></Link></li>

                      </ul>
                      </div>
                <div  className="header-acc">
                     <div>
                        <RiAccountCircleLine className="acc"/>
                    </div>
                    <div>
                   
                    <select className="select" >
                        <option style={{
                            display:"none",
                            margin: "0 6px"
                        }}>Account</option>
                        <option style={{
                            color : "black"
                        }}><a>Sign up</a></option>
                        <option style={{
                            color: "black"
                        }}>Log in</option>
                    </select>
                    </div>
                    
                    
                </div>
               

            </div>
               
           </div>
        </div>
    )
}



export default Header;
