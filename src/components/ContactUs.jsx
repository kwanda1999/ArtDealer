// Filename - ContactUs.jsx

import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Ensure you import your CSS
import Navigation from "./Navigation";

const ContactUs = () => {
    return (
        <div> 
           
        <div className="contact-container">
        <div class="box" id="one">
            <div className="subheading" style={{ fontFamily: 'Darker Grotesque, sans-serif' }}> 
                   How can we help you?
            </div>

                    <div className="contact-form-container">
                    <form style={{ fontFamily: 'Darker Grotesque, sans-serif' }} className="contact-form">
                    <div class="form-group" >
                            <label for="contactName">Name</label>
                            <textarea class="form-control" id="contactName" rows="1" placeholder="Your Name"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="contactEmail"> Email Address </label>
                            <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com" />
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="3" placeholder="Talk to us..."></textarea>
                        </div>
                    </form>
                    </div>
                    
                    <button className="contact-button" style={{ fontFamily: 'Darker Grotesque, sans-serif' }}>
                            Send Message
                    </button>

                    
                    
        </div>

            <div className="column left">
                < div className="heading contact" style={{ fontFamily: 'Darker Grotesque, sans-serif' }}>
                Contact Us
                </div>
                
            </div>
            <div className="column right">
            </div>

            
        </div>
        </div>
    );
};

export default ContactUs;
