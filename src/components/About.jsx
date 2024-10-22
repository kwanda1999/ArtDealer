import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";


const About = () => {
    return (
        <div>
            <Navigation />

            {/* <h1>About Us</h1> */}


            <p className="center" style={{ fontFamily: 'Darker Grotesque, sans-serif' }}> At ArtDealer, we believe that art is more than just a visual experience—it's a journey that connects artists and art 
            lovers from all walks of life. Our marketplace is a curated space where creativity thrives, bringing together a diverse 
            collection of original paintings, sculptures, digital art, and more from talented artists worldwide. Whether you're a 
            seasoned collector or just starting your art journey, ArtDealer offers a seamless experience to discover, purchase, and 
            cherish unique pieces that resonate with you. Join our community today and immerse yourself in the world of art, where every piece tells a story.
            <br>
            </br>
            {/* <Link to="/" className="nav-link">
            <button className="button" >Home</button>
            </Link> */}
            </p>

            

        </div>
    );
};

export default About;
