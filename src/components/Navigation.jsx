import React from "react";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center"> {/* Align items */}
        <Link to="/" className="nav-link">  <div className="logo me-3"></div> </Link>
            
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav-names">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul style={{ fontFamily: 'Darker Grotesque, sans-serif' }} className="navbar-nav ms-auto"> {/* Align links to the right */}
                    <li className="nav-item">
                        <Link to="/testview" className="nav-link">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/about" className="nav-link">LEARN</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link">CONTACT</Link>
                    </li>

                    <Link to="/login" className="nav-link">
                        <button className="button" >Login</button>
                    </Link>

                    <Link to="/register" className="nav-link">
                        <button className="button" >Register</button>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
    </nav>

        </div>
    );
};

export default Navigation;
