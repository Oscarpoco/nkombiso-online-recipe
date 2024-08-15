// import React from "react";
// import './Footer.css';
// import { SiFacebook } from "react-icons/si";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// function Footer(){
//     return(
//         <div className="footer">
//             <h3>OUR BEST CHEF</h3>
//             <div className="chef">
//                 <div className="item">
//                     <img src="item-1.jpeg" alt="chef"></img>
//                     <p><span>Letelo Khumalo</span>, Chef</p>
//                 </div>
//                 <div className="item">
//                     <img src="item-2.jpeg" alt="chef"></img>
//                     <p><span>Sibusiso Khoza</span>, Chef</p>
//                 </div>
//                 <div className="item">
//                     <img src="item-3.jpeg" alt="chef"></img>
//                     <p><span>Xuwi Maluleke</span>, Chef</p>
                
//                 </div>
//             </div>
//             <h3>CONTACT</h3>
//             <div className="contact">
//                 <div className="social-icons">
//                 <SiFacebook />
//                 <AiFillInstagram />
//                 <FaTwitterSquare />
//                 <FaWhatsappSquare />
//                 <FaLinkedin />
//                 </div>
//                 <div className="subscribe">
//                     <p>Subscribe here</p>
//                     <input
//                     type="text"
//                     placeholder="Email"
//                     ></input>
//                     <button>Submit</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;



import React, { useState } from "react";
import './Footer.css';
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        window.location.href = `mailto:okpoco15@gmal.com?subject=Subscribe&body=Please subscribe me with this email: ${email}`;
    };

    return (
        <div className="footer">
            <h3>OUR BEST CHEF</h3>
            <div className="chef">
                <div className="item">
                    <img src="item-1.jpeg" alt="chef" />
                    <p><span>Letelo Khumalo</span>, Chef</p>
                </div>
                <div className="item">
                    <img src="item-2.jpeg" alt="chef" />
                    <p><span>Sibusiso Khoza</span>, Chef</p>
                </div>
                <div className="item">
                    <img src="item-3.jpeg" alt="chef" />
                    <p><span>Xuwi Maluleke</span>, Chef</p>
                </div>
            </div>
            <h3>CONTACT</h3>
            <div className="contact">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><SiFacebook /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <div className="subscribe">
                    <p>Subscribe here</p>
                    <input
                        type="text"
                        placeholder="Please subscribe"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
