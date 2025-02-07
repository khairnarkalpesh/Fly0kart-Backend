import React from "react";
import "./Footer.css";

const Footer = () => {
return (
	<>
    <footer>
    <div className="content" style={{paddingTop:"30px", paddingBottom:"30px"}}>
        <div className="left box">
        <i class="fas fa-map-marker-alt fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{marginLeft:"30px"}}>
            <h3>Find Us</h3>
            <p>Flat no - 8, 
            3rd floor,
            Hindustan Angan. 
            Lane no 13/D. 
            Tingre nagar. 
            Pune - 411032</p>
        </div>
        </div>
        <div className="middle box">
        <i class="fas fa-phone fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{float:"left", marginLeft:"10px"}}>
            <h3>Call Us</h3>
            <p>+91-7057962948</p>
        </div>
        </div>
        <div className="right box">
        <i class="fas fa-envelope-open fa-2x f-top-icon" style={{float:"left"}}></i>
        <div style={{float:"left", marginLeft:"10px"}}>
            <h3>Mail Us</h3>
            <p>Hello@Fly0kart.com</p>
        </div>
        </div>
    </div>
    <hr />

    <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic footer-widget-heading"><h3>About us</h3></div>
         <div class="logoContainer"><div class="logoTextF"><h1 class="logoH1">Fly0kart.com</h1></div>
         <div class="logoImage">
             <img src="/static/media/flyokart-plane-svg.42974c30.svg" alt="logo" class="logoSvg" />
        </div>
        </div>
         <p>FLY0KART is a Global Technology Company with the Heart of a Startup. Fly0kart we keep our customers at HEART.</p>
       </div>
       <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="https://www.facebook.com/fly0kart/" target="blank"><i className="fab fa-facebook-f" target="blank"></i></a>
            <a href="https://twitter.com/fly0kart" target="blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/fly0kart" target="blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/fly0kart" target="blank"><i className="fab fa-linkedin" target="blank"></i></a>
        </div>
       {/* <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div className="email">
           <a href="#"><i className="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div> */}
    </div>
    <div className="middle box">
       <div className="topic footer-widget-heading"><h3>Our Services</h3></div>
       <div><a href="#">24/7 Customer Service</a></div>
       <div><a href="#">Guaranteed resolution in 30 min</a></div>
       <div><a href="#">Serving 187 countries & counting</a></div>
       <div><a href="#">Best Customer service</a></div>
       <div><a href="#">Quick Booking</a></div>
       <div><a href="#">Partnership with more than 600 airlines</a></div>
       <div><a href="#">Easy payments</a></div>
       
    </div>
    <div className="right box">
       <div className="footer-widget">
        <div className="footer-widget-heading">
            <h3 className="topic">Subscribe</h3>
        </div>
        <div className="footer-text">
            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
        </div>
        <div className="subscribe-form">
            <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane"></i></button>
            </form>
        </div>

        {/* <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
        </div> */}
    </div>
    </div>
    </div>
    <hr />
    <div className="bottom">
        <div style={{float:"left", marginLeft:"10px"}}>
            <p>Copyright ©{(new Date().getFullYear())} <a href="#" className="name">Fly0Kart</a> All rights reserved</p>     
        </div>
        <div className="footerMenu">
            <a href="#" class="active">Home</a>
            <a href="#">About US</a>
            <a href="#">Services</a>
            <a href="#">Contact US</a>
            <a href="#">Policies</a>
            <a href="#">Pay Now</a>
        </div>
    </div>
    {/* <div className="" style={{width:"50%", float:"right"}}>
        <div style={{float:"right"}}>
            <ul>
                <li>Home</li>
            </ul>
        </div>
    </div> */}

   
    </footer>
    </>
);
};
export default Footer;
