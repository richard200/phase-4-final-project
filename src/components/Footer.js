import React from "react";
<<<<<<< HEAD
import "../Footer.css";
=======
import "./Footer.css";
>>>>>>> 47fb41aa3a5b3e8edfd25f98e33537d52131db85

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row ">
        <div className="col">
                <h2>About Us</h2>
                    <li href="#">Story</li>
                    <li href="#">Clients</li>
                    <li href="#">Testimonials</li>
                    </div>
                    <div className="col">
                <h2>Services</h2>
                    <li href="#">Marketing</li>
                    <li href="#">Consulting</li>
                    <li href="#">Development</li>
                    <li href="#">Design</li>
               </div>
               <div className="col">
                <h2>Contact Us</h2>
                    <li href="#">United States</li>
                    <li href="#">United Kingdom</li>
                    <li href="#">Australia</li>
                    <li href="#">Support</li>
               </div>
               <div className="col">
                <h2>Social</h2>
                    <li href="#" className="fab fa-facebook-f">Facebook</li>
                    <li href="#" className="fab fa-instagram">Instagram</li>
                    <li href="#"  className="fab fa-youtube" >Youtube</li>
                    <li href="#" className="fab fa-twitter" >Twitter</li>
              </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;