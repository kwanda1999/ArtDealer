// Filename - ContactUs.jsx

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import '../styles/checkout.css'; // Adjust the path as necessary
import { Nav } from "react-bootstrap";

const Checkout = () => {
    return (
        <div> 

            <Navigation />
           <h1> Checkout to Artist</h1>
           <p> Functions we want to see on these pages: <br />
           1. Contact form linked with product information <br />
           2. Checkout form with product information <br />
           3. Artist information <br />
           4. Try to send a message to artist via email <br />
           5. Remove login/register button from checkout <br />
           </p>
        
        </div>
    );
};

export default Checkout;
