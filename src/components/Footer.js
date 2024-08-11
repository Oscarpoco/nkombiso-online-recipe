import React from "react";
import './Footer.css';
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <h3>OUR BEST CHEF</h3>
            <div className="chef">
                <div className="item">
                    <img src="item-1.jpeg" alt="chef"></img>
                    <p><span>Letelo Khumalo</span>, Chef</p>
                </div>
                <div className="item">
                    <img src="item-2.jpeg" alt="chef"></img>
                    <p><span>Sibusiso Khoza</span>, Chef</p>
                </div>
                <div className="item">
                    <img src="item-3.jpeg" alt="chef"></img>
                    <p><span>Xuwi Maluleke</span>, Chef</p>
                
                </div>
            </div>
            <h3>CONTACT</h3>
            <div className="contact">
                <div className="social-icons">
                <SiFacebook />
                <AiFillInstagram />
                <FaTwitterSquare />
                <FaWhatsappSquare />
                <FaLinkedin />
                </div>
                <div className="subscribe">
                    <p>Subscribe here</p>
                    <input
                    type="text"
                    placeholder="Email"
                    ></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;