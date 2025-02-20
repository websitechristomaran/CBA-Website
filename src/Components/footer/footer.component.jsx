import React from "react";
import "./footer.style.css";
import facebook from "../footer/Footer/fb2.png";
import instagram from "../footer/Footer/insta 2.png";
import twitter from "../footer/Footer/twitter2.png";
import youtube from "../footer/Footer/YT2.png";
import { animateScroll as scroll } from "react-scroll";


function Footer() {

    function Facebook(){

        window.open("https://www.facebook.com/", "_blank");
    
      }
    
      function Twitter(){
    
       window.open('https://twitter.com/', "_blank");
      }
    
      function Insta(){
    
       window.open("https://www.instagram.com/", "_blank");
    
      }
    
      function Youtube(){
    
       window.open("https://www.youtube.com/", "_blank");
    
      }

    return(
        
        <footer  id="footer">
            <p href="home" className="logo2" onClick={() => scroll.scrollToTop()}>CBA</p>
            <p className="dev">© 2021 All rights reserved.<br/> Developed by Skillscy.</p>
            <ul className="icons2">
                <li>
                    <img  src={facebook} alt="" onClick={Facebook}  />
                </li>
                <li>
                    <img  src={instagram} alt="" onClick={Insta}/>
                </li>
                <li>
                    <img  src={twitter} alt="" onClick={Twitter} />
                </li>
                <li>
                    <img  src={youtube} alt="" onClick={Youtube}/>
                </li>
                </ul>

                <div className="dropdown3">
                    <button className="dropbtn3">Connect with us</button>
                    <div className="dropdown-content3">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div>
     
    </div>
        </footer>
        
    );
}

export default Footer;
