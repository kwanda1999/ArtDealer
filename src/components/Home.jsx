import React from "react";
import { Link } from 'react-router-dom';
import catalog from '../data/catalog'; // Adjust this path if necessary
import '../App.css';
import art1 from '../images/art1.jpg'; // Adjusted import statement
import art2 from '../images/art2.jpg';
import art3 from '../images/art3.jpg';
import art4 from '../images/art4.jpg';
import art5 from '../images/art5.jpg';
import art6 from '../images/art6.jpg';
import HomeCarousel from "./HomeCarousel";
import Navigation from "./Navigation";

const Home = () => {
    return (
        <div className="page-background"> {/* Apply the CSS class correctly using className */}
             
             <Navigation />
            <div className="background-cover">

            </div>

            <h2 style={{ fontFamily: 'Darker Grotesque, sans-serif' }} className="center"> 
            At ArtDealer, we believe that art is more than just a visual experience—it's a journey that connects artists and art 
            lovers from all walks of life. 

            
            <Link to="/testview" className="nav-link">
            <button className="button" >Shop Now</button>
            </Link> 

           
            
            </h2>

            <HomeCarousel />

            
              
        </div>
    );
};

export default Home